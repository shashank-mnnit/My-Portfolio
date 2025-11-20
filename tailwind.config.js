/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B84FF", // Electric Blue
        secondary: "#0D0D0F", // Midnight Black
        accent: "#F7F7F7", // Soft White
        "mint-green": "#CCF5F1",
        "neutral-gray": "#1A1A1A",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
