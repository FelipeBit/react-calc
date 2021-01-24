module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        textColor: ['active'],
        boxShadow: ['active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
