/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#66FFCC',
        'secondary': '#4DDBB3',
        'accent': '#A6FFD9',
        'dark-bg': '#1A1A1A',
        'light-text': '#E0E0E0',
        'dark-text': '#333333',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
