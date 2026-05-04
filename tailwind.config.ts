import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ── K.E.S. Bathrooms Brand ────────── */
        forest:        "#0D9488", // Rich Teal (Primary)
        "forest-light":"#14B8A6", // Bright Aqua
        moss:          "#0F766E", // Deep Teal
        wheat:         "#94A3B8", // Cool Slate (Secondary)
        ivory:         "#F8FAFC", // Clean White
        linen:         "#F1F5F9",
        cream:         "#FFFFFF",
        charcoal:      "#0F172A", // Slate Dark
        graphite:      "#1E293B",
        taupe:         "#64748B",
        bronze:        "#475569", // Dark Slate
        smoke:         "#E2E8F0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"], // Bathrooms look better with modern sans-serif
        body:    ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        showroom: "0 24px 70px rgba(13, 148, 136, 0.08)",
        card:     "0 8px 30px rgba(13, 148, 136, 0.05)",
        "card-hover": "0 16px 40px rgba(13, 148, 136, 0.1)",
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
