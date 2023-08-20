/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: ["stylelint-scss"],
  "rules" : {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  }
}

