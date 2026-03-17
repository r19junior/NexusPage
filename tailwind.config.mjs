/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A', // Navy Blue / Oxford
          teal: '#0D9488', // Verde Azulado / Teal
          bg: '#F1F5F9', // Gris Azulado Claro
          turquoise: '#5EEAD4', // Turquesa Desaturado
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
