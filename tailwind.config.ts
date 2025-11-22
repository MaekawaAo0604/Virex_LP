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
        primary: {
          50: '#e6f7f7',
          100: '#b3e6e6',
          200: '#80d4d4',
          300: '#4dc2c2',
          400: '#1ab0b0',
          500: '#009999',
          600: '#008080',
          700: '#006666',
          800: '#004d4d',
          900: '#003333',
        },
      },
    },
  },
  plugins: [],
};

export default config;
