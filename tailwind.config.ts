import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import aspectRatio from "@tailwindcss/aspect-ratio";
import daisyui from "daisyui";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#4F46E5",
        "primary-dark": "#4338CA",
        background: "#ffffff",
        "neutral-dark": "#1F2937",
        "neutral-light": "#F9FAFB",
        accent: "#10B981",
        danger: "#EF4444",
        "gradient-start": "#6366F1",
        "gradient-end": "#4338CA",
      },
      fontFamily: {
        display: ["Kanit", "sans-serif"],
        sans: ["Kanit", "sans-serif"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [forms, typography, aspectRatio, daisyui],
  daisyui: {
    themes: ["light", "dark"],
    base: true,
    utils: true,
    logs: false,
  },
};

export default config;
