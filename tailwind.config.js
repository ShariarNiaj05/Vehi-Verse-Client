/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     ],

  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/banner1.jpg')",
        'advertisement1': "url('/advertisement1.jpg')",
        'advertisement4': "url('/advertisement4.jpg')",
        'advertisement5': "url('/advertisement5.jpg')",
        
      }
    },
  },
  plugins: [],
}

