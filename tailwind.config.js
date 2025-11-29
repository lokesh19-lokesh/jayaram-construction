/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366', // Deep Blue
          light: '#004d99',
          dark: '#002244',
        },
        accent: {
          DEFAULT: '#D4AF37', // Warm Gold
          light: '#E5C158',
          dark: '#B39225',
        },
        gray: {
          light: '#F5F5F5',
          medium: '#E0E0E0',
          dark: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
