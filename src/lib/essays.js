import Parser from 'rss-parser';
import { SUBSTACK_RSS, MEDIUM_RSS, ESSAYS_LIMIT, HANDLES } from './config.js';

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'contentEncoded'],
      ['description', 'descriptionRaw'],
    ],
  },
});

export async function getEssays() {
  const sources = [];

  if (!SUBSTACK_RSS.includes('YOUR_SUBSTACK')) {
    sources.push(fetchFeed(SUBSTACK_RSS, 'Substack'));
  }
  if (HANDLES.medium && !HANDLES.medium.includes('YOUR_MEDIUM')) {
    sources.push(fetchFeed(MEDIUM_RSS, 'Medium'));
  }

  const results = await Promise.all(sources);
  const all = results.flat();

  // Sort by date descending, then take the top N
  return all
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, ESSAYS_LIMIT);
}

async function fetchFeed(url, sourceLabel) {
  try {
    const feed = await parser.parseURL(url);
    return (feed.items || []).map((item) => ({
      title: cleanTitle(item.title),
      url: item.link,
      date: item.isoDate || item.pubDate,
      subtitle: extractSubtitle(item, sourceLabel),
      source: sourceLabel,
    }));
  } catch (err) {
    console.warn(`[essays] failed to fetch ${sourceLabel}:`, err.message);
    return [];
  }
}

function cleanTitle(t) {
  return (t || 'Untitled').trim();
}

function extractSubtitle(item, source) {
  // Substack puts a real subtitle in description. Medium puts the article body in description.
  // For Medium, we strip HTML and take the first ~160 chars.
  const raw = item.descriptionRaw || item.contentSnippet || '';
  const text = raw.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (!text) return '';
  return text.length > 180 ? text.slice(0, 177).replace(/\s+\S*$/, '') + '…' : text;
}
