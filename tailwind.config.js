/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans]
      },
      colors: {
        primary: colors.sky,
        'i-primary': '#0D75FF',
        'i-secondary': '#CB2E42',
        'i-gray':'#ACB6C1',
        'i-foreground':'#8588A3',
        'i-gray-2':'#F8FAFD',
        'i-neutral':'#0E182A',
        'i-neutral-2':'#182039'
      }
    }
  },
  plugins: []
}
