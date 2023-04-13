/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./models/**/*.{js,ts}",
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
        'dark': '#09081E',
        'gold': {
          '50': '#ffffe7',
          '100': '#fdffc1',
          '200': '#fffe86',
          '300': '#fff541',
          '400': '#ffe60e',
          '500': '#fed701',
          '600': '#d09f00',
          '700': '#a67202',
          '800': '#89580a',
          '900': '#74480f',
          '950': '#442604',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
