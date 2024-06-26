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
        "custom-blue": "#3b97e1",
        "custom-black": "rgba(0, 0, 0, 0.8)",
        "custom-lightblue": "#a4bbcf",
        "text-colorblue": "#2980b9",
        "custom-gold": "#ffcc00",
        "custom-chatroom": "#2c3e50",
      },
      width: {},
    },
  },
  plugins: [],
};
export default config;
