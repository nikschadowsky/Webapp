import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'node-fetch' : 'axios'
    }
  },
  server:{
    proxy:{
      '/roadmap-state': 'http://localhost:3000',
      '/github-repos': "http://localhost:3000"
    }
  }


})
