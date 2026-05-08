/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fafa',
          100: '#e5f1f0',
          200: '#c8e0de',
          300: '#a3cdc9',
          400: '#7bc4be',
          500: '#5dbdb6',
          600: '#4a9b96',
          700: '#3d7d79',
          800: '#2a5654',
          900: '#1c3938',
          950: '#0e1e1e',
        },
        accent: {
          50: '#fbf7f9',
          100: '#f5ebf0',
          200: '#ecd6e0',
          300: '#dbb6c8',
          400: '#c99fb5',
          500: '#b888a8',
          600: '#9c6a8c',
          700: '#7e5572',
          800: '#5d3e54',
          900: '#3d2837',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', '"Segoe UI"', 'sans-serif'],
        futura: ['Futura', '"Futura PT"', '"Trebuchet MS"', 'Jost', '"Century Gothic"', 'sans-serif'],
        helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
