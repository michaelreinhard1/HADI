/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js,twig}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
      body: ["Mulish", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        '2xl': "1360px"
      },
    },
  },
  plugins: [],
}