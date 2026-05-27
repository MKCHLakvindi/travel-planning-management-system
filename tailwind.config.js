/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'railway': ['Railway', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#228B22',
      },
      backgroundImage: {
        'planning-bg': "url('/planing_bg.jpg')",
      }
    },
  },
  plugins: [],
}

