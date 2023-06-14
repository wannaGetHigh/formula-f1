/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-main': '#e10600',
        'black-15': '#15151e',
      },
      fontSize: {
        '10': '0.625rem',
        '11': '11px',
        '12': '12px',
        '13': '13px',
      }
    },
  },
  plugins: [],
}