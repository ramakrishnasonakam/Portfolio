/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Neue Haas Grotesk-inspired: pure, geometric, restrained
        sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Pure Swiss palette: white, near-black, one signal red, restrained grays.
        canvas: '#FFFFFF',
        ink: '#0A0A0A',
        body: '#1A1A1A',
        muted: '#737373',
        rule: '#E5E5E5',
        signal: '#E63946', // single accent — red dot, hover state, active nav
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.025em',
      },
      lineHeight: {
        none: '0.95',
        snug: '1.1',
      },
    },
  },
  plugins: [],
};
