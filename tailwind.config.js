const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'max': '1440px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'vsm': {'max': '400px'},
    },

    colors: {
      primary: {
        'main': '#4361ee'
      },
      black: {
        'dark': colors.black,
        'light': '#0e1726'
      },
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      blue: colors.blue,
    },

    fontFamily: {
      'sans': ['Nunito', 'sans-serif']
    },

    extend: {
      maxWidth: {
        '8xl': '90rem'
      },

      minWidth: {
        '5': '20rem'
       },

      backgroundImage: theme => ({
        'authHero': "url('/src/img/shield-1086703_960_720.webp')",
       }),

       backgroundSize: {
        '3/8': '75%',
      }, 

      boxShadow: {
        'button': '3px 62px 103px -23px rgba(0,0,0,0.76);'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
