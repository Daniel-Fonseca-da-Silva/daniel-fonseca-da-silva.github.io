import { defineConfig } from 'vite'

// Relative base lets the same build work on both GitHub Pages URL types:
// https://<user>.github.io/ (user site) and https://<user>.github.io/<repo>/ (project site).
export default defineConfig({
  base: './',
})
