/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,js,ts,html}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F1C3F',
        silver: '#E0E0E0',
        gold: '#FFD700',
        darkGray: '#333333',
      },
    },
  },
  plugins: [],
}