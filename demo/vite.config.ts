import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 Listen on all interfaces
    port: 5173,       // Optional: can be omitted, defaults to 5173
  },
})
