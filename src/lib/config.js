// ════════════════════════════════════════════════════════════════
//
//   ✏️  EDIT THIS FILE — IT IS THE ONLY FILE YOU NEED TO TOUCH.
//
//   Every value you change here flows through the whole site.
//   Save → git commit → git push → Vercel auto-rebuilds in ~60s.
//
// ════════════════════════════════════════════════════════════════


// ─── 1. WHO YOU ARE ─────────────────────────────────────────────
export const SITE = {
  name: 'YOUR FULL NAME',

  // Big headline on the homepage. One sentence. End with a period.
  tagline: 'Engineer turned data scientist. Writing about the lived economics of India from inside the diaspora.',

  // About-page paragraph. 2–4 sentences. Be specific, not generic.
  bio: `Trained as an engineer, then studied data science. I write about India's macroeconomic story — currency, capital flows, the lived experience of a depreciating rupee — and build small data projects to back the arguments up. Currently based in the US, watching the world with one foot in two economies.`,

  // ─── 2. HANDLES ───────────────────────────────────────────────
  // Substack: the part before .substack.com
  // e.g. for "ramakrishna.substack.com" → 'ramakrishna'
  substackHandle: 'YOUR_SUBSTACK',

  // OR — if you use a custom Substack domain, set this and ignore the above
  substackUrl: null, // e.g. 'https://essays.yourname.com'

  githubHandle: 'ramakrishnasonakam',

  // ─── 3. CONTACT (leave any blank '' to hide it) ───────────────
  email: 'you@example.com',
  location: 'New York, USA',
  twitter: '',     // just the handle, no @
  linkedin: '',    // just the handle
};


// ─── 4. WHICH PROJECTS TO SHOW ──────────────────────────────────
// List the EXACT repo names from your GitHub, in display order.
// e.g. for github.com/ramakrishnasonakam/rupee-watch → 'rupee-watch'
// Add or remove any number — site adapts automatically.
export const FEATURED_PROJECTS = [
  'repo-name-one',
  'repo-name-two',
  'repo-name-three',
];


// ─── 5. HOW MANY ESSAYS TO SHOW ─────────────────────────────────
// The N most recent Substack posts. Set higher when you publish more.
export const ESSAYS_LIMIT = 2;


// ════════════════════════════════════════════════════════════════
//   You don't need to edit below this line.
// ════════════════════════════════════════════════════════════════

export const SUBSTACK_BASE =
  SITE.substackUrl || `https://${SITE.substackHandle}.substack.com`;
export const SUBSTACK_RSS = `${SUBSTACK_BASE}/feed`;
export const GITHUB_API = `https://api.github.com/users/${SITE.githubHandle}/repos?per_page=100`;
