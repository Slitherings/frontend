/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',],
  theme: {
    extend: {},
  },
  plugins: ["stylelint-scss"],
  "rules" : {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  }
}

