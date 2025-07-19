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
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 0px #a855f7' },
          '50%': { boxShadow: '0 0 15px #a855f7' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeSlideLoop: {
          '0%': { opacity: 0.8, transform: 'translateY(0)' },
          '50%': { opacity: 1, transform: 'translateY(-5px)' },
          '100%': { opacity: 0.8, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both',
        glow: 'glow 2s infinite ease-in-out',
        bounceSlow: 'bounceSlow 3s infinite',
        fadeSlideLoop: 'fadeSlideLoop 4s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
