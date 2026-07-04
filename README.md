# MeiMei Academy

A personal portfolio + prompt library site: a gallery of AI images/video with copyable prompts, plus a "Workflows" section that documents full multi-step processes (not just single prompts). Dark/light mode, mobile responsive, no build step required.

## Files

- `index.html` — page structure and content sections
- `styles.css` — design system (colors, type, layout, dark/light theme)
- `script.js` — theme toggle, mobile menu, search/filter, modal, copy-to-clipboard
- `data.js` — **your content lives here.** Gallery items and workflows are plain JS arrays.
- `favicon.svg` — the blossom mark, used as the site icon

## Running it locally

No build tools needed. Either:

1. Double-click `index.html` to open it directly in a browser, or
2. Serve it locally (recommended, avoids clipboard-permission quirks in some browsers):
   ```
   cd meimei-academy
   python3 -m http.server 8000
   ```
   then visit `http://localhost:8000`

## Adding your own work

Open `data.js`:

- **Gallery items** — each object needs `title`, `category` (`Portrait`, `Product`, `Cinematic`, `Concept`, or `Video` — or add your own and update the filter chips in `index.html`), `tool`, `likes`, `image`, and `prompt`.
- **Workflows** — each has a `title`, `summary`, and a `steps` array; each step has `label`, `tool`, `image`, `note`, and `prompt`.
- Replace the `image` URLs (currently Picsum placeholders) with your own files, e.g. `images/my-shot.jpg`, or a hosted image URL.

## Deploying

This is a static site — drag the folder into Netlify/Vercel, push it to GitHub Pages, or upload it to any static host. No server or database required.

## Notes on the design

- Accent color is a plum/rose tone (a nod to "Mei," plum blossom) rather than a generic template palette.
- The five-petal blossom mark doubles as the logo and a subtle background motif.
- Workflow steps are numbered because they're genuinely sequential — the gallery grid itself is not, so it isn't.
- Theme preference and choice are saved via `localStorage`, and the toggle also respects the visitor's OS-level light/dark setting on first visit.
