/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E8F50',
          opacity: '#1E8F50d4',
          ligth: '#32ea85',
          300: '#2abc6c',
          400: '#28b166',
        },
        secondary: {
          DEFAULT: '#92A097',
          opacity: '#92A097d4',
          ligth: '#c9d9cf',
          300: '#8e9a93',
          400: '#7b857f',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
