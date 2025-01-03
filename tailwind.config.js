/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "primary-1": "#3f2a15",
        "primary-2": "rgb(104, 89, 73)",
        "action-1": "#ac0000",
        "action-2": "#800101",
      },
    },
  },
  plugins: [],
};
