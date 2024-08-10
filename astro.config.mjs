import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://upnotify.me',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  content: {
    collections: [
      {
        name: 'blog',
        type: 'content',
      },
    ],
  },
});