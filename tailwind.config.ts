import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f2b84d",
        secondary: "#543c1a",
      },
      fontFamily: {
        "amatic-sc": ["var(--font-amitic-sc)"],
        roboto: ["var(--font-roboto)"],
        "londrina-solid": ["var(--font-londrina-solid)"],
        "titan-one": ["var(--font-titan-one)"],
        // mono: ["var(--font-roboto-mono)"],
      },
      backgroundImage: {
        hello: "url('/images/hello2.svg')",
        menu: "url('/images/menu.svg')",
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
          "0%": { transform: "translateX(0) scaleX(.8)", opacity: "1" },
          "100%": { transform: "translateX(-50px) scaleX(1)", opacity: "0" },
        },
      },
      animation: {
        "fix-0.5": "fix 0.5s ease-in-out alternate infinite",
        "fix-0.7": "fix 0.7s ease-in-out alternate infinite",
        "fix-0.9": "fix 0.9s ease-in-out alternate infinite",
        speed: "speed 1s ease-out infinite",
        breath: "breath 1s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
