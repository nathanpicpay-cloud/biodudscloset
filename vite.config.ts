
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuração otimizada para deploy estático na Vercel
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
