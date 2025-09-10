/**
 * Trap focus inside a container (e.g., modal or menu).
 */
export function trapFocus(container) {
  if (!container) return;
  const focusable = container.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  function handleTab(e) {
    if (e.key !== "Tab") return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  container.addEventListener("keydown", handleTab);
  first?.focus();
  return () => container.removeEventListener("keydown", handleTab);
}
