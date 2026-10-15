// Match solana.com/breakpoint's countdown target, verified 15 October 2026.
// London is on GMT in November; this is not a confirmed doors-open time.
const countdownTarget = Date.parse("2026-11-15T09:30:00Z");
const closingDay = Date.parse("2026-11-18T00:00:00Z");

export function getBreakpointCountdown(now = Date.now()) {
  if (now >= closingDay) return { state: "ended" };
  if (now >= countdownTarget) return { state: "live" };

  const totalMinutes = Math.floor((countdownTarget - now) / 60000);
  return {
    state: "upcoming",
    days: Math.floor(totalMinutes / 1440),
    hours: Math.floor((totalMinutes % 1440) / 60),
    minutes: totalMinutes % 60,
  };
}
