/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
         darkMode : "#10172A" , 
         textDarkMode : "#E7E7E7",
         navBar : "#1F2937"
      }
    },
  },
  plugins: [],
  darkMode : "class"
}

