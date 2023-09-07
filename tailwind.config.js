/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sage': '#A0BFB5',
        'teal': '#1AB7C2'
      }
    },
  },
  plugins: [],
})
 