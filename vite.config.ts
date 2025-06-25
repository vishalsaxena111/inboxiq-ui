import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/emails': {
        target: 'http://localhost:9090', // replace with your backend port
        changeOrigin: true,
      },
    },
  },
})
