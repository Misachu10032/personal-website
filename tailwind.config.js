/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mob: '375px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      laptopl: '1440px',
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#22d3ee',
          hover: '#06b6d4',
          subtle: 'rgba(34, 211, 238, 0.08)',
        },
        surface: {
          DEFAULT: '#ffffff',
          subtle: '#fafafa',
          dark: '#0a0a0a',
          'dark-subtle': '#111111',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, var(--tw-grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--tw-grid-line) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
