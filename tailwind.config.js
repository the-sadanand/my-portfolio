/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        primary: "#6C63FF",       // violet accent
        secondary: "#FF6584",     // pink accent
        dark: "#0F0F0F",          // near-black background
        surface: "#1A1A2E",       // card background
        muted: "#A0A0B0",         // secondary text
      },
    },
  },
  plugins: [],
}