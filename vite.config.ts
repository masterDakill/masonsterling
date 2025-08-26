import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3001,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '3001-idajbammpophna7bf3kr6.e2b.dev',
      '.e2b.dev',
      'all'
    ]
  },
  preview: {
    host: '0.0.0.0',
    port: 3001,
    strictPort: true
  }
})
