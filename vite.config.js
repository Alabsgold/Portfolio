import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚡ CRITICAL FIX: Base URL set to relative path './'
  // This ensures all asset paths (CSS, JS) are relative to index.html, 
  // fixing issues when deployed to a subdirectory like GitHub Pages.
  base: './', 
})
