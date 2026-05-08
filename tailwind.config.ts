import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── Emmy's Shop – Navy & Champagne Gold ── */
        forest:        "#1B2A4A", // Deep Navy (Primary)
        "forest-light":"#2D4470", // Medium Navy
        moss:          "#0F1D35", // Darkest Navy
        wheat:         "#C9A96E", // Champagne Gold (Secondary)
        ivory:         "#FAF8F5", // Warm Off-White
        linen:         "#F0EDE8", // Soft Linen
        cream:         "#FFFFFF",
        charcoal:      "#1A1A2E", // Near Black
        graphite:      "#4A4A5A", // Dark Gray
        taupe:         "#8B8B99", // Muted Gray
        bronze:        "#B8965A", // Deep Gold
        smoke:         "#E8E6E1", // Light Warm Gray
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom: "0 24px 70px rgba(27, 42, 74, 0.08)",
        card:     "0 8px 30px rgba(27, 42, 74, 0.05)",
        "card-hover": "0 16px 40px rgba(201, 169, 110, 0.12)",
      },
      borderRadius: {
        card: "12px",
      },
      keyframes: {
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.4s ease-out",
        "fade-in":  "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
