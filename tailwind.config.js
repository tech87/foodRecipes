/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        customBorder: "#2C5364",
        customBg: "linear-gradient(to bottom, #0F2027, #203A43, #2C5364)",
      },
    },
  },
  plugins: [],
};
