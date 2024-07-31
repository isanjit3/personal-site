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
        lightBackground: '#F5F5F5', // Off-white color for light mode
        darkBackground: '#181818', // CustomGray for dark mode
        customGray: '#181818',
        customRed: '#EF4444', // Same red color as your name
      },
    },
  },
  plugins: [],
};
export default config;
