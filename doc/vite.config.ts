import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['vue'],
  },
  css: {
    preprocessorOptions: {
      modules: {
        scopeBehaviour: 'global',
      },
      scss: {
        additionalData: '@use "@/assets/scss/colors" as *;',
      },
    },
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
  },
});
