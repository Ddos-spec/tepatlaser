// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config  
export default defineConfig({
  // PENTING: Konfigurasi untuk deploy ke domain kustom Anda
  site: 'https://www.tepatlaser.com', // Ganti dengan domain utama Anda
  base: '/', // Karena dihosting di root domain, bukan subfolder
  
  integrations: [tailwind()],
  
  // CRITICAL: Custom routing untuk file di root src/
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@utils': '/src/utils'
      }
    }
  },
  
  // Custom build configuration
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets' // Ini opsional, tetap bisa digunakan
  },
});