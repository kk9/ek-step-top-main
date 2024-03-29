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
        brOverlay: "#554342",
      },
      fontFamily: {
        Rubik: ["Rubik Regular"],
        Albert: ["Albert Sans"],
      },
      animation: {
        rotate: "rotate 6s linear infinite",
        fadeIn : "fadeIn 2s linear",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
      },
    },
    plugins: [],
  },
};
export default config;
