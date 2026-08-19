# Validation Checklist

**Validation date:** 18 August 2026

| Area | Result | Notes |
|---|---|---|
| HTML inventory | Pass | 33 HTML files remain: 32 content pages plus Google verification file |
| Canonicals | Pass | 32/32 content pages have exactly one non-empty canonical |
| Titles/meta descriptions | Pass | Present on every content page; duplicate check passed |
| H1 structure | Pass | Exactly one H1 on every content page |
| JSON-LD | Pass | All `application/ld+json` blocks parse as valid JSON |
| Internal links | Pass | No unresolved local hrefs in static validation |
| Thin-guide links | Pass | No live HTML links to `/guides/`; 60 redirects retained in Vercel config |
| Sitemap | Pass | Well-formed sitemap containing 29 canonical priority URLs |
| robots.txt | Pass | Allows crawling and references canonical sitemap |
| Product image references | Pass | 60/60 product cards contain a visual; 46 use local product photos, 11 use exact manufacturer-CDN fallbacks and 3 use clearly labelled temporary illustrations |
| Category imagery | Pass | 20/20 buying-guide cards use representative local product photography; homepage category/popular cards also use local product photography |
| Image rights register | Pass with caveat | Every deployed product visual is recorded; manufacturer hosting is documented separately from confirmed republication permission |
| JavaScript syntax | Pass | `node --check scripts/site.js` succeeded |
| CSS parse | Pass | `tinycss2` reported zero parse errors in all five CSS files |
| Keyboard/accessibility | Pass (static) | Skip link, focus-visible state, semantic nav, ARIA menu state, Escape/outside-click logic added |
| Colour contrast | Pass for core palette | Ink/white 16.77:1; muted/white 6.38:1; brand-dark/white 9.54:1; white/CTA 6.47:1 |
| Reduced motion | Pass | `prefers-reduced-motion` override included |
| Responsive CSS | Pass (static) | Mobile breakpoints for navigation, cards, sections and hero included |
| Browser visual QA | Needs manual confirmation | Container Chromium failed because of its headless/DBus environment, so screenshots were not falsely marked as passed |
| Forms | N/A | No forms or input controls exist in the supplied/refreshed site |
| Search/filter | N/A | No site search or filtering feature exists in the supplied/refreshed site |
| Analytics | Preserved | Existing Vercel Insights loader left intact |
| Affiliate behaviour | Preserved/updated | Amazon Associate tag `top3choices-21` retained; product CTAs use current-model Amazon UK searches rather than stale hard-coded ASINs |
| Live HTTP/redirect headers | Requires deployment | Local static server returned HTTP 200, but Vercel redirect/header behaviour must be checked on the deployed domain |
