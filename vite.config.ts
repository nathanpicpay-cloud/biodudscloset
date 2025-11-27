import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente (local .env ou Vercel env vars)
  // Use '.' instead of process.cwd() to avoid TypeScript errors with Process type
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Garante que process.env.API_KEY funcione no código do cliente
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})