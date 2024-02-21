/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      zIndex: {
        '1': '1',
      },
      width: {
        100: '34rem'
      }
    },
    screens: {
      '2sm': '350px',
      // => @media (min-width: 340px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    strokeWidth: {
      '2': '2px',
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
      counter: 'counter 1.5s',
    }
  },
  plugins: [],
}