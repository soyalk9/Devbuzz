/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
        mono: ['var(--font-jetbrains-mono)']
      },
      colors: {
        bg: '#020617',
        surface: '#0f172a',
        primary: '#6366f1',
        accent: '#22c55e',
        text: '#e2e8f0'
      },
      boxShadow: {
        glow: '0 0 80px rgba(99, 102, 241, 0.25)',
        card: '0 20px 50px rgba(2, 6, 23, 0.6)'
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0)'
      }
    },
  },
  plugins: [],
};
