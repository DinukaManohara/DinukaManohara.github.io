# DinukaManohara.github.io

My personal website — a static site with About, Publications, Projects, and Blog pages, hosted
on GitHub Pages. No build step, no framework: just HTML, CSS, and a little vanilla JS.

## Structure

```
index.html            About page (alternating image/text sections)
publications.html      Publications list
projects.html          Projects grid
blog.html               Blog post index
blogs/                  Individual blog post pages
  _template.html         Copy this to start a new post
css/style.css           Shared styles (light + dark mode)
js/main.js              Mobile nav toggle + active-link highlighting
images/                 Site images (currently placeholder SVGs)
favicon.svg              Site favicon
```

## Editing content

- **About**: edit `index.html` directly — swap the placeholder text and the images in the
  `about-block` sections.
- **Publications**: add or edit `<li class="pub-item">` entries in `publications.html`.
- **Projects**: add or edit `<article class="project-card">` entries in `projects.html`.
- **Blog**: copy `blogs/_template.html` to `blogs/your-post-slug.html`, write the post, then add
  a matching `<li class="post-item">` entry to `blog.html` so it shows up in the list.

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
