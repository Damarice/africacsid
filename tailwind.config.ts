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
        // Brand colors from logo
        primary: {
          DEFAULT: '#1B7340', // Rich Green
          light: '#2A9D5F',
          dark: '#0F5A2E',
        },
        secondary: {
          DEFAULT: '#F7941D', // Vibrant Orange
          light: '#FFA940',
          dark: '#E67E00',
        },
        accent: {
          DEFAULT: '#0066B3', // Deep Blue
          light: '#1E88E5',
          dark: '#004A8F',
        },
        cream: '#FFF8F0', // Warm light background
        sand: '#FFE8CC', // Warm accent background
        gold: '#FFB84D', // Gold accent
      },
    },
  },
  plugins: [],
};

export default config;
