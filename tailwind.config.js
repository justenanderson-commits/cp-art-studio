/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem'
      },
      colors: {
        'sage': '#A0BFB5',
        'teal': '#1AB7C2'
      }
    },
  },
  plugins: [],
})
 