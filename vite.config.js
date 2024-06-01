import { defineConfig } from 'vite'
import postcss from './postcss.config.js'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    cors: true,
    proxy: {
      "/mock": {
        target: "http://18.183.21.224:3000/transactions/mock",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock/, ""),
      }
    }
  }
})
