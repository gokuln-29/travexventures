import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury dark palette
        brand: {
          black: '#0A0A0A',
          dark: '#111111',
          card: '#161616',
          gold: '#C9A84C',
          'gold-light': '#E8D5A3',
          cream: '#F5F0E8',
          muted: '#8A8580',
        },
        // Keep old colors for backward compatibility with other pages
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
          950: '#0a192f',
        },
        cyan: {
          brand: '#00b4d8',
          light: '#90e0ef',
          dark: '#0077b6',
        },
        sunset: {
          orange: '#f97316',
          yellow: '#f59e0b',
        },
        earth: {
          brown: '#8b5a2b',
          light: '#fdf8f5',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        accent: ['var(--font-montserrat)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLine: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(12px)', opacity: '1' },
        },
        goldShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
