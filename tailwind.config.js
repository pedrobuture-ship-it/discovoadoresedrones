/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        bg: { 950: '#0a0e14', 900: '#0d131b', 850: '#121a24', 800: '#16202c' },
        line: '#1f2d3d',
        cyan: { 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4' },
        blue: { 500: '#3b82f6', 600: '#2563eb' },
        wa: '#25D366'
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
