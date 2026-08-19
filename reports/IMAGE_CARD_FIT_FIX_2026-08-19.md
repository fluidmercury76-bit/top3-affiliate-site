# Homepage and category image card fit fix — 19 August 2026

## Scope
Only homepage navigation cards and category-page guide cards were changed. Product recommendation page imagery was not altered.

## Changes
- Rebuilt all 9 homepage visual cards to use real `<img>` elements rather than CSS background images.
- Added a fixed, centred image panel to homepage category and Popular Guide cards.
- Changed homepage navigation images from background `cover` behaviour to `object-fit: contain`, preventing zooming and edge cropping.
- Changed all 20 category-page guide images from `object-fit: cover` to `object-fit: contain`.
- Centred category-page images horizontally and vertically and added controlled internal spacing.
- Reduced hover image zoom so the image remains readable.
- Added responsive image heights for small screens.
- Corrected malformed canonical/Open Graph markup found on the homepage and six category pages while editing those files.

## Validation
- 9/9 homepage visual cards contain a local image.
- 20/20 category guide cards contain a local image.
- 6/6 category pages checked.
- 0 missing referenced navigation images.
- 0 CSS parse errors in `home.css`, `styles.css`, or `shared.css`.
- Homepage and category pages now each contain one valid canonical tag and one separate `og:type` meta tag.
