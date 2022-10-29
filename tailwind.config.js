/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '1/2xl': '1440px',
      },
      colors: {
        'custom': '#353F5B',
      },
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
