import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  content: {
    collections: [
      {
        name: 'blog',
        type: 'content',
      },
    ],
  },
});