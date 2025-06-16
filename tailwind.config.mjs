/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary Background
        "deep-navy": "#0a0e17",
        "midnight-blue": "#0b1120",
        // Secondary Background
        "blue-gray": "#2D3748",
        "darker-blue": "#1C2938",
        // Card Backgrounds
        "rich-blue": "#1E293B",
        // Accent Colors
        "electric-blue": "#3B82F6",
        cyan: "#06B6D4",
        gold: "#F59E0B",
        emerald: "#10B981",
        // Text Colors
        "off-white": "#F8FAFC",
        "light-gray": "#CBD5E1",
        muted: "#64748B",
        // Poker Elements
        "card-red": "#EF4444",
        "card-black": "#000000",
        "felt-green": "#064E3B",
      },
      fontFamily: {
        sans: ["Inter", "Geist", "SF Pro", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "120px",
      },
      maxWidth: {
        content: "1200px",
      },
      animation: {
        "card-flip": "flip 0.6s ease-in-out",
        "chip-spin": "spin 1s linear infinite",
        deal: "deal 0.5s ease-out",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        deal: {
          "0%": { transform: "translateY(-100%) rotate(-10deg)", opacity: "0" },
          "100%": { transform: "translateY(0) rotate(0)", opacity: "1" },
        },
      },
    },
  },
};
