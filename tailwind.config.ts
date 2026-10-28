import type { Config } from "tailwindcss";

/**
 * Dronzer AI design tokens: charcoal surfaces, neutral ink, one restrained
 * crimson accent. Green/amber/red are reserved for status meaning only.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1240px" },
    },
    extend: {
      colors: {
        background: "#08090b",
        surface: { DEFAULT: "#101114", raised: "#16171b", hover: "#1d1e23" },
        line: { DEFAULT: "#292a30", subtle: "#202126" },
        ink: { DEFAULT: "#f0eff1", 2: "#aaa9b0", 3: "#83838c" },
        crimson: {
          DEFAULT: "#ad2632",
          hover: "#c03340",
          bright: "#d8424f",
          soft: "rgba(173, 38, 50, 0.12)",
        },
        success: "#6f9b82",
        warning: "#c39b5c",
        danger: "#c4575f",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
};

export default config;
