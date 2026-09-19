import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#16264A',
          50: '#EEF1F7',
          100: '#D6DCEA',
          400: '#3E5583',
          600: '#223965',
          700: '#16264A',
          800: '#101B37',
          900: '#0B1327',
        },
        teal: {
          DEFAULT: '#1F9C8E',
          50: '#E9F7F5',
          100: '#CDEEE9',
          400: '#3AAFA1',
          600: '#1F9C8E',
          700: '#187F74',
        },
        clay: {
          DEFAULT: '#F07C2E',
          50: '#FDF0E6',
          100: '#FBE0CC',
          400: '#F4964F',
          600: '#F07C2E',
          700: '#D8641A',
        },
        sand: {
          50: '#FBF8F4',
          100: '#F6F0E8',
        },
        mist: {
          50: '#F3F7F6',
          100: '#E7F0EF',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [typography],
};
