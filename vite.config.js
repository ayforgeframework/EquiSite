import { defineConfig } from 'vite';

export default defineConfig({
  root: 'demo',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
