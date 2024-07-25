import { defineConfig,loadEnv  } from 'vite'
import react from '@vitejs/plugin-react'


process.env = { ...process.env, ...loadEnv('', process.cwd()) };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target:process.env.API_URL||'http://localhost:8000/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
