import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charcoal base
        ink: {
          950: "#07080A",
          900: "#0B0D10",
          800: "#111418",
          700: "#181C22",
          600: "#232830",
          500: "#333B45",
          400: "#5A636F",
        },
        // Signal green accent (environmental / sensor)
        signal: {
          DEFAULT: "#4ADE80",
          400: "#5BE895",
          500: "#4ADE80",
          600: "#22C55E",
          700: "#16A34A",
        },
        studio: "#B6B6B8", // matches the frame background grey
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "80%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
