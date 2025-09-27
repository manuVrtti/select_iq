/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ This line is mandatory for your dark mode toggle
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
