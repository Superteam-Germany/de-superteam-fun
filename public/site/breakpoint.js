import { getBreakpointCountdown } from "./breakpoint-countdown.mjs";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

export function isMotionPaused() {
  return reducedMotion.matches;
}

const menuToggle = document.querySelector(".mobile-menu-toggle");
const mobileNavigation = document.getElementById("mobile-navigation");

function setMenuOpen(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileNavigation.classList.toggle("is-open", open);
  mobileNavigation.setAttribute("aria-hidden", String(!open));
  mobileNavigation.inert = !open;
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});
mobileNavigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => setMenuOpen(false));
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 1040) setMenuOpen(false);
});

const countdown = document.getElementById("breakpoint-countdown");
const countdownLabel = document.getElementById("countdown-label");
const countdownValues = document.getElementById("countdown-values");

function updateCountdown() {
  const remaining = getBreakpointCountdown();
  if (remaining.state === "upcoming") {
    for (const key of ["days", "hours", "minutes"]) {
      const value = countdown.querySelector(`[data-time="${key}"]`);
      const next = String(remaining[key]).padStart(2, "0");
      const changed = value.textContent && value.textContent !== next;
      value.textContent = next;
      if (changed && !isMotionPaused() && !document.hidden) {
        value.animate([{ opacity:0, transform:"translateY(5px)" },{ opacity:1, transform:"none" }],{ duration:220, easing:"cubic-bezier(.2,.8,.2,1)" });
      }
    }
    countdown.setAttribute("aria-label", `${remaining.days} days, ${remaining.hours} hours and ${remaining.minutes} minutes until 15 November 2026 at 09:30 GMT in London`);
  } else {
    const message = remaining.state === "live" ? "Breakpoint is here" : "Breakpoint 2026 has wrapped";
    countdownLabel.textContent = message;
    countdownValues.hidden = true;
    countdown.setAttribute("aria-label", message);
  }
  countdown.hidden = false;
}

let countdownTimeout;
function refreshCountdown() {
  updateCountdown();
  clearTimeout(countdownTimeout);
  // Refresh just after the minute boundary so flooring cannot retain the old
  // minute at exactly :00.000. Also refresh immediately when a tab resumes.
  if (!document.hidden) {
    countdownTimeout = setTimeout(refreshCountdown, 60050 - (Date.now() % 60000));
  }
}
refreshCountdown();
document.addEventListener("visibilitychange", refreshCountdown);

reducedMotion.addEventListener("change", () => {
  updateMotionState();
  document.dispatchEvent(new Event("breakpoint-motion-change"));
});

function updateMotionState() {
  document.documentElement.classList.toggle("motion-paused", isMotionPaused() || document.hidden);
}
updateMotionState();
document.addEventListener("visibilitychange", updateMotionState);

// Entrance storyboard, matching the homepage's 600ms / 20px rise:
//     0ms  A section enters the viewport and begins its one-time reveal.
//    70ms  The next card or step in the same entering group follows.
//   600ms  The first item settles; completed entrances never replay.
const REVEAL_TIMING = { staggerMs:70 };

// Prepare only offscreen content, so late initialization or a restored scroll
// position never hides something the visitor has already seen.
function mountScrollReveals() {
  if (!("IntersectionObserver" in window) || isMotionPaused()) return;

  const pending = new Set(Array.from(document.querySelectorAll("[data-reveal]"))
    .filter(element => element.getBoundingClientRect().top >= window.innerHeight));
  if (!pending.size) return;

  const observer = new IntersectionObserver(entries => {
    const enteringGroups = new Map();
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      let delay = 0;
      if (element.matches(".reason,.join-step")) {
        const index = enteringGroups.get(element.parentElement) || 0;
        delay = Math.min(index, 2) * REVEAL_TIMING.staggerMs;
        enteringGroups.set(element.parentElement, index + 1);
      }
      show(element, true, delay);
    });
  }, { rootMargin:"0px 0px -8% 0px", threshold:.12 });

  function show(element, animate, delay = 0) {
    if (!pending.delete(element)) return;
    element.classList.remove("reveal-pending");
    if (animate && !isMotionPaused() && !element.contains(document.activeElement)) {
      element.style.setProperty("--reveal-delay", `${delay}ms`);
      element.classList.add("reveal-once");
    }
    observer.unobserve(element);
    if (!pending.size) {
      observer.disconnect();
      document.removeEventListener("focusin", showFocused);
      reducedMotion.removeEventListener("change", showForReducedMotion);
    }
  }

  function showFocused(event) {
    const element = event.target instanceof Element ? event.target.closest("[data-reveal]") : null;
    if (element) show(element, false);
  }

  function showForReducedMotion() {
    if (isMotionPaused()) pending.forEach(element => show(element, false));
  }

  pending.forEach(element => {
    element.classList.add("reveal-pending");
    observer.observe(element);
  });
  document.addEventListener("focusin", showFocused);
  reducedMotion.addEventListener("change", showForReducedMotion);
}

mountScrollReveals();
