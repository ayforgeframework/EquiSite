/**
 * Simple ARIA live announcer for screen reader feedback.
 */
let liveRegion;

export function announce(message) {
  if (!liveRegion) {
    liveRegion = document.createElement("div");
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.setAttribute("role", "status");
    liveRegion.style.position = "absolute";
    liveRegion.style.left = "-9999px";
    document.body.appendChild(liveRegion);
  }
  liveRegion.textContent = message;
}
