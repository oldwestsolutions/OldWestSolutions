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
          DEFAULT: "#111113",
          light: "#17171a",
          lighter: "#1e1e22",
        },
        surface: {
          DEFAULT: "#17171a",
          raised: "#1e1e22",
          overlay: "#26262c",
        },
        text: {
          primary: "#f2f2f2",
          secondary: "#d9d9d9",
          muted: "#8e8e96",
        },
        accent: {
          DEFAULT: "#0f62fe",
          deep: "#0043ce",
          muted: "#4589ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 28px rgba(15, 98, 254, 0.14)",
        "glow-sm": "0 0 14px rgba(15, 98, 254, 0.10)",
        "glow-lg": "0 0 56px rgba(0, 67, 206, 0.18)",
        card: "0 4px 32px rgba(0, 0, 0, 0.45)",
        "card-hover": "0 12px 48px rgba(0, 0, 0, 0.55)",
        shell: "0 0 100px -28px rgba(15, 98, 254, 0.16)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(15, 98, 254, 0.08)" },
          "50%": { boxShadow: "0 0 36px rgba(15, 98, 254, 0.16)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
