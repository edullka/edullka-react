const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'header': '60rem',
        'sm-header': '45rem',
      },
      lineHeight: {
        'titulo': '1.5',
      },
      colors: {
        orange: colors.orange,
        redcode: {
          light: '#e06c75',
          DEFAULT: '#e45649',
          dark: '#cd3f45',
        },
        purplecode: {
          DEFAULT: '#a626a4',
        },
        greencode: {
          light: '#50a14f',
          DEFAULT: '#9fca56',
          dark: '#50a14f',
          wsp: '#4DC247',
        },
        bluecode: {
          light: '#4078f2',
          DEFAULT: '#55b5db',
        },
        browncode: {
          DEFAULT: '#986801',
        },
        yellowcode: {
          DEFAULT: '#e6cd69',
        },
        discord: {
          light: '#87a4ff',
          DEFAULT: '#7696fd',
        }
      },
      fontFamily: {
        'nav': 'Oswald',
        'main': ["'Roboto'", 'sans-serif']
      },
      maxWidth: {
        '8xl': '112rem'
      },
      fontSize: {
        '7.5xl': '5rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
