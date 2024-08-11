import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set the base URL for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/CS455_GAME/', // Use the correct base URL for GitHub Pages
})
