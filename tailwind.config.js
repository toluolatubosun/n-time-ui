const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/components/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat']
    },
    colors: {
      primary: '#9482FF',
      secondary: '#1E1A33',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
