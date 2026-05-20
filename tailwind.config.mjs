/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Editorial display serif + clean modern sans
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Aristocratic palette: black/white/grey, slate-blue signal
        bg: '#FFFFFF',
        ink: '#0E0E10',
        body: '#1F1F23',
        grey: '#6B6B72',
        soft: '#9A9AA1',
        rule: '#E4E4E7',
        wash: '#F5F5F7',
        // Slate-blue — chosen for restraint + depth. Not navy, not cobalt.
        blue: '#2A3D5C',
        blueBright: '#3B6EA8',
        blueWash: '#EEF2F8',
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.025em',
      },
      maxWidth: {
        prose: '38rem',
      },
    },
  },
  plugins: [],
};
