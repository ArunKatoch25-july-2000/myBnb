/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ["Blinker", "sans-serif"],
        secondaryFont: ["Tilt Warp", "cursive"],
      },
      colors: {
        mainColor: "#ff385c",
        lightBlack: "#222222",
      },
    },
  },
  plugins: [ require('tailwind-scrollbar')({ nocompatible: true }),],
};
