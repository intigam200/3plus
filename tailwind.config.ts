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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 3PLUS brand tokens — see 3PLUS_Website_Spec.md section 2
        warmwhite: "#F5F4EF",
        graphite: "#1A1A1A",
        "brand-green": {
          DEFAULT: "#2F5D4F",
          soft: "#C9D9CD",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica", "Arial", "sans-serif"],
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
