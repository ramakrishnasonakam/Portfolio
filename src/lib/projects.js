import { GITHUB_API, SITE } from './config.js';

/**
 * Fetches public repos from GitHub at build time.
 * Filters out forks and archived. Sorts by recent activity.
 */
export async function getProjects() {
  if (SITE.githubHandle === 'YOUR_GITHUB') {
    return DEMO_PROJECTS;
  }

  try {
    const res = await fetch(GITHUB_API, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'portfolio-site',
      },
    });

    if (!res.ok) {
      console.warn(`[projects] GitHub API returned ${res.status}`);
      return [];
    }

    const repos = await res.json();

    return repos
      .filter((r) => !r.fork && !r.archived && !r.private)
      .map((r) => ({
        name: r.name,
        url: r.html_url,
        description: r.description || '',
        language: r.language,
        stars: r.stargazers_count,
        updated: r.updated_at,
        topics: r.topics || [],
        homepage: r.homepage || null,
      }))
      .sort((a, b) => new Date(b.updated) - new Date(a.updated));
  } catch (err) {
    console.warn('[projects] could not fetch GitHub repos:', err.message);
    return [];
  }
}

// Shown only when the GitHub handle hasn't been configured yet.
const DEMO_PROJECTS = [
  {
    name: 'rupee-watch',
    url: '#',
    description: 'A small dashboard tracking INR/USD against oil, gold, and Fed rate moves. Built to back up the essays.',
    language: 'Python',
    stars: 12,
    updated: '2026-04-30',
    topics: ['economics', 'india', 'data-viz'],
    homepage: null,
  },
  {
    name: 'cad-decomposition',
    url: '#',
    description: 'Decomposing India\'s Current Account Deficit by sector and year. Replicates RBI methodology with cleaner exports.',
    language: 'Python',
    stars: 4,
    updated: '2026-03-22',
    topics: ['macro', 'data'],
    homepage: null,
  },
  {
    name: 'forex-flow-map',
    url: '#',
    description: 'Sankey diagram of foreign exchange inflows and outflows from RBI quarterly data.',
    language: 'JavaScript',
    stars: 7,
    updated: '2026-02-18',
    topics: ['d3', 'visualization'],
    homepage: null,
  },
];
