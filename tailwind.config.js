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
      },
    },
  },
  plugins: [],
};
