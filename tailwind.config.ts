import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a0a0a",
          light: "#111111",
          lighter: "#161616",
        },
        surface: {
          DEFAULT: "#111111",
          raised: "#161616",
          overlay: "#1a1a1a",
        },
        text: {
          primary: "#e8e8e8",
          secondary: "#b0b0b0",
          muted: "#6b6b6b",
        },
        accent: {
          DEFAULT: "#00e5ff",
          deep: "#00838f",
          violet: "#8b5cf6",
        },
        neon: {
          cyan: "#00e5ff",
          violet: "#8b5cf6",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-dark":
          "linear-gradient(180deg, #0a0a0a 0%, #050505 50%, #000000 100%)",
        "gradient-card":
          "linear-gradient(135deg, #111111 0%, #0a0a0a 100%)",
        "gradient-neon":
          "linear-gradient(135deg, #00e5ff 0%, #8b5cf6 100%)",
        "gradient-surface":
          "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 229, 255, 0.15)",
        "glow-sm": "0 0 15px rgba(0, 229, 255, 0.1)",
        "glow-lg": "0 0 60px rgba(0, 229, 255, 0.2)",
        "glow-violet": "0 0 30px rgba(139, 92, 246, 0.15)",
        card: "0 4px 40px rgba(0, 0, 0, 0.6)",
        "card-hover": "0 8px 60px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "grid-drift": "gridDrift 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 229, 255, 0.08)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 229, 255, 0.18)" },
        },
        gridDrift: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(60px, 60px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
