/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      'desktop': '1440px'
    },
    colors: {
      'white-c': '#ffffff',
      'light-gray-c': '#d6e2f0',
      'grayish-blue-c': '#7b879d',
      'dark-blue-c': '#1f3251'
    },
    fontFamily: {
      'Outfit': ['Outfit']
    },
    fontSize: {
      base: ['15px'],
      big: ['20px']
    },
    extend: {
      width: {
        '375': '300px'
      }
    },
  },
  plugins: [],
}
