import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        site: "#fffdf5",
        ink: "#444444",
        blue: "#1a6fff",
        mustard: "#c9a227",
      },
    },
  },
  plugins: [],
};
export default config;
