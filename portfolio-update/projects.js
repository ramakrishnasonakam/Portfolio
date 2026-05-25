import {
  GITHUB_REPOS_API,
  githubReadmeApi,
  HANDLES,
  PROJECTS_LIMIT,
  PROJECT_BADGES,
  FEATURED_PROJECTS,
} from './config.js';

const GH_HEADERS = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'portfolio-site',
};

export async function getProjects() {
  try {
    const res = await fetch(GITHUB_REPOS_API, { headers: GH_HEADERS });
    if (!res.ok) {
      console.warn(`[projects] GitHub /repos returned ${res.status}`);
      return [];
    }
    const repos = await res.json();
    const byName = new Map(repos.map((r) => [r.name.toLowerCase(), r]));

    let selected;
    if (FEATURED_PROJECTS && FEATURED_PROJECTS.length > 0) {
      // Hand-picked: keep exact order from config.
      selected = FEATURED_PROJECTS
        .map((name) => byName.get(name.toLowerCase()))
        .filter(Boolean);
    } else {
      // Fallback: most-recent public, non-fork, non-archived.
      selected = repos
        .filter((r) => !r.fork && !r.archived && !r.private)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, PROJECTS_LIMIT);
    }

    const enriched = await Promise.all(
      selected.map(async (r) => {
        const [readme, languages] = await Promise.all([
          fetchReadmeExcerpt(r.name),
          fetchLanguages(r.name),
        ]);
        return {
          name: r.name,
          url: r.html_url,
          homepage: r.homepage || null,
          language: r.language,
          stars: r.stargazers_count,
          updated: r.updated_at,
          description: readme || r.description || '',
          badge: PROJECT_BADGES[r.name] || null,
          languages,
        };
      })
    );

    return enriched;
  } catch (err) {
    console.warn('[projects] could not fetch GitHub repos:', err.message);
    return [];
  }
}

async function fetchLanguages(repoName) {
  try {
    const url = `https://api.github.com/repos/${HANDLES.github}/${repoName}/languages`;
    const res = await fetch(url, { headers: GH_HEADERS });
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

async function fetchReadmeExcerpt(repoName) {
  try {
    const res = await fetch(githubReadmeApi(repoName), { headers: GH_HEADERS });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.content) return null;
    const md = Buffer.from(json.content, 'base64').toString('utf8');
    return extractFirstParagraph(md);
  } catch {
    return null;
  }
}

function extractFirstParagraph(md) {
  if (!md) return null;
  md = md.replace(/```[\s\S]*?```/g, '');
  md = md.replace(/<!--[\s\S]*?-->/g, '');

  const lines = md.split('\n');
  const paragraph = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      if (paragraph.length > 0) break;
      continue;
    }
    if (line.startsWith('#')) continue;
    if (/^!\[.*?\]\(.*?\)/.test(line)) continue;
    if (/^\[!\[/.test(line)) continue;
    if (/^<img\s/i.test(line)) continue;
    if (/^<p\s/i.test(line) && /<img/i.test(line)) continue;
    if (line.startsWith('|') || line.startsWith('---')) continue;
    if (/^[-*]\s/.test(line) && paragraph.length === 0) continue;
    paragraph.push(line);
  }

  if (paragraph.length === 0) return null;

  let text = paragraph.join(' ');
  text = text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/[*_`]/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length > 220) {
    text = text.slice(0, 217).replace(/\s+\S*$/, '') + '…';
  }

  return text || null;
}
