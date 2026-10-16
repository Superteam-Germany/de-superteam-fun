import assert from "node:assert/strict";
import test from "node:test";
import { animateRewardCount } from "../public/site/breakpoint-reward.mjs";

function frames() {
  let id = 0;
  const pending = new Map();
  return {
    requestFrame:callback => { pending.set(++id, callback); return id; },
    cancelFrame:frame => pending.delete(frame),
    step(time) { const callbacks = [...pending.values()]; pending.clear(); callbacks.forEach(callback => callback(time)); },
    get pending() { return pending.size; },
  };
}

test("reward counts upwards to exactly 400 once, without overshooting", () => {
  const clock = frames();
  const values = [];
  animateRewardCount(value => values.push(value), clock);
  for (const time of [0, 300, 600, 900, 1200, 2000]) clock.step(time);
  assert.equal(values[0], 0);
  assert.equal(values.at(-1), 400);
  assert(values.some(value => value > 0 && value < 400));
  assert(values.every((value, index) => Number.isInteger(value) && value <= 400 && (!index || value >= values[index - 1])));
  assert.equal(clock.pending, 0);
});

test("cancelling an in-progress reward animation releases its frame and stops further writes", () => {
  const clock = frames();
  const values = [];
  const cancel = animateRewardCount(value => values.push(value), clock);
  clock.step(0);
  clock.step(200);
  cancel();
  const written = [...values];
  clock.step(1200);
  assert.deepEqual(values, written);
  assert.equal(clock.pending, 0);
});

test("a render callback can settle the counter without scheduling another frame", () => {
  const clock = frames();
  let cancel;
  cancel = animateRewardCount(value => { if (value > 200) cancel(); }, clock);
  clock.step(0);
  clock.step(900);
  assert.equal(clock.pending, 0);
});
