const REWARD_TIMING = { durationMs:1200 };

// First visible entry: 0 ── ease out ── 400 at 1200ms. Never replay.
export function animateRewardCount(render, {
  requestFrame = requestAnimationFrame,
  cancelFrame = cancelAnimationFrame,
} = {}) {
  let frame = 0;
  let startedAt;
  let cancelled = false;
  render(0);

  function tick(now) {
    if (cancelled) return;
    startedAt ??= now;
    const progress = Math.min(1, Math.max(0, (now - startedAt) / REWARD_TIMING.durationMs));
    render(Math.round(400 * (1 - Math.pow(1 - progress, 3))));
    if (cancelled) return;
    frame = progress < 1 ? requestFrame(tick) : 0;
  }

  frame = requestFrame(tick);
  return () => {
    cancelled = true;
    if (frame) cancelFrame(frame);
  };
}
