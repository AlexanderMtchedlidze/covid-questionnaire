/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "sans-serif"],
        "Anonymous-Pro": ["Anonymous Pro", "mono"],
      },
      backgroundColor: {
        "gray-20": "#EAEAEA",
      },
      colors: {
        "dark-gray": "#232323",
        invalid: "#F15524",
        "dark-cyan": "#1289AE",
        "light-cyan": "#59acc6",
      },
      keyframes: {
        "appear-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { transform: "translateX(0)", opacity: "0.5" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "logo-appear": {
          "0%": { transform: "scale(20)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "appear-from-left": "appear-from-left 1s ease-in",
        "logo-appear": "logo-appear .5s ease-in"
      },
    },
  },
  plugins: [],
};
