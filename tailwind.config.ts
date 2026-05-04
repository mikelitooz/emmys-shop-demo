import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── Right Price Carpets Brand ────────── */
        forest:        "#B91C1C", // Rich Red (Primary — Boro red)
        "forest-light":"#DC2626", // Bright Red
        moss:          "#991B1B", // Deep Red
        wheat:         "#FCD34D", // Warm Gold (Secondary)
        ivory:         "#FFFBEB", // Warm Cream
        linen:         "#FEF3C7",
        cream:         "#FFFFFF",
        charcoal:      "#1C1917", // Stone Dark
        graphite:      "#292524",
        taupe:         "#78716C",
        bronze:        "#A16207", // Deep Gold
        smoke:         "#E7E5E4",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom: "0 24px 70px rgba(185, 28, 28, 0.08)",
        card:     "0 8px 30px rgba(185, 28, 28, 0.05)",
        "card-hover": "0 16px 40px rgba(185, 28, 28, 0.1)",
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
