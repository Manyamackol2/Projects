/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',  // Indigo
        accent: '#F472B6',   // Pink
        soft: '#F3F4F6',     // Light background
        muted: '#9CA3AF',    // Secondary text
        card: '#FFFFFF',     // Card background
        border: '#E5E7EB',   // Border
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        xl: '1rem',
      },
       keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};