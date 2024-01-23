/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './nuxt.config.{js,ts}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

