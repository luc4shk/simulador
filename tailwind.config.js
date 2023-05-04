/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal': '#fb8b83',
        'secuandario': "#ececec",
        'selectOption': "#f4f4f4"
        
      },
    },
  },
  plugins: [],
}