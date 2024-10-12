/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      main: "#7367F0",
      home: "#f5f6fb",
      primary: "#0047FF",
      white: "#FFF",
      menu: "#7367F0",
      yellow: "#858585",
      black: "#000",
      gray: {
        200:"#e5e7eb",
        300: "#9D9DA0",
        400: "#7d7c86",
        500: "#444050",
      },
      purple: {
        100:"#e0e7ff",
        200: "#e9d5ff",
        300:"#f4e9ff"
      },
      green: {
        100: "#dcfce7",
        500: "#22c55e",
      },
      red:{
        100:"#fee2e2",
        500:"#ef4444",
      },
      blue:{
        100:"#dbeafe",
        300:"#7dd3fc"
      },
      orange:{
        500:"#f97316",
        100:"#ffedd5"
      }
    },
    extend: {},
  },
  plugins: [],
};
