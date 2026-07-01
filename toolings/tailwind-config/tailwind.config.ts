import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{ts,tsx}",
    "../../../src/app/**/*.{ts,tsx}", // CRITICAL: Ensure your frontend app path is listed here!
  ],
  theme: {
    extend: {
      // Shared color palettes or typography presets...
    },
  },
  plugins: [],
};

export default config;