import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4912,
    host: '0.0.0.0',
    allowedHosts: ['axt.cyberpunk.co.in', 'localhost', '127.0.0.1']
  }
})
