# Top 3 Choices — Website Audit and Corrective Work

**Audit / refresh date:** 18 August 2026  
**Source:** supplied ZIP, preserved separately before changes  
**Stack:** static HTML + CSS, small vanilla JavaScript enhancement, Vercel routing/configuration, Vercel Analytics/Insights, Amazon affiliate links. No build framework, CMS, checkout or server-side application was present.

## Brief diagnosis

The loss of search visibility is unlikely to have one single cause. The supplied build had a combination of malformed canonical markup on the homepage and category pages, 60 very thin template-like guide pages, stale product content visible in public search snapshots, undocumented image rights, weak mobile/menu interaction, and unnecessary image payload. These signals can make crawling, consolidation and quality assessment harder even when robots.txt itself allows crawling. Google Search Console data was not supplied, so no claim is made about Google's exact exclusion reason for any URL.

## Priority findings and actions

| Severity | Finding | Evidence in supplied build | Corrective action | Status |
|---|---|---|---|---|
| Critical | Malformed canonical tags | Homepage and all six category pages had canonical tags missing the closing `>` | Rebuilt head markup and ensured one valid self-referencing canonical on every content page | Completed |
| High | Large thin-content footprint | 60 guide pages; main content averaged 147 words, median 149 | Consolidated guide intent into 20 substantial buying pages; removed guide files from sitemap and deployment; added permanent redirects | Completed |
| High | Stale product recommendations / naming | Several public search snapshots still exposed older recommendation sets while local files contained newer picks | Re-verified all 60 recommendations against current manufacturer/brand-owner sources and updated names/content | Completed |
| High | Image rights not documented | 208 local image assets plus remote background references had no supplied reuse-rights register | Removed all active raster/remote imagery; replaced with CSS-only visuals; created asset-by-asset rights register | Completed |
| High | Weak crawl consolidation | Thin guide URLs competed with main buying pages; sitemap included too much low-value inventory | Sitemap reduced to 29 canonical priority URLs; 60 guide URLs permanently redirected to matching buying pages | Completed |
| Medium | Mobile/touch navigation risk | Mega menu relied on hover/focus behaviour | Added a small vanilla-JS click/touch/Escape/outside-click controller with ARIA expanded state | Completed |
| Medium | Focus/contrast/accessibility | Focus treatment and keyboard affordances were weak | Added skip links, visible focus states, improved contrast and reduced-motion handling | Completed |
| Medium | Heavy asset payload | Supplied project was about 19.7 MB and contained large/duplicated image collections | Deployable refreshed project is about 0.6 MB and ships no raster image files | Completed |
| Medium | Generic category pages | Category pages were thin and primarily acted as link grids | Rewrote category introductions and supporting copy, improved direct links and visual hierarchy | Completed |
| Low | Social image metadata pointed at unverified/removed assets | `og:image` / Twitter image tags referenced legacy files | Removed image metadata and changed Twitter card mode to text summary | Completed |

## Content depth after consolidation

The 20 main buying guides now contain approximately 1247–1416 words in their `<main>` content, with a median of 1285. More words are not automatically better; the important change is that each page now contains comparison context, product limitations, source notes, ownership considerations, common-problem guidance and FAQs rather than three near-duplicate satellite pages.

## Important limitation

The audit can validate the supplied source and the refreshed deployable package. It cannot see Google Search Console's private indexing reasons, live Vercel response headers after deployment, or future product stock. Those items are listed in the SEO report and unresolved-risk file.
