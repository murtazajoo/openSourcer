/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Grenze Gotisch", "cursive"],
        title: ["Keania One", "cursive"],
        saira: ["Saira", "sans-serif"],
      },
    },
  },
  plugins: [],
};
