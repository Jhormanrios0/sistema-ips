/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#5379a8",
        secondaryColor: "#a4b9d0",
        thirdColor: "#364F6D",

        bgMain: "#d7dce2",
      },
    },
  },
  plugins: [],
};
