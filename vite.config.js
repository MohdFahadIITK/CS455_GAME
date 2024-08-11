import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace '/CS455_GAME/' with the correct base URL
export default defineConfig({
  plugins: [react()],
  base: '/CS455_GAME/', // Set the base URL for GitHub Pages
})
