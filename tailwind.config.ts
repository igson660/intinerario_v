import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        canvas: "var(--canvas)",
        rubber: "var(--rubber)",
        "rubber-dark": "var(--rubber-dark)",
        clay: "var(--clay)",
        sage: "var(--sage)",
        line: "var(--line)",
      },
      boxShadow: {
        sheet: "0 1px 2px rgba(18, 45, 64, 0.04), 0 12px 40px rgba(18, 45, 64, 0.07)",
        float: "0 18px 60px rgba(18, 45, 64, 0.14)",
      },
      borderRadius: {
        sheet: "1.125rem",
      },
      transitionTimingFunction: {
        snap: "cubic-bezier(0.23, 1, 0.32, 1)",
        deliberate: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      animation: {
        "fade-up": "fadeUp 420ms cubic-bezier(0.23, 1, 0.32, 1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
