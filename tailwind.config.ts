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
    },
  },
  plugins: [],
};
export default config;
