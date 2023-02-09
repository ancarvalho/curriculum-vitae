/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
  ],
}
