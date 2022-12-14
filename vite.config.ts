import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: './docs'
  },
  plugins: [react({
    jsxRuntime: 'automatic', // <---
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin'],
    },
  })],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})
