import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset links so it works on GitHub Pages subpaths and any static host
  server: {
    port: 3000,
    open: false
  }
});
