import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 Listen on all interfaces
    port: 5173,       // Optional: can be omitted, defaults to 5173
    watch: {
      usePolling: true,         // 👈 Needed for Docker + volume changes
    },
  },  
   resolve: {
    alias: {
      'curiosity-ui': path.resolve(__dirname, '../curiosity-ui/src'),
    },
  },
})