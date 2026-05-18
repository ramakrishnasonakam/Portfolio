# Portfolio

A live-pulling portfolio site. Essays come from your Substack RSS, projects from the GitHub API. Built with Astro + Tailwind. Deploys to Vercel free.

---

## ⚡ Quick start (5 minutes to live)

### 1. Configure your handles
Open **`src/lib/config.js`** and edit the fields at the top:

```js
export const SITE = {
  name: 'Your Name',
  tagline: '...',
  bio: `...`,
  substackHandle: 'YOUR_SUBSTACK',  // your-handle.substack.com
  githubHandle: 'YOUR_GITHUB',
  email: 'you@example.com',
  // ...
};
```

That's the **only** file you need to edit for content. The site rebuilds itself off it.

### 2. Try it locally (optional)
```bash
npm install
npm run dev
```
Open http://localhost:4321. You'll see your real essays and repos.

### 3. Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 4. Deploy to Vercel (free)
1. Go to https://vercel.com → **Sign in with GitHub**
2. Click **Add New → Project** → pick your `portfolio` repo
3. Framework is auto-detected as Astro. Just click **Deploy**.
4. Done. You get a URL like `your-portfolio.vercel.app` in ~60 seconds.

### 5. (Optional) Auto-rebuild daily so new essays/repos appear
Essays and repos are fetched **at build time**, not on every page view (that's why the site is fast). To auto-pull fresh content:

**Option A — Trigger rebuild on each git push** (already automatic — push any change and Vercel redeploys).

**Option B — Schedule daily rebuilds:**
1. In Vercel: Project → **Settings → Git → Deploy Hooks**
2. Create a hook called `daily-rebuild`. Copy the URL it gives you.
3. Go to https://cron-job.org (free) → create a job that hits that URL once a day.
4. Now your site rebuilds every 24h and pulls latest essays + GitHub activity.

---

## 🎨 Customization

### Change the accent color
`tailwind.config.mjs` → the `rust` color value. Try:
- `#D4622A` for warmer orange
- `#2E5266` for deep teal
- `#5C4033` for chocolate brown

### Change the fonts
`src/styles/global.css` → the `@import` line. Browse https://fonts.google.com for alternatives.

### Add a page
Drop a new `.astro` file in `src/pages/`. Add a link to it in `src/layouts/Base.astro` (the `navLinks` array).

---

## 🧱 Stack

- **Astro** — static site generator. Zero JS by default, blazing fast.
- **Tailwind CSS** — utility-first styling.
- **rss-parser** — reads your Substack feed at build time.
- **GitHub REST API** — fetches your public repos at build time.
- **Vercel** — hosting + CI.

---

## 📁 Structure

```
src/
├── lib/
│   ├── config.js       ← EDIT THIS for your details
│   ├── essays.js       ← Substack RSS fetcher
│   └── projects.js     ← GitHub API fetcher
├── layouts/
│   └── Base.astro      ← shared header / footer
├── pages/
│   ├── index.astro     ← homepage (unified feed)
│   ├── essays.astro
│   ├── projects.astro
│   └── about.astro
└── styles/
    └── global.css
```

---

## 🐛 Troubleshooting

**"My essays aren't showing up"**
Check `substackHandle` in `config.js`. It should be just `yourname`, not the full URL. Visit `https://yourname.substack.com/feed` in a browser — you should see XML. If your Substack uses a custom domain, set `substackUrl` instead.

**"My projects aren't showing up"**
GitHub API rate-limits unauthenticated requests to 60/hour per IP. Vercel build agents share IPs, so during heavy build hours you may hit the limit. If this becomes an issue, you can add a GitHub personal access token — ping me and I'll add the code.

**"The site looks broken locally"**
Make sure you ran `npm install`. You need Node 18+.

---

## 📄 License
Yours. Make it your own.
