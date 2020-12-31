const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(212, 100%, 71%)',
        },
        secondary: {
          DEFAULT: '#ffff7f',
        },
        tertiary: {
          DEFAULT: '#84ff6b',
        },
        orange: {
          DEFAULT: '#ffa16b',
        }
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
