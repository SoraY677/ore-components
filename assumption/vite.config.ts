import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

console.log(path.resolve(__dirname, './src/components'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components')
    }
  }
})
