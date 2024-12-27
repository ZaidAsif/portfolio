import type { Config } from "tailwindcss";         

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 20px rgba(0, 255, 204, 0.8), 0 0 40px rgba(0, 255, 204, 0.6)',
        'glow-dark': '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-15px)'
          }
        }
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // For headings
        body: ['Roboto', 'sans-serif'],        // For body text
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
} satisfies Config;
