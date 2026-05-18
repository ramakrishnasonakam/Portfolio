import Parser from 'rss-parser';
import { SUBSTACK_RSS } from './config.js';

const parser = new Parser({
  customFields: {
    item: [['content:encoded', 'contentEncoded']],
  },
});

/**
 * Fetches the Substack RSS feed and returns a clean array of essays.
 * Called at build time — so it's static & fast at runtime.
 */
export async function getEssays() {
  // If the handle is still a placeholder, return demo essays
  // so the site renders something during local preview.
  if (SUBSTACK_RSS.includes('YOUR_SUBSTACK')) {
    return DEMO_ESSAYS;
  }

  try {
    const feed = await parser.parseURL(SUBSTACK_RSS);
    return (feed.items || []).map((item) => ({
      title: item.title || 'Untitled',
      url: item.link,
      date: item.isoDate || item.pubDate,
      description: stripHtml(item.contentSnippet || item.content || '').slice(0, 220),
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

// Shown only when the Substack handle hasn't been configured yet.
const DEMO_ESSAYS = [
  {
    title: 'The Rupee Is Telling You Something',
    url: '#',
    date: '2026-04-22',
    description:
      'When a Prime Minister tells 1.4 billion people to stop buying gold, cut foreign travel, and use less cooking oil, that is not behavioral advice. It is a macro distress signal in plain clothes.',
    readingTime: 8,
  },
  {
    title: 'What I Learned Carrying Two Currencies',
    url: '#',
    date: '2026-03-14',
    description:
      'An education loan in rupees. Living expenses in dollars. A graduation in between. Notes on becoming a data point in the country you came from.',
    readingTime: 6,
  },
  {
    title: 'Reading the Current Account Deficit Like a Story',
    url: '#',
    date: '2026-02-02',
    description:
      'Oil, gold, and outbound travel are not three separate problems. They are three lines that converge on the same balance sheet — and they have been moving together for longer than the headlines admit.',
    readingTime: 11,
  },
];
