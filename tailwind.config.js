/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["Noto Sans Arabic", "serif"],
      },
      colors: {
        success: "#caa34d", // ايه ده يباشا ؟
        main: "#f8f8f8", // ايه ده يباشا ؟
        info: "#2F6ED5", // ايه ده يباشا ؟
        primary: {
          100: "#d2d2d8",
          200: "#b4b4be",
          300: "#8e8f9e",
          400: "#68697e",
          500: "#43445d",
          550: "#1d1e3d",
          600: "#181933",
          700: "#131429",
          800: "#0f0f1f",
          900: "#0a0a14",
          950: "#06060c",
        },
        secondary: {
          100: "#f4eddb",
          200: "#ede0c4",
          300: "#e5d1a6",
          400: "#dcc288",
          500: "#d3b26b",
          550: "#caa34d",
          600: "#a88840",
          700: "#876d33",
          800: "#655227",
          900: "#43361a",
          950: "#28210f",
        },
        third: {
          100: "#f7f7f7",
          200: "#f1f1f1",
          300: "#eaeaea",
          400: "#e3e3e3",
          500: "#dcdcdc",
          550: "#d5d5d5",
          600: "#b2b2b2",
          700: "#8e8e8e",
          800: "#6b6b6b",
          900: "#2b2b2b",
        },
      },
    },
    darkMode: "class",
    plugins: [heroui()],
  },
};
