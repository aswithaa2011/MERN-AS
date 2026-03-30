/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Precise Dribbble Lightweight SaaS Palette
        background: '#F8FAFC', // exact slate-50 light gray/white mix
        surface: '#FFFFFF', // pure crisp white cards
        surfaceH: '#EFF6FF', // subtle blue-50 hover
        primary: '#2563EB', // Dribbble Brand Blue (Electric)
        secondary: '#8B5CF6', // Dribbble Vibrant Violet
        textMain: '#0F172A', // Deep Slate-900 (charcoal)
        textMuted: '#475569', // Slate-600 professional text
        borderCol: 'rgba(15, 23, 42, 0.08)', // subtle border
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2563EB 0deg, #8B5CF6 180deg, #2563EB 360deg)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 0.9 },
        }
      }
    },
  },
  plugins: [],
}
