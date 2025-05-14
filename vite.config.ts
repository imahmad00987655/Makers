import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Makers/',
  build: {
    sourcemap: true,
    // Ignore TypeScript errors during build
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'TS_ERROR') return;
        warn(warning);
      }
    }
  }
})
