/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#F2E6D8",
        secondary: "#593825",
        accent: "#A69E97",
      }
    },
  },
  plugins: [],
}

