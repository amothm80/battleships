/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        '1020': 'repeat(10,20px)'
      },
      gridTemplateRows:{
        '1020': 'repeat(10,20px)'
      }
    },
  },
  plugins: [],
}