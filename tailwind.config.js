/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#25D366',
          light: '#34E077',
          dark: '#128C7E',
          deep: '#075E54',
          muted: '#064E3B',
        },
        ink: {
          DEFAULT: '#F1F5F9',
          soft: '#E2E8F0',
          muted: '#94A3B8',
        },
        surface: {
          DEFAULT: '#0B1220',
          soft: '#080E18',
          muted: '#0F172A',
          elevated: '#151F33',
          card: '#1A2740',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(37, 211, 102, 0.5)',
        'glow-sm': '0 0 24px -6px rgba(37, 211, 102, 0.4)',
        soft: '0 4px 24px -4px rgba(0, 0, 0, 0.4)',
        card: '0 8px 32px -8px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 20px 48px -12px rgba(37, 211, 102, 0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.7s ease-out 0.15s forwards',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(at 40% 20%, rgba(37,211,102,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(18,140,126,0.14) 0px, transparent 45%), radial-gradient(at 0% 80%, rgba(37,211,102,0.10) 0px, transparent 50%), linear-gradient(180deg, #080E18 0%, #0B1220 100%)',
        'gradient-brand': 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        'gradient-dark': 'linear-gradient(180deg, #080E18 0%, #075E54 100%)',
      },
    },
  },
  plugins: [],
};
