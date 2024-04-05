import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-dark": "#1F2E47",
      "primary-light": "#D3CFDE",
      "accent": "#E5446D"
    }
  },
  plugins: [],
};
export default config;
