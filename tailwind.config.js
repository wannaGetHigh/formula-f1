/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-main': '#e10600',
        'black-carbon': '#15151e',
      },
      fontSize: {
        '10': '0.625rem',
        '11': '11px',
        '12': '12px',
        '13': '13px',
      },
      lineHeight: {
        '0': '0'
      }
    },
  },
  plugins: [],
}