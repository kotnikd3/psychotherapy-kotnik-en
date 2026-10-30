import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    vitePrerenderPlugin({
      renderTarget: '#app',
      prerenderScript: fileURLToPath(new URL('./src/prerender.js', import.meta.url)),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
        preprocessorOptions: {
            scss: {
                quietDeps: true,
                api: 'modern-compiler', // or 'modern'
            },
        },
    },
})
