import { GITHUB_API, FEATURED_PROJECTS, SITE } from './config.js';

export async function getProjects() {
  if (!FEATURED_PROJECTS || FEATURED_PROJECTS.length === 0) return [];

  try {
    const res = await fetch(GITHUB_API, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'portfolio-site',
      },
    });

    if (!res.ok) {
      console.warn(`[projects] GitHub API returned ${res.status}`);
      return [];
    }

    const repos = await res.json();
    const byName = new Map(repos.map((r) => [r.name.toLowerCase(), r]));

    // Return ONLY the repos listed in FEATURED_PROJECTS, in that order.
    return FEATURED_PROJECTS
      .map((name) => byName.get(name.toLowerCase()))
      .filter(Boolean)
      .map((r) => ({
        name: r.name,
        url: r.html_url,
        description: r.description || '',
        language: r.language,
        stars: r.stargazers_count,
        updated: r.updated_at,
        topics: r.topics || [],
        homepage: r.homepage || null,
      }));
  } catch (err) {
    console.warn('[projects] could not fetch GitHub repos:', err.message);
    return [];
  }
}
