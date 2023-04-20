import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // añado el path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // añado el alias
    }
  }
})
