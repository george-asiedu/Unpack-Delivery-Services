/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': ['Roboto']
      }, 
      colors: {
        heading: '#FF5E41',
        black: '#222',
        paragraph: '#A7A7A7',
        smallHeading: '#7A7A7A',
        ratings: '#FFC952',
        borderColor: '#BDBDBD'
      }
    },
  },
  plugins: [],
}