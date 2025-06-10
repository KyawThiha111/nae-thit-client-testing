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
        primary: {
          DEFAULT: "#ffc63e",
          light: "#ffd777",
          dark: "#f3a71f",
        },
        secondary: {
          DEFAULT: "#293a8a",
          light: "#5270b6",
        },
        accent: {
          orange: "#f78e37",
          coral: "#f08173",
          teal: "#6ac5ac",
        },
        base: {
          white: "#ffffff",
          ddm: "#6ac5ac",
          ddmdark: "#49B89B",
        },
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
