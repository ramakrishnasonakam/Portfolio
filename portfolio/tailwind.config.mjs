/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        paper: '#F5F1E8',        // warm cream
        paperdark: '#EDE6D3',     // slightly deeper cream
        ink: '#1A1A1A',           // near-black
        inksoft: '#3A3A3A',       // softer ink for body
        rust: '#B24C2A',          // rust-red accent
        rustdark: '#8C3A20',      // hover state
        muted: '#6B6258',         // metadata
      },
      maxWidth: {
        'reading': '42rem',
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
    },
  },
  plugins: [],
};
