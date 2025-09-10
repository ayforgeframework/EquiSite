import { defineConfig } from 'vite';
export default defineConfig({ root: 'demo', publicDir: 'public', base: '/EquiSite/', build: { outDir: '../dist', emptyOutDir: true } });
