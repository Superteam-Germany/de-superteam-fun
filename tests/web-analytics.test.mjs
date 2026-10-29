import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { runInNewContext } from "node:vm";
import nextConfig from "../next.config.js";

const rewrites = await nextConfig.rewrites();
const staticPages = Object.values(rewrites)
  .flat()
  .filter(({ destination }) => destination.endsWith(".html"));

for (const { source, destination } of staticPages) {
  test(`${source} initializes analytics independently of the Next.js layout`, () => {
    const html = readFileSync(new URL(`../public${destination}`, import.meta.url), "utf8");
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
    const scripts = [...head.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
    const trackers = scripts.filter(([, attributes]) =>
      /\bsrc=["']\/_vercel\/insights\/script\.js["']/.test(attributes),
    );

    assert.equal(trackers.length, 1, "Load the same-origin analytics script exactly once");
    assert.match(trackers[0][1], /\bdefer\b/, "Analytics must not block page rendering");

    const trackerIndex = scripts.indexOf(trackers[0]);
    const bootstrap = scripts.slice(0, trackerIndex).filter(([, attributes]) =>
      !/\b(?:src|type)=/.test(attributes),
    );
    const window = {};
    for (const [, , code] of bootstrap) runInNewContext(code, { window });

    assert.equal(typeof window.va, "function", "Initialize the queue before loading analytics");
    window.va("event", "queued-before-load");
    assert.deepEqual(Array.from(window.vaq[0]), ["event", "queued-before-load"]);

    const existingTracker = () => {};
    const initializedWindow = { va: existingTracker };
    for (const [, , code] of bootstrap) {
      runInNewContext(code, { window: initializedWindow });
    }
    assert.equal(initializedWindow.va, existingTracker, "Preserve an already initialized tracker");
  });
}
