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
│   └── img/                # Reserved (current build references Unsplash photos)
└── README.md
```

## Notes

- No backend: the contact form validates with HTML5 + a tiny JS handler that swaps the form for a success card.
- All icons are inline SVG — no icon font dependency.
- Hero / feature photography is referenced from Unsplash CDN URLs; replace with branded photography for production.
- Legal pages (`impressum.html`, `datenschutz.html`) are stubs — fill with the real legal copy before going live.
