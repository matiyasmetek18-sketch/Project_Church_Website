// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://matiyasmetek18-sketch.github.io',
  base: '/Project_Church_Website',
  vite: {
    plugins: [tailwindcss()]
  }
});
