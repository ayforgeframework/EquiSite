/**
 * Auto-insert skip link if not present.
 */
export function ensureSkipLink(targetId = "main") {
  if (!document.querySelector(".skip-link")) {
    const link = document.createElement("a");
    link.href = `#${targetId}`;
    link.textContent = "Skip to content";
    link.className = "skip-link";
    link.style.position = "absolute";
    link.style.left = "-999px";
    link.style.top = "auto";
    link.style.width = "1px";
    link.style.height = "1px";
    link.style.overflow = "hidden";

    link.addEventListener("focus", () => {
      link.style.left = "10px";
      link.style.top = "10px";
      link.style.width = "auto";
      link.style.height = "auto";
      link.style.background = "white";
      link.style.padding = "8px 12px";
      link.style.zIndex = "1000";
    });
    link.addEventListener("blur", () => {
      link.style.left = "-999px";
      link.style.width = "1px";
      link.style.height = "1px";
    });

    document.body.prepend(link);
  }
}
