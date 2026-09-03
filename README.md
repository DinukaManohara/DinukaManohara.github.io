# DinukaManohara.github.io

My personal website — a static site with Home, Experience, Publications, Projects, and Blog
pages, hosted on GitHub Pages. No build step, no framework: just HTML, CSS, and a little vanilla JS.

## Structure

```
index.html            Home page (alternating image/text sections + news bar)
experience.html         Experience timeline
publications.html      Publications list
projects.html          Projects grid
blog.html               Blog post index
blogs/                  Individual blog post pages
  _template.html         Copy this to start a new post
news/                   News items shown in the Home page's news bar
css/style.css           Shared styles (light + dark mode)
js/main.js              Mobile nav toggle + active-link highlighting
js/news.js              Loads news/ items into the Home page news bar
images/                 Site images (currently placeholder SVGs)
favicon.svg              Site favicon
```

## Editing content

- **Home**: edit `index.html` directly — swap the placeholder text and the images in the
  `about-block` sections. The email line right under your name and the social icon row (LinkedIn,
  Google Scholar, GitHub, ORCID) are also there — update the `href`s to your real profiles.
- **News bar**: shown on the Home page right below the hero. See [News](#news) below.
- **Experience**: add or edit `<li class="timeline-item">` entries in `experience.html`.
- **Publications**: add or edit `<li class="pub-item">` entries in `publications.html`.
- **Projects**: add or edit `<article class="project-card">` entries in `projects.html`.
- **Blog**: copy `blogs/_template.html` to `blogs/your-post-slug.html`, write the post, then add
  a matching `<li class="post-item">` entry to `blog.html` so it shows up in the list.
- **Social icons / email**: the footer on every page and the Home page hero use the same set of
  icon links (LinkedIn, Google Scholar, GitHub, ORCID) — update the placeholder URLs (`your-linkedin`,
  `YOUR_SCHOLAR_ID`, the ORCID iD) to your own. The email address on the Home page is written as
  `name [at] domain [dot] com` instead of a `mailto:` link, on purpose, to make it harder for bots
  to scrape — swap in your own address using the same bracket notation.

## News

The news bar on the Home page reads straight from the `news/` folder — there's no separate list
to keep in sync. Each item is its own JSON file, numbered in order: `001.json`, `002.json`,
`003.json`, and so on. `js/news.js` fetches them starting from `001.json` and stops at the first
number that doesn't exist, then shows them newest-first (highest number first).

To add a news item, drop a new file in `news/` using the next number, for example
`news/004.json`:

```json
{
  "date": "Apr 2026",
  "text": "A short headline for the update.",
  "link": "https://example.com/optional-link"
}
```

`date` and `text` are required; `link` is optional — if present, the item becomes a clickable
link (opens in a new tab). Keep the numbering sequential and don't leave gaps (if you remove an
old item, renumber the ones after it), since the script stops at the first missing number.

## Images

Everything in `images/` is currently a placeholder SVG so the site renders correctly out of the
box. Replace them with real photos:

- `profile.svg` → your headshot (used on the About page hero)
- `about-1.svg`, `about-2.svg`, `about-3.svg` → the alternating About page sections
- `project-1.svg` … `project-4.svg` → project thumbnails

You can keep the `.svg` filenames and just overwrite the files, or use `.jpg`/`.png` files and
update the `src` attributes in the corresponding HTML pages.

## Running locally

No build step is required — just open `index.html` in a browser, or serve the folder locally:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying

This repo is a `<username>.github.io` repository, so GitHub Pages serves it automatically from
the default branch (Settings → Pages → Source: deploy from branch). No further configuration is
needed — the `.nojekyll` file at the root skips Jekyll processing since this is plain HTML.
