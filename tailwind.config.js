/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        celeste:'#91E9F2',
        azulOscuro:'#191B40',
        naranja:'#FFAB91',
        amarillo:'#FFE082',
        verde:'#A5D6A7',
        rosa:'#F48FB1'
      }
    },
  },
  plugins: [],
}

