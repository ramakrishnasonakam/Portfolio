// ════════════════════════════════════════════════════════════════
//
//   ✏️  EDIT THIS FILE — IT IS THE ONLY FILE YOU NEED TO TOUCH.
//
//   Every value flows through the site. Save → commit → push.
//   Vercel auto-rebuilds in ~60s.
//
// ════════════════════════════════════════════════════════════════


// ─── 1. WHO YOU ARE ─────────────────────────────────────────────
export const SITE = {
  name: 'Ramakrishna Sonakam',

  // The hero. One line. End with period.
  // This is the largest text on the site — make it count.
  tagline: 'Engineer. Analyst. Teacher. Writer',

  // Concise about-section paragraph. 2–4 sentences.
  // Speak in first person. Be specific, not generic.
  // bio: `I trained as an engineer, then studied data science. I write about India's macroeconomic story — currency, capital flows, the lived experience of a depreciating rupee — and build small data projects to back the arguments up. Currently based in the US, watching the world with one foot in two economies.`,
};


// ─── 2. HANDLES ─────────────────────────────────────────────────
export const HANDLES = {
  // Substack: the part before .substack.com
  // e.g. "ramakrishna" for "ramakrishna.substack.com"
  substack: 'rksignal',

  // OR — custom Substack domain. Set this and ignore the above.
  substackUrl: null, // e.g. 'https://essays.yourname.com'

  github: 'ramakrishnasonakam',
  email: 'rsonakam@gmail.com',
  linkedin: 'ramakrishna-sonakam',  // just the handle, e.g. 'yourname'
};


// ─── 3. HOW MANY ESSAYS TO SHOW ─────────────────────────────────
export const ESSAYS_LIMIT = 3;


// ════════════════════════════════════════════════════════════════
//   No edits needed below this line.
// ════════════════════════════════════════════════════════════════

export const SUBSTACK_BASE =
  HANDLES.substackUrl || `https://${HANDLES.substack}.substack.com`;
export const SUBSTACK_RSS = `${SUBSTACK_BASE}/feed`;
export const GITHUB_REPOS_API = `https://api.github.com/users/${HANDLES.github}/repos?per_page=100&sort=updated`;
export const githubReadmeApi = (repo) =>
  `https://api.github.com/repos/${HANDLES.github}/${repo}/readme`;
