import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/-Authentication-and-Authorization-System-OAuth-/',
  plugins: [react(),tailwindcss() ],
  
})
