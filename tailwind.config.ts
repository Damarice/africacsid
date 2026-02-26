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
        // Brand colors from logo - CORRECT COLORS
        primary: {
          DEFAULT: '#72bc4d', // Light Green
          light: '#66c73c',
          dark: '#559441',
          darker: '#366330',
        },
        secondary: {
          DEFAULT: '#fcd260', // Yellow
          light: '#fcd260',
          dark: '#9f8255',
        },
        accent: {
          DEFAULT: '#80bae6', // Light Blue
          light: '#80bae6',
          dark: '#779478',
        },
        neutral: {
          DEFAULT: '#2a2a22', // Dark neutral
        },
        gold: '#fcd260', // Yellow for buttons
        cream: '#FFF8F0', // Very light warm background (subtle)
      },
    },
  },
  plugins: [],
};

export default config;
