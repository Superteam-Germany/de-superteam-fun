import assert from "node:assert/strict";
import test from "node:test";
import { getBreakpointCountdown } from "../public/site/breakpoint-countdown.mjs";

test("counts toward the official website's 09:30 GMT target in London", () => {
  const result = getBreakpointCountdown(Date.parse("2026-11-14T23:00:00Z"));
  assert.deepEqual(result, { state: "upcoming", days: 0, hours: 10, minutes: 30 });
});

test("matches the official countdown in the reported screenshot", () => {
  const result = getBreakpointCountdown(Date.parse("2026-10-15T09:27:58Z"));
  assert.deepEqual(result, { state: "upcoming", days: 31, hours: 0, minutes: 2 });
});

test("splits a longer duration into remaining days, hours and minutes", () => {
  const result = getBreakpointCountdown(Date.parse("2026-10-14T12:34:00Z"));
  assert.deepEqual(result, { state: "upcoming", days: 31, hours: 20, minutes: 56 });
});

test("floors partial minutes like the official timer without starting the event early", () => {
  const result = getBreakpointCountdown(Date.parse("2026-11-15T09:29:30Z"));
  assert.deepEqual(result, { state: "upcoming", days: 0, hours: 0, minutes: 0 });
});

test("continues counting after midnight until the official target", () => {
  assert.deepEqual(getBreakpointCountdown(Date.parse("2026-11-15T00:00:00Z")), {
    state: "upcoming", days: 0, hours: 9, minutes: 30,
  });
});

test("shows the in-event state from the target until the end of 17 November", () => {
  assert.deepEqual(getBreakpointCountdown(Date.parse("2026-11-15T09:30:00Z")), { state: "live" });
  assert.deepEqual(getBreakpointCountdown(Date.parse("2026-11-17T23:59:59Z")), { state: "live" });
});

test("shows a wrapped state after the event instead of a negative countdown", () => {
  assert.deepEqual(getBreakpointCountdown(Date.parse("2026-11-18T00:00:00Z")), { state: "ended" });
  assert.deepEqual(getBreakpointCountdown(Date.parse("2027-01-01T00:00:00Z")), { state: "ended" });
});
