/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        'purple' : '#5f27cd',
        'blue' : '#0984e3'
      }
    },
  },
  plugins: [],
};
