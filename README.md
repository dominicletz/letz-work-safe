# Letz Work Safe — Redesign

Static, build-free redesign of [letz.inarbeit-webdesign.de](https://letz.inarbeit-webdesign.de/), inspired by the clean card-grid style of [huk24.de](https://www.huk24.de/), reinterpreted in a workplace-safety palette.

## Preview locally

Either open `index.html` directly in your browser, or serve the folder so relative paths and form submission feel realistic:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, services, advantages, stats, FAQ, contact CTA |
| `leistungen.html` | Detailed service breakdown (4 alternating blocks) |
| `ueber-uns.html` | About / philosophy / region |
| `kontakt.html` | Contact form, phone, WhatsApp, hours |
| `impressum.html` | Legal stub (Impressum) |
| `datenschutz.html` | Legal stub (Datenschutzerklärung) |

## Design system

| Token | Value | Use |
| --- | --- | --- |
| Primary | `#114B5F` | Brand teal, primary buttons |
| Primary dark | `#0B2E3A` | Header utility bar, footer |
| Secondary | `#1A8A99` | Hover, links |
| Accent | `#F39200` | Safety orange — main CTAs, footer stripe |
| Surface | `#FFFFFF` | Page background |
| Surface 2 | `#F4F7F8` | Card / alternating sections |
| Border | `#E3E9EB` | Card borders, dividers |
| Text | `#1F2A2E` | Body |
| Text muted | `#5B6B72` | Secondary copy |

Typography: [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts (loaded with `display=swap`).

## Project structure

```
.
├── index.html
├── leistungen.html
├── ueber-uns.html
├── kontakt.html
├── impressum.html
├── datenschutz.html
├── assets/
│   ├── css/style.css       # Design tokens + components + layout
│   ├── js/main.js          # Mobile nav, FAQ accordion, form handler
│   └── img/                # Brand photography mirrored from the live site
└── README.md
```

## Image credits

All photography is reused from the original Letz Work Safe site
(`letz.inarbeit-webdesign.de/wp-content/uploads/2026/03/`) and mirrored locally:

| File | Used on |
| --- | --- |
| `letz-768x718.png` | Home hero, Über-uns portrait (cut-out PNG on teal gradient) |
| `arbeitssicherheit01-1024x683.jpg` | Leistungen → Arbeitssicherheit |
| `gefahrenbegutachtung-1024x683.jpg` | Leistungen → Gefährdungsbeurteilungen |
| `arbeitssicherheit02-1024x683.jpg` | Leistungen → Betriebsanweisungen, Home about-teaser |
| `schulung-1024x683.jpg` | Leistungen → Schulungen & Unterweisungen |

## Notes

- No backend: the contact form validates with HTML5 + a tiny JS handler that swaps the form for a success card.
- All icons are inline SVG — no icon font dependency.
- Legal pages (`impressum.html`, `datenschutz.html`) are stubs — fill with the real legal copy before going live.
