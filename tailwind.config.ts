import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-dark": defaultColors.blue[950],
      "secondary-dark": defaultColors.blue[900],
      "primary-light": defaultColors.blue[100],
      "secondary-light": defaultColors.white,
      "accent-light": defaultColors.rose[400],
      "accent-dark": defaultColors.rose[500],
      black: defaultColors.black,
      white: defaultColors.white,
    },
    extend: {
      keyframes: {
        typing: {
          "0%, 90%": { width: "0" },
          "30%, 60%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
