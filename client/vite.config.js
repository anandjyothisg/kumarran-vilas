import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    base:"/kumarran-vilas",
  ],
  server: {
    host: true,
    allowedHosts: ["2b98-157-51-74-170.ngrok-free.app"]
  }
})
