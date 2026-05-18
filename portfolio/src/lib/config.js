// ============================================================
//  EDIT THIS FILE — these are your personal details.
//  Everything else on the site pulls from here.
// ============================================================

export const SITE = {
  // Your name as it should appear on the site
  name: 'Your Name',

  // One-line identity. Keep it specific. Avoid the word "polymath" —
  // showing range is stronger than claiming it.
  // Examples that work:
  //   "Engineer → data scientist. Writing about India's macro story from inside it."
  //   "I build things and write about why they matter."
  //   "Data science, economics, and the spaces where they meet."
  tagline: 'Engineer turned data scientist. Writing about economics, technology, and the spaces in between.',

  // Longer bio for the About section. 2–4 sentences.
  // Make it specific. Vague bios are forgettable.
  bio: `I trained as an engineer and then studied data science. I write essays about India's macroeconomic story — currency, capital flows, the lived experience of a depreciating rupee — and build small data projects to back the arguments up. I'm currently based in the US, looking at the world from one foot in two economies.`,

  // Your handles — used to build URLs and fetch data.
  // Substack: the part before .substack.com  (e.g. "yourname" for yourname.substack.com)
  // If you have a custom domain, set substackUrl directly below.
  substackHandle: 'YOUR_SUBSTACK',

  // OR set this directly if you use a custom Substack domain.
  // Leave as null to use substackHandle above.
  substackUrl: null, // e.g. 'https://essays.yourname.com'

  // GitHub username
  githubHandle: 'YOUR_GITHUB',

  // Other links — leave any blank ('') to hide them
  email: 'you@example.com',
  twitter: '',      // handle without @, e.g. 'yourname'
  linkedin: '',     // handle, e.g. 'yourname'
  location: 'New York, USA',
};

// Derived URLs — don't usually need to edit these
export const SUBSTACK_BASE =
  SITE.substackUrl || `https://${SITE.substackHandle}.substack.com`;
export const SUBSTACK_RSS = `${SUBSTACK_BASE}/feed`;
export const GITHUB_API = `https://api.github.com/users/${SITE.githubHandle}/repos?sort=updated&per_page=100`;
