/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jingga: {
          primary: "#ffc404",
          secondary: "#ffab04"
        },
        article: "#1d1a16",
        price: "#312c1d"
      }
    },
  },
  plugins: [],
}

