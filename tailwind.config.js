/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          orange: '#FF5E14',
          amber: '#FFA133',
          glow: '#FF7A00',
        },
        dark: {
          950: '#07090E',
          900: '#0B0E14',
          850: '#101520',
          800: '#141B2A',
          750: '#1A2337',
          700: '#222F47',
          600: '#334155',
        },
        gold: {
          light: '#FDE047',
          DEFAULT: '#EAB308',
          glow: '#FACC15',
        },
        silver: {
          light: '#E2E8F0',
          DEFAULT: '#94A3B8',
          glow: '#CBD5E1',
        },
        bronze: {
          light: '#FDBA74',
          DEFAULT: '#CD7F32',
          glow: '#D97706',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
