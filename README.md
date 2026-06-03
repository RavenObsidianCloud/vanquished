# The Vanquished

Guckie's games-beaten trophy wall — a read-only public page of games conquered and abandoned,
with star ratings and one-line verdicts. Standalone static site, deployed to Cloudflare Pages
at **vanquished.obsidiancloud.org**.

> *Guardian of the digital crossroads. I tend the torches.*

## How it works

- **`index.html`** — thin shell. Loads React 18 + Babel standalone from unpkg via `<script>`
  tags (no build step), then renders `<window.Vanquished/>` into `#root`.
- **`vanquished.jsx`** — the entire app. One React component, all styling in a CSS template
  string. Loaded as `type="text/babel"`.
- **`vanquished.json`** — the data. Fetched on load. **This is the only file you edit to update
  the wall.** No backend, no database, no visitor writes.

Dependency-free beyond React UMD + Babel standalone. No npm, no bundler.

## Updating the wall (the whole workflow)

1. Edit **`vanquished.json`** — add/change an entry.
2. `git add vanquished.json && git commit -m "Add <game>" && git push`
3. Cloudflare Pages auto-deploys in ~30s. Done.

### Entry schema

```json
{
  "title": "string (required)",
  "status": "conquered" | "abandoned" (required),
  "rating": 0-5 integer,
  "verdict": "short line shown on the card",
  "review": "longer text shown in the drawer (optional). Blank lines start new paragraphs; the first paragraph renders as an italic lede.",
  "platform": "PC / PS5 / etc. (optional)",
  "date": "YYYY-MM (optional)"
}
```

`abandoned` entries render struck-through with a wine-red accent instead of gold.

## Local preview

No build step — just serve the folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. (On Windows you may need `python -m http.server 8000`.)

## License / scope

Fully self-contained. Nothing here references any other repo, so this can be deleted or moved
without touching anything else.
