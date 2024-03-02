/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      'xs': '0.64rem',
      'sm': '0.8rem',
      'base': '1rem',
      'md': '1.15rem',
      'lg': '1.25rem',
      'xl': '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem',
      '5xl': '3.815rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
}
