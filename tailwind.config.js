/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      zIndex: {
        '1': 1,
        '100': 100
      },
      screens: {
        'xxsm': '300px',
        'xsm': '350px'
      },
      strokeWidth: {
        '3': '3px'
      },
      keyframes: {
        counter: {
          '0%': {
            left: '0%',
            top: 0,
            opacity: 1,
          },
          '60%': {
            top: 0,
            opacity: 0.5,
          },
          '80%': {
            left: '100%',
            top: '-20%',
          },
          '90%': {
            opacity: 0,
            top: '-40%',
          },
          '100%': {
            left: '100%',
          },
        }
      },
      animation: {
        counter: 'counter 1.5s'
      },
      width: {
        100: '25rem'
      },
    },


  },
  plugins: [],
}