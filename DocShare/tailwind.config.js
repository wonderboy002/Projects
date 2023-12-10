/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'dark' : '#222f3e',
        'purp' : '#341f97'
      }
    },
  },
  plugins: [],
}

