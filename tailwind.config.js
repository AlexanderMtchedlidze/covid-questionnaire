/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
      },
      backgroundColor: {
        "gray-20": "#EAEAEA",
      },
      colors: {
        "gray-black": "#232323",
      }
    },
  },
  plugins: [],
};
