/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontSize: {
      'xs': "0.75rem",
      'sm': "0.875rem",
      'tiny': "0.875rem",
      'base': "1rem",
      'lg': "1.125rem",
      'xl': "1.25rem",
      '2xl': "1.5rem",
      '3xl': "1.875rem",
      '4xl': "3.2rem",
      '5xl': "4.2rem",
      '6xl': "5.5rem",
      '7xl': "7rem",
      '8xl': "9rem",
      '9xl': "13rem",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "/public/ScaleSecurity.png"
      }
    },
  },
  plugins: [],
}
