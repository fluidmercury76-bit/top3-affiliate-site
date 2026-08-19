# Unresolved Risks, Assumptions and Next Steps

1. **Google Search Console evidence is still missing.** This is the biggest diagnostic gap. After deployment, provide a Page indexing export plus URL Inspection examples for any important URL that remains unindexed.
2. **Live Vercel redirect/status validation still needs the deployed site.** Confirm the 60 guide redirects return a permanent redirect and that canonical pages return 200, not chains or soft 404s.
3. **Product availability changes.** Every source was checked on 18 August 2026, but stock, model ranges and specifications can change. Recheck the catalogue on a regular schedule.
4. **Image sourcing is not yet fully local.** The refreshed package now contains 46 local product photographs, 11 exact manufacturer-CDN image fallbacks and three clearly labelled neutral illustrations where an exact downloadable manufacturer asset could not be extracted (Fiskars P961, Mira Beat Single Spray 90mm and the Himalayan Bazaar singing bowl set). Manufacturer hosting does not by itself establish a republication licence, so the image-rights register records that limitation explicitly.
5. **No ranking guarantee.** Technical cleanup and better content can remove avoidable obstacles; they cannot guarantee indexing, positions or traffic.
6. **Authority/off-site SEO was not in the ZIP.** Backlinks, brand mentions, Search Console manual actions and competitive SERPs were not fully auditable from source code alone.
7. **Manual cross-browser visual QA remains advisable.** Static responsive/accessibility validation passed, but the container's Chromium build could not complete headless screenshots because of its environment. Test current Chrome, Safari and Firefox at common mobile/desktop widths after deploy.
