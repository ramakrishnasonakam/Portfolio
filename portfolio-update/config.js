// ════════════════════════════════════════════════════════════════
//
//   ✏️  EDIT THIS FILE — IT IS THE ONLY FILE YOU TOUCH.
//
//   Every value flows through the site.
//   Save → git commit → git push → Vercel rebuilds.
//
// ════════════════════════════════════════════════════════════════


// ─── 1. IDENTITY ────────────────────────────────────────────────
export const SITE = {
  name: 'YOUR FULL NAME',

  // Four words. No verbs. No connectors. Just the identities.
  // These appear under your name in the hero.
  roles: ['Engineer', 'Analyst', 'Writer', 'Teacher'],
};


// ─── 2. HANDLES ─────────────────────────────────────────────────
export const HANDLES = {
  // Substack: part before .substack.com  (or set substackUrl below)
  substack: 'YOUR_SUBSTACK',
  substackUrl: null,

  // Medium: handle WITH the @ — e.g. '@rsonakam'
  medium: '@rsonakam',

  github: 'ramakrishnasonakam',
  email: 'you@example.com',
  linkedin: '',  // handle only, e.g. 'yourname'
};


// ─── 3. PROJECT METRIC BADGES (optional) ────────────────────────
// Per-repo metric badge shown beside the description.
// Repo names must match exactly. Repos not listed here just show no badge.
// Keep badges punchy — 2-5 words. No periods.
//
// Examples that work (notice they're outcomes, not tasks):
//   '+12% precision gain'
//   '8 weeks to production'
//   '4 datasets unified'
//   '~340ms inference'
//
export const PROJECT_BADGES = {
  // 'repo-name-here': '+15% accuracy lift',
  // 'another-repo': 'Top 5% Kaggle',
};


// ─── 4. WHICH PROJECTS TO SHOW (hand-picked) ───────────────────
// The FIRST entry becomes the hero card (headliner — full width, large).
// The rest appear below in a grid as supporting projects.
// Use the exact repo name from GitHub. Case-sensitive.
//
// If left empty, falls back to most-recently-updated public repos.
export const FEATURED_PROJECTS = [
  // 'headliner-repo',
  // 'supporting-repo-1',
  // 'supporting-repo-2',
  // 'supporting-repo-3',
  // 'supporting-repo-4',
];


// ─── 5. LIMITS ──────────────────────────────────────────────────
// Only used when FEATURED_PROJECTS is empty (fallback mode).
export const PROJECTS_LIMIT = 5;
export const ESSAYS_LIMIT = 3;


// ════════════════════════════════════════════════════════════════
//   No edits needed below this line.
// ════════════════════════════════════════════════════════════════

export const SUBSTACK_BASE =
  HANDLES.substackUrl || `https://${HANDLES.substack}.substack.com`;
export const SUBSTACK_RSS = `${SUBSTACK_BASE}/feed`;
export const MEDIUM_BASE = `https://medium.com/${HANDLES.medium}`;
export const MEDIUM_RSS = `https://medium.com/feed/${HANDLES.medium}`;
export const GITHUB_REPOS_API = `https://api.github.com/users/${HANDLES.github}/repos?per_page=100&sort=updated`;
export const githubReadmeApi = (repo) =>
  `https://api.github.com/repos/${HANDLES.github}/${repo}/readme`;
