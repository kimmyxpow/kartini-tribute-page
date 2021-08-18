module.exports = {
  purge: {
    enabled: true,
    content: ['index.html', 'public/js/*.js'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': '"poppins", sans-serif',
      },
      colors: {
        mycolor: {
          DEFAULT: '#FF3767',
          'purple': '#FF378B',
          'light-divide': '#717171',
          'light-d-h': '#FFC2D1',
          'dark-divide': '#D6D5D5',
          'dark-d-h': '#AA0029',
          'red-dark': '#530014',
          'dark': '#200000',
        },
        typografi: {
          'light-header': '#555555',
          'light-p': '#626262',
          'light-nav': '#C9A4A4',
          'dark-nav': '#DDD0D0',
          'dark-header': '#F8F8F8',
          'dark-p': '#D6D5D5',
          'red-light': '#FFE5EC',
        }
      },
      backgroundImage: theme => ({
        'bg-main': "url('/public/img/bg-main.png')",
      }),
      gap: {
        '50p': '3.125rem',
      },
      boxShadow: {
        'myshadow': '0 4px 30px rgba(255, 55, 103, .25)'
      }
    }
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      pointerEvents: ['hover', 'focus', 'group-hover'],
      grayscale: ['hover', 'focus'],
      dropShadow: ['hover', 'focus'],
      rotate: ['active', 'group-hover'],
      scale: ['active', 'group-hover'],
      fill: ['hover', 'focus', 'group-hover'],
      boxShadow: ['dark'],
    },
  },
  plugins: [],
}