/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"], // Corrected array structure
      },
      colors: {
        primary: '#4fbf8b',
        secondary: '#44ae7c',
      },
    },
  },
  plugins: [],
}

