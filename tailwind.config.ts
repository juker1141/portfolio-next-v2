import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "amatic-sc": ["var(--font-amitic-sc)"],
        // mono: ["var(--font-roboto-mono)"],
      },
      backgroundImage: {
        hello: "url('/images/hello.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
