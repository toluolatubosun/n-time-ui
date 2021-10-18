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
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
