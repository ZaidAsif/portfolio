import type { Config } from "tailwindcss";         

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
