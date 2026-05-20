import Parser from 'rss-parser';
import { SUBSTACK_RSS, ESSAYS_LIMIT } from './config.js';

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'contentEncoded'],
      ['description', 'descriptionRaw'],
    ],
  },
});

export async function getEssays() {
  if (SUBSTACK_RSS.includes('YOUR_SUBSTACK')) return [];

  try {
    const feed = await parser.parseURL(SUBSTACK_RSS);
    return (feed.items || []).slice(0, ESSAYS_LIMIT).map((item) => ({
      title: item.title || 'Untitled',
      url: item.link,
      date: item.isoDate || item.pubDate,
      // Substack puts the subtitle in description (sometimes content too)
      subtitle: stripHtml(item.descriptionRaw || item.contentSnippet || '').slice(0, 200),
      readingTime: estimateReadingTime(item.contentEncoded || item.content || ''),
    }));
  } catch (err) {
    console.warn('[essays] could not fetch Substack feed:', err.message);
    return [];
  }
}

function stripHtml(s) {
  return s.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function estimateReadingTime(html) {
  const words = stripHtml(html).split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
