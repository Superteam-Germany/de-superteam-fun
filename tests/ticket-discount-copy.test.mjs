import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const source = fs.readFileSync(new URL("../public/site/announcement.js", import.meta.url), "utf8");
const { mountDiscountCodes } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);

function fixture() {
  const code = { textContent:"SUPERTEAM-6NQP-BP26" };
  const label = { textContent:"Copy code" };
  const statusClasses = new Set();
  const status = { textContent:"Use this code at checkout.", classList:{ add:value => statusClasses.add(value), remove:value => statusClasses.delete(value) } };
  const button = new EventTarget();
  button.disabled = false;
  button.querySelector = () => label;
  const fields = { "[data-discount-value]":code, "[data-copy-code]":button, "[data-copy-status]":status };
  return { code, label, status, statusClasses, button, root:{ querySelectorAll:() => [{ querySelector:selector => fields[selector] }] } };
}

const settle = () => new Promise(resolve => setImmediate(resolve));

test("copies the displayed ticket code and confirms success only after the clipboard resolves", async () => {
  const ui = fixture();
  const writes = [];
  let complete;
  const cleanup = mountDiscountCodes(ui.root, { writeText:code => { writes.push(code); return new Promise(resolve => { complete = resolve; }); } });
  ui.button.dispatchEvent(new Event("click"));
  assert.equal(ui.button.disabled, true);
  assert.equal(ui.label.textContent, "Copy code");
  assert.equal(ui.statusClasses.has("ticket-code-silent"), true, "pending progress must stay visually hidden");
  ui.button.dispatchEvent(new Event("click"));
  assert.deepEqual(writes, ["SUPERTEAM-6NQP-BP26"]);
  complete();
  await settle();
  assert.equal(ui.label.textContent, "Copied");
  assert.match(ui.status.textContent, /copied/i);
  assert.equal(ui.statusClasses.has("ticket-code-silent"), true, "success is announced without duplicate visible text");
  assert.equal(ui.button.disabled, false);
  cleanup();
});

test("clipboard denial keeps the code visible, explains manual copying and allows a retry", async () => {
  const ui = fixture();
  const clipboard = { writeText:async () => { throw new Error("Permission denied"); } };
  const cleanup = mountDiscountCodes(ui.root, clipboard);
  ui.button.dispatchEvent(new Event("click"));
  await settle();
  assert.equal(ui.code.textContent, "SUPERTEAM-6NQP-BP26");
  assert.equal(ui.label.textContent, "Copy code");
  assert.match(ui.status.textContent, /manually/i);
  assert.equal(ui.statusClasses.has("ticket-code-silent"), false, "manual-copy guidance must remain visible");
  assert.equal(ui.button.disabled, false);
  clipboard.writeText = async () => {};
  ui.button.dispatchEvent(new Event("click"));
  await settle();
  assert.equal(ui.label.textContent, "Copied");
  clipboard.writeText = async () => { throw new Error("Permission denied"); };
  ui.button.dispatchEvent(new Event("click"));
  await settle();
  assert.equal(ui.label.textContent, "Copy code");
  assert.equal(ui.statusClasses.has("ticket-code-silent"), false);
  assert.match(ui.status.textContent, /manually/i);
  cleanup();
});

test("copying again preserves the Copied label and hides progress until the clipboard settles", async () => {
  const ui = fixture();
  let complete;
  let writes = 0;
  const cleanup = mountDiscountCodes(ui.root, { writeText:() => {
    writes++;
    return new Promise(resolve => { complete = resolve; });
  } });
  ui.button.dispatchEvent(new Event("click"));
  complete();
  await settle();
  assert.equal(ui.label.textContent, "Copied");

  ui.button.dispatchEvent(new Event("click"));
  assert.equal(ui.label.textContent, "Copied", "a repeat click must not flash the original label");
  assert.equal(ui.statusClasses.has("ticket-code-silent"), true);
  ui.button.dispatchEvent(new Event("click"));
  assert.equal(writes, 2, "pending copies must still reject duplicate clicks");
  complete();
  await settle();
  assert.equal(ui.label.textContent, "Copied");
  assert.equal(ui.statusClasses.has("ticket-code-silent"), true);
  cleanup();
});

test("cleanup removes click handling and prevents a pending clipboard response updating removed content", async () => {
  const ui = fixture();
  let complete;
  let writes = 0;
  const cleanup = mountDiscountCodes(ui.root, { writeText:() => { writes++; return new Promise(resolve => { complete = resolve; }); } });
  ui.button.dispatchEvent(new Event("click"));
  cleanup();
  const statusAtCleanup = ui.status.textContent;
  complete();
  await settle();
  assert.equal(ui.status.textContent, statusAtCleanup);
  assert.equal(ui.label.textContent, "Copy code");
  ui.button.dispatchEvent(new Event("click"));
  assert.equal(writes, 1);
});
