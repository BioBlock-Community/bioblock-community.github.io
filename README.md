# BioBlock community website

This is a dependency-free static website for GitHub Pages.

## Edit a page

Each public page has its own HTML file. Search for `PAGE CONTENT START` in the
file and edit the content between that marker and `PAGE CONTENT END`.

| Page | File |
| --- | --- |
| Home | `index.html` |
| Events | `events.html` |
| Community | `community.html` |
| Roadmaps & Projects | `roadmap-projects.html` |
| Knowledge Center | `knowledge-center.html` |
| Glossary | `glossary.html` |
| FAQ | `faq.html` |
| Open Call 2025 | `call-2025.html` |
| Contact | `contact.html` |
| Impressum | `impressum.html` |
| Privacy Policy | `privacy-policy.html` |

Shared colors, typography, spacing, and responsive layouts live in
`styles.css`. The mobile navigation behavior lives in `script.js`.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Content source

The page copy was adapted from the archived BioBlock website captured on
16 May 2026:

<https://web.archive.org/web/20260516103052/https://www.bio-block.org/>
