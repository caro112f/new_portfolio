/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Work Sans,sans-serif"],
      serif: ["Anton,sans-serif"],
    },
    extend: {
      fontSize: {
        xlwh1: "6.209rem",
        wh1: "4.209rem",
        wh2: "3.157rem",
        wh3: "2.369rem",
        wh4: "1.777rem",
        wh5: "1.333rem",
        sh6: "1.2rem",
        base: "1rem",
        mh1: "4.488rem",
        mh2: "2.074rem",
        mh3: "1.728rem",
        mh4: "1.44rem",
        mh5: "1.2rem",
        xxs: "0.8rem"
      },
    },
  },
  plugins: [],
};
