/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#808285",
          "200": "#767676",
          "300": "#0c0c0c",
          "400": "#030b16",
          "500": "rgba(255, 255, 255, 0.3)",
        },
        springgreen: {
          "100": "#45f882",
          "200": "rgba(69, 248, 130, 0.5)",
        },
        white: "#fff",
        black: "#000",
        darkolivegreen: "#68531b",
        lightgray: "rgba(197, 214, 216, 0.5)",
        darkslategray: "#3f3f3f",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        play: "Play",
      },
      borderRadius: {
        "75xl": "94px",
        xl: "20px",
        "161xl-7": "180.7px",
        mini: "15px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      "17xl": "2.25rem",
      "61xl": "5rem",
      "9xl": "1.75rem",
      "21xl": "2.5rem",
      "83xl-9": "6.43rem",
      "32xl-4": "3.21rem",
      "53xl": "4.5rem",
      "13xl": "2rem",
      "2xl": "1.31rem",
      base: "1rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
