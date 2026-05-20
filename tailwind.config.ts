import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Work Sans', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#f0ecf3',
          dim: '#dcd9df',
          bright: '#fcf8ff',
          lowest: '#ffffff',
          low: '#f6f2f9',
          base: '#fcf8ff',
          high: '#ebe7ee',
          highest: '#e5e1e8',
        },
        brand: {
          primary: '#5656a0',
          'primary-dark': '#3e3e87',
          'primary-container': '#110c5a',
          'on-primary': '#ffffff',
          'primary-fixed': '#e2dfff',
          'primary-fixed-dim': '#c2c1ff',
          secondary: '#5c5b7a',
          'secondary-container': '#dcd9fe',
          'on-secondary': '#ffffff',
        },
        ink: {
          DEFAULT: '#1c1b20',
          secondary: '#464650',
          muted: '#777682',
          faint: '#c7c5d2',
        },
      },
      animation: {
        levitate: 'levitate 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'slide-in-left': 'slideInLeft 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.6s ease forwards',
        'pop-in': 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'slide-down': 'slideDown 0.5s ease forwards',
        'pulse-dot': 'pulseDot 1.5s ease-in-out infinite',
      },
      keyframes: {
        levitate: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        popIn: {
          from: { opacity: '0', transform: 'scale(0.7)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.4)' },
        },
      },
      boxShadow: {
        card: '0 2px 8px rgba(11, 6, 87, 0.04), 0 8px 24px rgba(11, 6, 87, 0.08)',
        'card-hover': '0 4px 16px rgba(11, 6, 87, 0.08), 0 16px 40px rgba(11, 6, 87, 0.14)',
        glass: '0 4px 30px rgba(11, 6, 87, 0.06)',
      },
    },
  },
  plugins: [],
} satisfies Config
