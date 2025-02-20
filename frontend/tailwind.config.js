/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#1d1d1d',
        customtWhite: '#c4c5c5',
        customBlue: '#0077ff',
      }
    },
  },
  plugins: [],
}