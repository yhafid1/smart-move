module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0e8',
          100: '#c4d4c4',
          200: '#7aab7a',
          300: '#0E390E',
          400: '#0b2f0b',
          500: '#092509',
          600: '#071d07',
          700: '#051505',
          800: '#030e03',
          900: '#010701',
        },
        accent: {
          50: '#f5f3f0',
          100: '#e8e3dc',
          200: '#d1c7b9',
          300: '#b39f87',
          400: '#997d5f',
          500: '#7d6347',
          600: '#6b4423',
          700: '#53341b',
          800: '#3d2615',
          900: '#2a1a0e',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        sans: ['Barlow', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
