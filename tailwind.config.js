/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        coral:   "#E94560",
        gold:    "#FFD700",
        green:   "#2D9B6F",
        teal:    "#38EF7D",
        purple:  "#764BA2",
        orange:  "#FF6B35",
        dark:    "#1A1A2E",
        mid:     "#16213E",
        deep:    "#0F3460"
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins:  ['Poppins', 'sans-serif'],
        inter:    ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}