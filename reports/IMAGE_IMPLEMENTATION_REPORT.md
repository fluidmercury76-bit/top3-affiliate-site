# Product Image Implementation Report

Verified: 18 August 2026

## Completed

- All 60 recommendation cards now contain a visual asset.
- 46 exact/current product images are stored locally in `/images/products/` as optimised WebP files.
- 11 exact/current product images use verified official manufacturer-hosted CDN fallbacks because those CDNs returned AVIF or otherwise blocked local materialisation in the current tooling environment.
- 3 products retain a clearly labelled neutral illustration rather than showing the wrong product: Fiskars P961, Mira Beat Single Spray 90mm and Himalayan Bazaar Hand Hammered Singing Bowl Set.
- Category buying-guide cards now show representative local product photography.
- Homepage category/popular cards now use local product photography as visual backgrounds.
- Product images use descriptive alternative text, lazy loading and decoding hints.
- Local images are compressed and dimensioned to control layout shift and page weight.

## Important rights note

An image being hosted by a manufacturer does not by itself prove a general republication licence. The image-rights register records that distinction. The site owner asked for manufacturer imagery to be used, but separate republication permission has not been independently established unless stated otherwise.

## Three remaining source gaps

The three labelled illustrations should be replaced with exact product photographs once a directly downloadable authorised asset is obtained. I deliberately did not substitute a visually similar model, because that would make the comparison misleading.


## Navigation and category image correction — 18 August 2026

- Restored visual photography to all six homepage category cards using local assets from the supplied original site.
- Restored imagery to the three homepage popular-guide cards.
- Restored a photographic hero image to all six category landing pages.
- Replaced mixed-aspect product pack shots on category landing cards with consistently cropped navigation photography.
- Generated 20 standard 1200×720 WebP guide thumbnails and six 1400×900 WebP category hero/card images.
- Fixed a global `!important` CSS rule that was unintentionally overriding the homepage category background images.
- Category-card images now use `object-fit: cover` and `object-position: 50% 50%` inside a fixed 190px desktop frame / 165px mobile frame.
- Exact manufacturer product photography remains on the individual Top 3 buying-guide product cards.

The restored navigation/category source photographs came from the user's supplied original website package. Their historical reuse-rights status remains whatever applied to that supplied site; this correction does not newly assert a third-party licence.
