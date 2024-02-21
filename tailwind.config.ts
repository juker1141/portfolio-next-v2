import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "full-dvh": "100dvh",
      },
      minHeight: {
        "full-dvh": "100dvh",
      },
      colors: {
        primary: "#543c1a",
        secondary: "#121212",
        beige: "#f4ecdf",
        yellow: "#f2b84d",
      },
      zIndex: {
        "5": "5",
      },
      fontFamily: {
        "amatic-sc": ["var(--font-amitic-sc)"],
        roboto: ["var(--font-roboto)"],
        "titan-one": ["var(--font-titan-one)"],
      },
      dropShadow: {
        "images-xs": "0 20px 20px rgba(0, 0, 0, 0.2)",
        "images-sm": "0 30px 20px rgba(0, 0, 0, 0.2)",
        images: "0 50px 20px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "menu-btn": "url('/images/main/menu-btn.svg')",
        menu: "url('/images/main/menu.svg')",
        "stick-1": "url('/images/main/stick-1.svg')",
        "stick-2": "url('/images/main/stick-2.svg')",
        "stick-3": "url('/images/main/stick-3.svg')",
        "stick-4": "url('/images/main/stick-4.svg')",
      },
      transitionProperty: {
        height: "height",
      },
      keyframes: {
        fix: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-5px)" },
        },
        speed: {
          "0%": { transform: "translateX(0) scaleX(0)", opacity: "0" },
          "100%": { transform: "translateX(-100px) scaleX(1)", opacity: "0.5" },
        },
        breath: {
          "0%": { transform: "translateX(-20px) scaleX(.8)", opacity: "1" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateX(-70px) scaleX(1)", opacity: "0" },
        },
        "bounce-sm": {
          "0%, 100%": {
            transform: "translateY(-15%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        "fix-0.5": "fix 0.5s ease-in-out alternate infinite",
        "fix-0.7": "fix 0.7s ease-in-out alternate infinite",
        "fix-0.9": "fix 0.9s ease-in-out alternate infinite",
        speed: "speed 1s ease-out infinite",
        breath: "breath 1s ease-out infinite",
        "bounce-sm": "bounce-sm 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
