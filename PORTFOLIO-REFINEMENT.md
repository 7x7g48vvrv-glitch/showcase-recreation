# Country and client slide refinement — local review

This update is limited to the added Global reach and Client work slides. The original opening, stock intro sequence, service cards, company accordion, service overview and chapter animations remain unchanged. No human-character replacement or previous rejected portfolio files were restored. This revision was reviewed locally before the user authorised production deployment.

`dist/services/portfolio-refinement.js` contains the two presentation components; `.css` scopes the black, graphite and red styling. `service-ui.js` supplies the existing Canva-sourced data and mounts those two components. Changes in the compiled main/chapter/preload files only change cache-version query strings; their logic is identical to the previous committed version after normalising those versions.

The country slide presents an orbital location selector and a reflective spotlight showing the documented LinkedIn clients for that country. The client slide uses a three-card perspective gallery with a bright featured card, etched numbering, reflective light, keyboard/arrow controls, direct selection and work-category filters. Desktop scroll progress also changes the selected country/client within the existing pinned company sequence. Reduced-motion visitors retain manual selection with transitions disabled. There is no independent autoplay.

Countries are client reach, not asserted offices. Client names and service associations come from the supplied Canva portfolio. No client logos, addresses, campaign metrics or case-study claims were invented. Filter counts remain 23 distinct brands / 12 social media / 15 performance marketing / 9 LinkedIn entries.

Local preview: from this project directory run `python3 -m http.server 4173 --bind 127.0.0.1 --directory dist`, then open http://127.0.0.1:4173/. Use the menu's Global reach and Client work links. Production uses the existing Git-linked Vercel project: https://showcase-recreation-deploy.vercel.app/.

Verified in isolated Chromium at 1440, 1024, 768, 390 and 375px: client arrows change selection, all filter counts match source data, country selection shows the correct client entry, and no horizontal overflow appears. Desktop/mobile screenshots were visually reviewed. The retained hero/card/chapter source was compared with HEAD after cache-version normalisation and matches exactly.

A mobile WebKit check also passed client browsing and overflow checks with reduced motion enabled; card-name animation computed as `none`, and no page errors were recorded.
