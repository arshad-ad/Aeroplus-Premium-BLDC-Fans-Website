import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        poppins: "var(--font-poppins)",
      },


      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
    
  
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    }
    },
    
  },
  plugins: [],
} satisfies Config;
