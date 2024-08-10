/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          primary: '#F1F6FC',    // pearl white (now used as background)
          secondary: '#313B37',  // street gray (now used for text)
          accent: '#B6FA46',     // lime (still used for accents)
          dark: '#011109',       // almost black (now used for contrast elements)
        },
      },
    },
    plugins: [],
  }