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
      },
      fontFamily: {
        sourceSans3: ["var(--font-source-sans-3)"],
        poppins: ["var(--font-poppins)"],
        openSans: ["var(--font-open-sans)"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #1E2A5D0A, #303E820A, #3C509D0A)',
      }
    },
  },
  plugins: [],
};
export default config;
