import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: '#163353',
        regularBlue: '#293D5A',
        softBlue: '#5C6B8D',
        darkGray:'#404040',
        regularGray:'#808080',
        softGray:'#A6A6A6',
        ultraSoftGray:'#B0B8C2',
        softBlack:'#101C2C',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
