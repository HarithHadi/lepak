import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      // Use a unique name that Next.js doesn't use
      '/kalori': {
        target: 'https://kalori-api.my',
        changeOrigin: true,
        secure: false,
        // This is the magic part: it removes "/kalori" and adds "/api" back
        // before sending it to the real server
        rewrite: (path) => path.replace(/^\/kalori/, '/api')
      }
    }
  }
})