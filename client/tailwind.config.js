/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom Animations
      animation: {
        'bounce-slow': 'bounce 3s infinite',       // Robot floating effect
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards', // Smooth entry for chat & text
        'gradient': 'gradient 8s linear infinite', // Shimmering text effect
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Status dot
      },
      
      // Custom Keyframes
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      }
    },
  },
  plugins: [],
}