/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        fontRaleway:['Raleway', 'sans-serif'],
        fontOpenSans:['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}