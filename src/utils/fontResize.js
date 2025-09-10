/**
 * Accessible font resize controls.
 */
import { announce } from "./ariaAnnouncer.js";

let base = parseInt(localStorage.getItem("font-base") || "16", 10);

function applySize() {
  document.body.style.fontSize = `${base}px`;
}

export function initFontControls(incBtn, decBtn) {
  applySize();

  incBtn?.addEventListener("click", () => {
    base = Math.min(22, base + 2);
    localStorage.setItem("font-base", base);
    applySize();
    announce(`Font size increased to ${base}px`);
  });

  decBtn?.addEventListener("click", () => {
    base = Math.max(12, base - 2);
    localStorage.setItem("font-base", base);
    applySize();
    announce(`Font size decreased to ${base}px`);
  });
}
