/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Editorial display (high contrast, royal) + clean modern sans
        display: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Shadow-monarch palette: void, ivory, low-key gold, midnight.
        void: '#000000',
        obsidian: '#0A0A0A',
        ink: '#141414',
        ash: '#262626',
        veil: '#3A3A3A',
        smoke: '#6E6E72',
        bone: '#A8A8AE',
        ivory: '#F5F2EA',
        // Low-key gold — desaturated, restrained. Not a Christmas ornament.
        gold: '#B8924E',
        goldDim: '#8E6F3A',
        // Midnight blue — present but quiet
        midnight: '#0F1A2E',
        midnightDeep: '#0A1220',
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.03em',
        regal: '0.32em',
      },
      maxWidth: {
        prose: '36rem',
      },
    },
  },
  plugins: [],
};
