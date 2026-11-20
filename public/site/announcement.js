/** Mount copy controls for the discount code displayed in each offer.
 * @param {Document | HTMLElement | null} root
 * @param {Pick<Clipboard, "writeText"> | undefined} clipboard
 */
export function mountDiscountCodes(root, clipboard = globalThis.navigator?.clipboard) {
  if (!root) return;
  const detach = [];
  root.querySelectorAll("[data-discount-copy]").forEach(group => {
    const code = group.querySelector("[data-discount-value]")?.textContent?.trim();
    const button = group.querySelector("[data-copy-code]");
    const label = button?.querySelector("[data-copy-label]");
    const status = group.querySelector("[data-copy-status]");
    if (!code || !button || !label || !status) return;
    const originalLabel = label.textContent;
    let active = true;
    let copying = false;

    async function copyCode() {
      if (copying) return;
      copying = true;
      button.disabled = true;
      status.classList.add("ticket-code-silent");
      status.textContent = "Copying code…";
      try {
        if (!clipboard?.writeText) throw new Error("Clipboard unavailable");
        await clipboard.writeText(code);
        if (active) {
          label.textContent = "Copied";
          status.textContent = "Code copied.";
          status.classList.add("ticket-code-silent");
        }
      } catch {
        if (active) {
          label.textContent = originalLabel;
          status.textContent = "Select the code above and copy it manually.";
          status.classList.remove("ticket-code-silent");
        }
      } finally {
        copying = false;
        if (active) button.disabled = false;
      }
    }

    button.addEventListener("click", copyCode);
    detach.push(() => {
      active = false;
      button.removeEventListener("click", copyCode);
      button.disabled = false;
    });
  });
  return () => detach.forEach(cleanup => cleanup());
}
