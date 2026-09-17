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
        /* Warm paper tones — the site should feel bright, never gloomy. */
        paper: {
          DEFAULT: "#FCFBF7",
          100: "#F6F4EC",
          200: "#EFEBDF",
          300: "#E3DDCB",
        },
        /* Forest greens, from deep bark-shadow to pale new growth. */
        forest: {
          950: "#12271A",
          900: "#193322",
          800: "#22452E",
          700: "#2E5C3D",
          600: "#3D7A50",
          500: "#4F9A66",
          400: "#72B688",
          300: "#A0D2B1",
          200: "#CBE7D5",
          100: "#E7F3EC",
        },
        /* Warm counterpoint — late light, autumn leaf. */
        amber: {
          700: "#8A6220",
          600: "#B0802C",
          500: "#D0A24A",
          400: "#E3BF77",
          300: "#F0DCAF",
          100: "#FAF2DF",
        },
        bark: {
          900: "#221E18",
          700: "#3D362C",
          500: "#6B6255",
          400: "#8E8578",
          300: "#B5AC9D",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      borderRadius: {
        leaf: "1.75rem 0.5rem 1.75rem 0.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-0.6deg)" },
          "50%": { transform: "rotate(0.6deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        sway: "sway 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
