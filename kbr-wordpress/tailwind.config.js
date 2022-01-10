const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kbr-orange': '#FF7300',
        'kbr-blue': '#5CBFCF',
        'kbr-green': '#49C5B1',
        'kbr-red': '#C5003E',
        'kbr-turquoise': '#0094A2',
      },
      fontFamily: {
        sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
