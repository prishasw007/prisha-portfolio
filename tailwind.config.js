/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: ["light-mode", "dark-mode"],
  theme: {
    extend: {},
  },
  plugins: [],
};
