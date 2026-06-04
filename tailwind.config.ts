// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
        sans:  ["var(--font-sans)",  "Jost",             "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
