import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  define: {
    // 'process.env': {
    //   REACT_APP_API: process.env.REACT_APP_API,
    //   REACT_APP_ID: process.env.REACT_APP_ID,
    //   REACT_APP_REDIRECT_URL: process.env.REACT_APP_REDIRECT_URL
    // }
    'process.env': process.env
  },
  plugins: [react()]
})
