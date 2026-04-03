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
          DEFAULT: "#1F1F1F",
          light: "#2B2B2B",
          lighter: "#3A3A3A",
        },
        surface: {
          DEFAULT: "#2B2B2B",
          raised: "#3A3A3A",
          overlay: "#444444",
        },
        text: {
          primary: "#F2F2F2",
          secondary: "#D9D9D9",
          muted: "#A6A6A6",
        },
        accent: {
          DEFAULT: "#2F6BFF",
          deep: "#1F3B73",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-dark":
          "linear-gradient(180deg, #1F1F1F 0%, #141414 50%, #0A0A0A 100%)",
        "gradient-card":
          "linear-gradient(135deg, #2B2B2B 0%, #1F1F1F 100%)",
        "gradient-surface":
          "linear-gradient(180deg, #2B2B2B 0%, #1F1F1F 100%)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(47, 107, 255, 0.15)",
        "glow-sm": "0 0 10px rgba(47, 107, 255, 0.1)",
        "glow-lg": "0 0 40px rgba(47, 107, 255, 0.2)",
        card: "0 4px 24px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.4)",
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
          "0%, 100%": { boxShadow: "0 0 20px rgba(47, 107, 255, 0.1)" },
          "50%": { boxShadow: "0 0 30px rgba(47, 107, 255, 0.2)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
