import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#9E3B3B",
        secondary: "#EDEBE7",
        foreground: "#FA865E",
        textcolor: "#020100",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)"],
      },
    },
  },
  plugins: [],
};
export default config;