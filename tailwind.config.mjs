import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6', 100: '#f2e8e5', 200: '#eaddd7', 300: '#e0cec7',
          400: '#d2bab0', 500: '#a0522d', 600: '#8b4513', 700: '#722f37',
          800: '#5c1a1b', 900: '#3d0e0e', 950: '#1a0505',
        },
        secondary: {
          50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
          400: '#fbbf24', 500: '#d4af37', 600: '#b8860b', 700: '#997b1a',
          800: '#854d0e', 900: '#713f12', 950: '#451a03',
        },
        accent: {
          50: '#f5f5f4', 100: '#e7e5e4', 200: '#d6d3d1', 300: '#a8a29e',
          400: '#78716c', 500: '#57534e', 600: '#44403c', 700: '#292524',
          800: '#1c1917', 900: '#0c0a09', 950: '#030712',
        },
        text: { primary: '#f5f5f4', secondary: '#a8a29e', muted: '#78716c' },
        surface: { DEFAULT: '#0c0a09', alt: '#1c1917', dark: '#000000' },
      },
      fontFamily: {
        heading: ['Merriweather', 'Georgia', 'serif'],
        body: ['Work Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '2rem', lg: '4rem', xl: '6rem' },
        screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1440px' },
      },
      borderRadius: {
        sm: '0.125rem', DEFAULT: '0.25rem', md: '0.375rem', lg: '0.5rem',
        xl: '0.75rem', '2xl': '1rem', '3xl': '1.5rem', full: '9999px',
      },
    },
  },
  plugins: [typography],
};
