/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        "viaoda-libre-regular": ["Viaoda Libre", "serif"],
        caveat: ['Caveat', 'cursive'],
      },
      screens: {
        'mobile': { 'raw': '(max-width: 639px)' },
        'max-w-400': { 'raw': '(max-width: 400px)' },
      },
      colors: {
        'common-text': '#4B4626',
      },
    },
  },
  plugins: [],
}

