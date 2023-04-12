/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        oneXl: "1188px",
      },
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        balck: "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      boxShadow: {
        "3xl": "hsla(26, 100%, 55%, 0.477) 0px 8px 24px",
        "4xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      screens: {
        "1xl": "1437px",
      },
      animation: {
        fadeIn: "fadeIn 0.2s",
        fadeOut: "fadeOut 0.2s",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
