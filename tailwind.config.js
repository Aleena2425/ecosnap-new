/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34D399", // EcoSnap green
      },
    },
  },
  plugins: [],
};
// postcss.config.js