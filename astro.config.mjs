import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://upnotify.me',
  integrations: [tailwind(), sitemap(), alpinejs(), mdx()],
  content: {
    collections: [{
      name: 'blog',
      type: 'content'
    }]
  }
});