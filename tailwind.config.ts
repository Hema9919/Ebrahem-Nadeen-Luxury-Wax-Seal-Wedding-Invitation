import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0B",
        foreground: "#F8F5EF",
        luxury: {
          deepBlack: "#0B0B0B",
          richBlack: "#151515",
          surface: "#1A1A1A",
          cardDark: "#131313",
          gold: "#C6A15B",
          goldLight: "#E6CC8A",
          goldDark: "#9A7B38",
          ivory: "#F8F5EF",
          ivoryMuted: "#D3CBBF",
          burgundy: "#5C121D",
          burgundyDark: "#3A070F",
          burgundyLight: "#7A1A28",
        },
      },
      fontFamily: {
        arabic: ["var(--font-alexandria)", "var(--font-cairo)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E6CC8A 0%, #C6A15B 50%, #9A7B38 100%)",
        "gold-shimmer": "linear-gradient(90deg, #C6A15B 0%, #F5E7B8 50%, #C6A15B 100%)",
        "gold-border-gradient": "linear-gradient(to bottom, #E6CC8A, #C6A15B, #6A5323, #C6A15B, #E6CC8A)",
        "card-gradient": "linear-gradient(180deg, #181818 0%, #111111 100%)",
        "wax-gradient": "radial-gradient(circle at 35% 35%, #7e1727 0%, #4c0a13 60%, #2e0409 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 35px -5px rgba(198, 161, 91, 0.25)",
        "gold-glow-lg": "0 0 60px -10px rgba(198, 161, 91, 0.35)",
        "seal-shadow": "0 12px 25px -4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(92, 18, 29, 0.4)",
        "envelope-inner": "inset 0 2px 10px rgba(255, 255, 255, 0.05), inset 0 -10px 25px rgba(0, 0, 0, 0.8)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
