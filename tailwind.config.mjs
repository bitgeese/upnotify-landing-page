/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Obviously', 'sans'],
          mono: ["Degular Mono", "sans-mono"]

        },
        fontWeight: {
          super: 950
        },
        boxShadow: {
          'gold': '4px 4px 0px 0px rgba(255, 215, 0, 1)',
          'gold-lg': '8px 8px 0px 0px rgba(255, 215, 0, 1)',
          'dark': '4px 4px 0px 0px rgba(49,59,55, 1)',
          'dark-lg': '8px 8px 0px 0px rgba(49,59,55, 1)',
          'lime-lg': '8px 8px 0px 0px rgba(0,255,102, 1)',
        },
        colors: {
          pearl: "#F1F6FC",
          black: "#011109",
          dark: "#313B37",
          lime: "#00FF66",
          gold: "#FFD700"
        },
      },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
      ],
  }