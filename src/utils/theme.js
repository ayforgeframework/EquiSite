/**
 * Theme switching with announcements + localStorage persistence.
 */
import { announce } from "./ariaAnnouncer.js";

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("equisite-theme", theme);
  announce(`Switched to ${theme} mode`);
}

export function initThemeToggle(btn) {
  const saved = localStorage.getItem("equisite-theme") || "light";
  applyTheme(saved);

  if (btn) {
    btn.setAttribute("aria-pressed", saved === "dark");
    btn.textContent = saved === "dark" ? "☀️" : "🌙";

    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      btn.setAttribute("aria-pressed", next === "dark");
      btn.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }
}
