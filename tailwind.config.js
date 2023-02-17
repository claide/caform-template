/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    './assets/**/*.scss',
    './assets/**/*.css',
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'primary': '#302C98',
        'secondary': '#EB2057',
        'dark': '#09081E'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
