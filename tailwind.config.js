/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dancing: ["Raleway", "sans-serif"],
        fuggles: ["Fuggles", "cursive"],
        Satisfy: ["Satisfy", "cursive"],
      },
    },

    colors: {
      dgreen: "#3b3833",
      dcream: "#fff8f0",
      dred: "#e05d4f",
      lgreen: "#10aea6",
      mgreen: "#387654",
      dbrown: "#6c3f18",
      dorange: "#ec8922",
      lbrown: "#915018",
      dblack: "#000000",
      mred: "#D52439",
      dblue: "#1D313C",
      claret: "#811638",
      indigo: "#590C68",
      indian: "#BA5E62",
    },
    screens: {
      xs: "550px",
      sm: "650px",
      md: "857px",
      lg: "1050px",
      xl: "1300px",
    },
  },
  plugins: [],
};
