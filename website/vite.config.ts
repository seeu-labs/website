/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  },
  server: {
    host: '0.0.0.0',
    cors: true,
    proxy: {
      '/api': {
        target: 'https://seeu.meme',
        secure: false,
        ws: true,
        changeOrigin: true,
        rewrite: (pathApi) => pathApi
      }
    }
  }
})
