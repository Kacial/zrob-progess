import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "transparent",
        "zp-orange-500": "#f59e0b",
        "zp-orange-400": "#FBBF24",
        "zp-orange-300": "#FCD34D",
        "zp-orange-200": "#FDE68A",
        "zp-orange-100": "#FEF3C7",
        "zp-orange-000": "#FFFBEB",
      },
    },
  },
  plugins: [],
};
export default config;
