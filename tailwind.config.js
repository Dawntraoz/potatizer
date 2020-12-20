const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        title: ["'Quicksand'", 'sans-serif'],
      },
      width: {
        panel: '420px',
      },
      colors: {
        lime: colors.lime,
      },
      scale: {
        175: '1.75',
        200: '2',
        350: '3.5',
      },
    },
  },
}
