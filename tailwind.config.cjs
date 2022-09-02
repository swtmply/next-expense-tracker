/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: {
          primary: "#0F1A2A",
          secondary: "#0F1A2A85",
          muted: "#0F1A2A55",
          line: "#F0F0F0",
          background: {
            DEFAULT: "#FAFAFA",
            secondary: "#FFFFFF",
          },
        },
        dark: {
          primary: "#FFFFFF",
          secondary: "#FFFFFF85",
          muted: "#FFFFFF55",
          line: "#3B3B3B",
          background: {
            DEFAULT: "#181818",
            secondary: "#292929",
          },
        },
        egreen: {
          50: "#EFFDEC",
          100: "#D6FAD1",
          200: "#ADF3A7",
          300: "#74E76E",
          400: "#34D334",
          500: "#4BA44B",
          600: "#059607",
          700: "#047806",
          800: "#065F09",
          900: "#064E08",
        },
        eorange: {
          50: "#FDF0EC",
          100: "#FADCD1",
          200: "#F3BEA7",
          300: "#E7966E",
          400: "#E77A28",
          500: "#D36E34",
          600: "#D96207",
          700: "#B45604",
          800: "#864308",
          900: "#633708",
        },
      },
    },
  },
  plugins: [],
}
