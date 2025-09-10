/**
 * EquiSite Framework - starter entry
 * Code once, include all.
 */

import { initThemeToggle } from "./utils/theme.js";
import { initFontControls } from "./utils/fontResize.js";
import { ensureSkipLink } from "./utils/skipLink.js";
import { announce } from "./utils/ariaAnnouncer.js";

const EquiSite = {
  initEquiSite() {
    console.log("✅ EquiSite Framework initialized — Code once, include all.");
    ensureSkipLink('main');
  },
  announce,
  initThemeToggle,
  initFontControls
};

if (typeof window !== 'undefined') {
  window.EquiSite = EquiSite;
}

export default EquiSite;
