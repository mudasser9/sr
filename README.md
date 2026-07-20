# SOC Portfolio — Syed Mudassar Hasan Wasti

A personal SOC analyst portfolio, built as a static site (plain HTML/CSS/JS, no build step) so it deploys directly on GitHub Pages.

## Sections
- **Home** — intro and quick links
- **About** — background and tools
- **Projects** — hands-on lab/tooling work
- **SOC Reports** — sanitized incident write-ups
- **Detection Rules** — Sigma/SPL/KQL rules mapped to MITRE ATT&CK
- **Playbooks** — incident response runbooks
- **Certifications** — certs with verification links
- **GitHub / LinkedIn / Resume / Blog** — footer + rail links

## Structure
```
index.html      main one-page site
blog.html       simple blog index
css/style.css   all styling (CSS variables at the top control the palette)
js/main.js      ticker content, nav highlighting, mobile menu
img/            favicon + profile photo
resume.pdf      placeholder — replace with your current SOC resume
```

## To customize
- Edit the placeholder text in `index.html` (projects, reports, rules, certs, cert dates).
- Update the LinkedIn URL and GitHub links in the `.rail__links` and footer sections.
- Replace `resume.pdf` with your actual resume, keeping the same filename (or update the link).
- Colors/fonts are all defined as CSS custom properties at the top of `css/style.css` under `:root`.

## Deploy
This is already set up for GitHub Pages. Push to `main` and enable Pages (Settings → Pages → Deploy from branch → `main`) if not already active.
