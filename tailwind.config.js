/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx,css,js}"],
  theme: {
    extend: {
      color: {
        oilers: "#FC4C02",
        panthers: "#C8102E",
      },
      backgroundColor: {
        button: "#0D7AC9",
        hover: "#0C6AB1",
        oilers: "#FC4C02",
        panthers: "#C8102E",
      },
      screens: {
        "3xl": { max: "1920px" },
        "2xl": { max: "1536px" },
        xl: { max: "1280px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
        xs: { max: "480px" },
      },
    },
  },
  plugins: [],
};
