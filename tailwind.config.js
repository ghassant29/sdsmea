/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "white-gradient":
          "linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0))",
      },
      colors: {
        primary: "#333333",
        secondary: "#1F1F1F",
        tertiary: "#a0a0a0",
        cpink: "#e4137e",
        cblue: "#00aeef",
        cyellow: "#f7e92a",
        dark: {
          DEFAULT: "#1f1f1f",
          light: "#363636"
        },
        cwhite: {
          DEFAULT: "#f5f5f5",
          light: "#fafafa",
        },
        light: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
