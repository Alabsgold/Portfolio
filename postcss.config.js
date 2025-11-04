/** @type {import('postcss').Config} */
export default {
  plugins: {
    // 1. We use the official Tailwind CSS PostCSS plugin now:
    '@tailwindcss/postcss': {}, 
    
    // 2. Autoprefixer ensures your CSS works across different browsers:
    'autoprefixer': {},
  },
}
