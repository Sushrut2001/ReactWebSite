/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deepgreen : "#0C4D2E",
        beige : "#E5D0A6",
        darkbrown : "#7A4922",
        goldenyellow : "#D19A4B",
        brightorange: "#F39229",
      },
    },
  },
  plugins: [],
}

