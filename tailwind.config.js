/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          600: '#008196',
          500: '#00a0bb',
          400: '#04aac4',
          100: '#e3f5f8',
          50: '#f1fafb',
        },
        coral: {
          500: '#fa6793',
          700: '#e04f7f',
          100: '#ffdbe5',
          50: '#fff0f4',
        },
        ink: {
          900: '#0c1216',
          700: '#2f3a40',
          600: '#47555d',
          400: '#93a2a9',
          300: '#657680',
        },
        'a3-slate': {
          700: '#2f3a40',
          600: '#47555d',
          400: '#657680',
          300: '#93a2a9',
        },
        'a3-teal': {
          900: '#003c46',
          700: '#004a56',
          600: '#008196',
        },
        'a3-surface': '#f7f9fa',
        'a3-line': '#dde4e8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Archivo', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        archivo: ['Archivo', 'sans-serif'],
      },
      keyframes: {
        a3marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        a3pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
        a3float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-16px, 20px) scale(1.05)' },
        },
        'a3float-sm': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'a3float-rev': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(16px, -20px) scale(1.03)' },
        },
      },
      animation: {
        marquee: 'a3marquee 32s linear infinite',
        pulseFast: 'a3pulse 2s ease-in-out infinite',
        floatSlow: 'a3float 14s ease-in-out infinite',
        floatRev: 'a3float-rev 12s ease-in-out infinite',
        floatSm: 'a3float-sm 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
