/** Attach the same announcement behavior to standalone and React pages.
 * @param {HTMLElement | null} bar
 */
export function mountAnnouncement(bar) {
  if (!bar) return;

  const strip = bar.querySelector(".announcement-inner");
  if (!strip) return;

  function syncHeight() {
    const height = strip.getBoundingClientRect().height;
    document.documentElement.style.setProperty("--announcement-height", `${height}px`);
  }

  syncHeight();
  window.addEventListener("pageshow", syncHeight);
  window.addEventListener("resize", syncHeight);
  const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(syncHeight);
  observer?.observe(strip);

  return () => {
    window.removeEventListener("pageshow", syncHeight);
    window.removeEventListener("resize", syncHeight);
    observer?.disconnect();
  };
}

if (typeof document !== "undefined") {
  document.querySelectorAll("[data-static-announcement]").forEach(bar => {
    if (bar instanceof HTMLElement) mountAnnouncement(bar);
  });
}
