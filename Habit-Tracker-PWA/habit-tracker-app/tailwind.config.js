/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#bae6fd',
          medium: '#5eead4',
          accent: '#99f6e4',
          text: '#1e3a8a',
          background: '#f3f4f6'
        }
      }
    }
  },
  plugins: [],
}

