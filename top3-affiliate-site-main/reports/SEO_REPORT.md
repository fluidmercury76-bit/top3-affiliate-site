# SEO Recovery Report

**Date:** 18 August 2026

## What was found

The supplied site was crawlable in principle, but crawlability alone was not the real issue. The stronger risks were malformed canonical tags on key landing pages, a large set of thin supporting guide URLs, stale product content in public search snapshots, and inconsistent consolidation between guides and the main buying pages. These can confuse canonical selection and dilute the site's useful-content footprint.

No Google Search Console export or screenshot was supplied. Therefore this report does **not** claim to know whether specific URLs are currently classed by Google as Crawled — currently not indexed, Discovered — currently not indexed, Duplicate, Soft 404, Redirect error, or another status.

## Technical fixes completed

- One valid self-referencing canonical on every content page.
- Clean robots.txt allowing crawling and naming the canonical sitemap.
- Sitemap rebuilt to 29 canonical priority URLs with a 2026-08-18 last-modified date.
- Sixty thin `/guides/` URLs removed from the live page set and permanently redirected to their matching `/products/` buying guide.
- Existing historical redirects retained.
- Internal links updated so new navigation points directly at canonical buying pages instead of redirecting guide URLs.
- Valid JSON-LD retained for BreadcrumbList, ItemList and FAQPage on buying guides.
- No fake Product, Review or AggregateRating schema was introduced.
- Asset references to removed images eliminated.
- Basic security/content-type and referrer headers added in `vercel.json`; analytics and affiliate behaviour preserved.

## On-page/content changes completed

- Every recommendation was rechecked against a manufacturer, official support, official distributor, or brand-owner product page.
- Product wording now states intended user, practical benefit, limitations and relevant specifications without pretending every item was personally tested.
- Manufacturer verification date/source appears on every product card.
- Category introductions, internal links and buying context were refreshed.
- Thin satellite guide content was folded into more substantial decision-support sections on the 20 core buying pages.
- Page titles/meta descriptions/heading structure were normalised and validated.

## Google Search Console actions after deployment

1. Submit `https://www.top3choices.co.uk/sitemap.xml` in **Sitemaps** and confirm it is read successfully.
2. In **URL Inspection**, run a live test on the homepage, all six category pages and a representative set of buying pages. Check: crawl allowed, HTTP 200, user-declared canonical, Google-selected canonical, rendered content and no accidental noindex.
3. Inspect several old `/guides/` URLs. They should resolve by a permanent redirect to the matching `/products/` URL; verify Google recognises the destination rather than treating the old URL as an error.
4. Request indexing for the homepage, category hubs and the most important revised buying pages after deployment. Do not repeatedly request the same URL.
5. Monitor **Page indexing** for 4–8 weeks. Export the reasons and affected URLs if the revised pages still fail to index.
6. Monitor **Performance** for impressions first, then clicks. A recovery in impressions often appears before clicks. Compare query/page data before and after 18 August 2026 rather than looking only at site-wide totals.
7. If failures persist, export **Page indexing**, **Crawl stats**, and a URL Inspection screenshot/example for one affected buying page. That is the evidence needed to distinguish crawl, canonical, rendering, quality and discovery issues.

## What cannot be guaranteed

The fixes improve technical clarity and content quality but cannot guarantee indexing, rankings or clicks. Google decides what to crawl and index, product demand changes, and the site's authority/backlink profile was outside the supplied ZIP.
