import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "product-dark": "#0f3349",
        "product-light": "#0c5068",
        "product-blue": "#172554",
      },
      fontWeight: {
        "extrabold": "900",
      },
      screens: {
        "xl": "1396px",
        "lg": "964px",
        "xs": "450px"
      }
    },
  },
  plugins: [],
};
export default config;
