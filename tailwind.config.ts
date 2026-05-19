import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Sora', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#050816',
          900: '#0B1120',
          850: '#0F172A',
          800: '#111827',
        },
        azure: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#0EA5E9',
          600: '#0078D4',
        },
        plasma: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        signal: {
          green: '#34D399',
          amber: '#F59E0B',
        },
      },
      boxShadow: {
        glow: '0 0 45px rgba(14, 165, 233, 0.22)',
        purpleGlow: '0 0 55px rgba(139, 92, 246, 0.2)',
        panel: '0 24px 80px rgba(2, 8, 23, 0.45)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
        'premium-radial':
          'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.18), transparent 35%), radial-gradient(circle at 85% 15%, rgba(139, 92, 246, 0.16), transparent 35%), radial-gradient(circle at 12% 30%, rgba(45, 212, 191, 0.11), transparent 28%)',
      },
      animation: {
        shimmer: 'shimmer 8s linear infinite',
        pulseLine: 'pulseLine 2.8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        gradientShift: 'gradientShift 10s ease infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
