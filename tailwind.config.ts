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
          DEFAULT: "#a78bfa",
          deep: "#6d28d9",
          muted: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-dark":
          "linear-gradient(180deg, #111113 0%, #0c0c0e 50%, #080809 100%)",
        "gradient-card":
          "linear-gradient(135deg, #1e1e22 0%, #141416 100%)",
        "gradient-surface":
          "linear-gradient(180deg, #1a1a1e 0%, #111113 100%)",
        "gradient-accent": "linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 50%, #6d28d9 100%)",
      },
      boxShadow: {
        glow: "0 0 28px rgba(167, 139, 250, 0.12)",
        "glow-sm": "0 0 14px rgba(167, 139, 250, 0.08)",
        "glow-lg": "0 0 56px rgba(139, 92, 246, 0.15)",
        card: "0 4px 32px rgba(0, 0, 0, 0.45)",
        "card-hover": "0 12px 48px rgba(0, 0, 0, 0.55)",
        shell: "0 0 100px -28px rgba(139, 92, 246, 0.14)",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(167, 139, 250, 0.07)" },
          "50%": { boxShadow: "0 0 36px rgba(167, 139, 250, 0.14)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
