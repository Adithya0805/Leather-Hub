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
        // Atelier Semantic Theme Tokens
        canvas: "#FBF9F5",
        surface: "#FFFFFF",
        primary: {
          DEFAULT: "#7A3E1D",
          dark: "#633216",
        },
        "primary-dark": "#633216",
        heading: "#2C1A11",
        body: "#6B5B52",
        "border-soft": "#EADDD3",
        brass: "#C29B38",
        biscuit: "#F3ECE5",
        muted: "#9A8C84",

        // Brand Palette Mappings
        "deep-saddle": "#2C1A11",
        "ambur-tan": "#7A3E1D",
        "rich-cream": "#FBF9F5",
        "heritage-brass": "#C29B38",

        // Tonal Nuances for atelier finishes
        saddle: {
          950: "#1A0F0A",
          900: "#2C1A11",
          850: "#3D2418",
          800: "#503020",
          700: "#6B5B52",
          600: "#7A3E1D",
          500: "#9A5228",
          400: "#B87042",
          300: "#D4986E",
          200: "#EADDD3",
          100: "#F3ECE5",
          50: "#FBF9F5",
        },
        tan: {
          900: "#4D2610",
          800: "#633216",
          700: "#7A3E1D",
          600: "#944E27",
          500: "#B36737",
          400: "#C98555",
          300: "#DCA67D",
          200: "#EADDD3",
          100: "#F3ECE5",
          50: "#FBF9F5",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "Inter", "system-ui", "sans-serif"],
        editorial: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        warm: "0 4px 20px -2px rgba(44, 26, 17, 0.05)",
        micro: "0 1px 3px 0 rgba(44, 26, 17, 0.04)",
        subtle: "0 2px 8px 0 rgba(44, 26, 17, 0.04)",
        elevated: "0 10px 30px -4px rgba(44, 26, 17, 0.08)",
        leather: "0 12px 28px -4px rgba(44, 26, 17, 0.08)",
        brass: "0 0 16px -2px rgba(194, 155, 56, 0.25)",
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
