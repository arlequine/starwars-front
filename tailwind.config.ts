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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-blue': '#192840',
        'blue': '#364C78',
        'teal': '#4B8F9C',
        'beige': '#D9D2B9',
        'gold': '#DDAE44',
      },
    },
  },
  plugins: [],
} satisfies Config;
