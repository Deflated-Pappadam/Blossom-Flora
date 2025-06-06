/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.64rem",
      sm: "0.8rem",
      base: "1rem",
      md: "1.15rem",
      lg: "1.25rem",
      xl: "1.563rem",
      "2xl": "1.953rem",
      "3xl": "2.441rem",
      "4xl": "3.052rem",
      "5xl": "3.815rem",
    },
     colors: {
      "primary":"#2d2d2d",
      "secondary":'#3a5a8c',
      "accent":"#bcd0f2",
      "background":"#fcfcfc",
      
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black':'#000000',
      'white':'#ffffff'

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        logo: ["Great Browich"],
        poppins: ["Poppins", "sans-serif"],
        pathway: ["Pathway", "sans-serif"],
        caslon: ["Caslon", "sans-serif"],
        main: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
