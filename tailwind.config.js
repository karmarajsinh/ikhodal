/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables manually toggling dark mode using the 'dark' class
  theme: {
    extend: {
      colors: {
        crimson: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f38080',
          500: '#e53e3e',
          600: '#c53030',
          700: '#9b2c2c',
          800: '#8b0000', // Primary Crimson Light
          900: '#7a0000',
          dark: '#a32626', // Primary Crimson Dark
        },
        gold: {
          50: '#fbf9f1',
          100: '#f7f2dc',
          200: '#efe5b9',
          300: '#e6d38e',
          400: '#dcbe62',
          500: '#d4af37', // Sacred Gold
          600: '#bc962a',
          700: '#9c7720',
          800: '#7d5c18',
          900: '#644814',
        },
        spiritual: {
          cream: '#FCF9F5', // Light Background
          charcoal: '#121212', // Dark Background
          zincDark: '#1e1e1e', // Slightly lighter dark background for cards
        }
      },
      fontFamily: {
        serif: ['Lora', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'DM Sans', 'sans-serif'],
      },
      boxShadow: {
        'glass-light': '0 8px 32px 0 rgba(139, 0, 0, 0.05)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
