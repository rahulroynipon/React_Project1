/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      mdd: "905px",
      lg: "976px",
      mxl: "1280px",
      xl: "1440px",
      mmxl: "1600px",
      mmmxl: "1750px",
      xxl: "1920px",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      xxl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none",
      custom: "0px 0px 16px -5px rgba(59,96,201,0.91)",
    },
    extend: {
      colors: {
        primary: "#B9FF66",
        pBlack: "#191A23",
        pWhite: "#F3F3F3",
      },
      fontFamily: {
        custom: ["Cascadia Mono", "monospace"], // "monospace" should be a string
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      keyframes: {
        "scroll-marquee": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "scroll-marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};
