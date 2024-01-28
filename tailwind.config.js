/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navyblue: '#001F3F',
        gold: '#FFD700',
        "navyblue-500": '#0A2556',
        "navyblue-100": '#d2e8ff',
        "gold-100": '#fffbe5',
      }
    },
  },
  plugins: [],
}