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
        // Brand Primary Palette
        "deep-saddle": "#1A1412",
        "ambur-tan": "#C89D66",
        "rich-cream": "#FDFBF7",
        "heritage-brass": "#B38F4D",

        // Tonal nuances for depth & luxury finishes
        saddle: {
          950: "#120D0B",
          900: "#1A1412",
          850: "#221B18",
          800: "#2D2421",
          700: "#3D322E",
          600: "#5A4B45",
          500: "#7A6860",
          400: "#9C8980",
          300: "#C4B6AF",
          200: "#E4DCD7",
          100: "#F4EFEA",
          50: "#FAF7F5",
        },
        tan: {
          900: "#5A3F1F",
          800: "#7C582B",
          700: "#9E7238",
          600: "#B88647",
          500: "#C89D66", // Ambur Tan
          400: "#D6B284",
          300: "#E3C7A3",
          200: "#F0DEC4",
          100: "#F9F1E6",
          50: "#FCF8F2",
        },
        brass: {
          700: "#7E6332",
          600: "#9B7B3E",
          500: "#B38F4D", // Heritage Brass
          400: "#CCA662",
          300: "#E0C07F",
        },
        cream: {
          DEFAULT: "#FDFBF7",
          50: "#FFFFFF",
          100: "#FDFBF7",
          200: "#F7F2E8",
          300: "#EDE4D3",
          400: "#DFD2BD",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
        editorial: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        micro: "0 1px 2px rgba(26, 20, 18, 0.05)",
        subtle: "0 4px 14px -2px rgba(26, 20, 18, 0.07)",
        elevated: "0 12px 28px -4px rgba(26, 20, 18, 0.12)",
        leather: "0 20px 40px -10px rgba(26, 20, 18, 0.22)",
        brass: "0 0 20px -3px rgba(179, 143, 77, 0.35)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      spacing: {
        safe: "env(safe-area-inset-bottom, 1rem)",
        "safe-top": "env(safe-area-inset-top, 0.5rem)",
        "safe-bottom": "env(safe-area-inset-bottom, 1rem)",
      },
      padding: {
        safe: "env(safe-area-inset-bottom, 1rem)",
        "safe-bottom": "env(safe-area-inset-bottom, 1rem)",
      },
    },
  },
  plugins: [],
};

export default config;
