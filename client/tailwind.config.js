/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Custom Animations
      animation: {
        'bounce-slow': 'bounce 3s infinite',         // For the Floating Robot
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards', // For the Chat Window opening
        'gradient': 'gradient 8s linear infinite',   // For the Shimmering Name text
      },
      
      // 2. Keyframes for the animations
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
      },
      
      // 3. Custom Fonts (Optional - ensures clean typography)
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}