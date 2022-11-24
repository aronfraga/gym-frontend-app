import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      '/foo': 'https://app-gym-frontend.vercel.app/',
      '/api/': {
      target: 'https://api.cloudinary.com/',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
      },  
    }
  }
})

