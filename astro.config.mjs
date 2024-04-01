import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file',
    assets: 'static-dev'
  },
  output: 'static',
  outDir: './dist',
  base: '/',
  integrations: [tailwind()],
  adapter: netlify()
});