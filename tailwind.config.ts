import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        milk: "#F7F5F0",
        surface: "#FFFDFC",
        graphite: "#262825",
        muted: "#777B75",
        sage: "#A8B7A2",
        "sage-light": "#E6ECE2",
        blush: "#E7C8C5",
        "blush-light": "#F5E7E5",
        gold: "#C8A96B",
        "gold-light": "#F2E8D4"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(38, 40, 37, 0.08)",
        lift: "0 16px 36px rgba(38, 40, 37, 0.10)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
