# Tonhaute Labs service showcase

An adaptation of the 8am Showcase browser experience for Tonhaute Labs. The retained GSAP animation system includes the card wheel, holographic hover effects, filtered grid, chapter transitions and responsive horizontal/vertical service slides.

## Content

Company source: [Ton Haute Labs Portfolio](https://www.canva.com/design/DAHZF0ccAgY/638SMVN9l8qUUcIxF7bW4w/edit), read November 4, 2026. Company description, expertise and selected portfolio examples come from that document. The expanded service offering comes from the user's supplied 12-service list, plus LinkedIn Marketing and Video & Motion Design. No client metrics, certifications, prices, team biographies or testimonials were invented.

Edit `dist/services/catalog.json` for service names, summaries, goals, chapter content and visuals. Run `node scripts/build-services.mjs` to validate content and update its browser module. Service icons are SVGs. The 14 generated corporate photographs in `dist/services/photos/` are illustrative service imagery, not photographs of actual Tonhaute staff or delivered client projects. `service-ui.js` contains the company overview and booking brief components.

## Booking and payments: outstanding setup

Each service has a booking CTA, brief form and review step. Downloading a brief works locally. Forms do not transmit personal data or claim a successful booking. Live payments are not enabled: no Stripe integration was installed in the connected Vercel team, and Marketplace discovery failed. Approved prices/currency, a connected Stripe account, and an enquiry destination are needed before enabling submission/payment. There are no fake payment endpoints or success states.

## Hosting

Serve `dist/` with a static web server. No application build/install is needed. Vercel project `showcase-recreation-deploy` in `accenous-integrals1` deploys the GitHub `main` branch with `dist` as output. Do not put payment secrets in browser files.

The reference's compiled browser components are retained because editable original components were not available. `dist/assets/index-D9elqclh.js` imports the service catalog and custom company/brief UI. `CardDetail-CNoTyG-_.js` retains the chapter shell and imports the booking modal. The intro uses the supplied founder video (`dist/brand/founder-turn.mp4`), sampled into 83 WebP frames in `dist/frames/tonhaute-turn-v1/`. The existing GSAP canvas timeline scrubs these frames on scroll; the preload paths match this versioned directory. Audio is not played. Lead submission to the original company's Marketo account is disabled, and the old integrations panel and reference product content are no longer rendered.

## Visual audit

`dist/services/service-audit.css` bounds chapter typography and spacing on phone, tablet and desktop. It replaces the inherited oversized display-list treatment with readable deliverables, standardises body copy and CTAs, and sets correct photo fitting. The process section uses selectable steps without faded or masked text. Desktop section navigation moves directly between chapter panels. See `AUDIT.md` for validation and outstanding commercial setup.

### Company portfolio sections

`dist/services/company-sections.css` styles the portfolio-backed reach, service overview and client work sections in `service-ui.js`. Source: the supplied Canva portfolio, revision 125. Country names represent documented client reach, not offices. Client filters deliberately use text names instead of recreating unverified logos. The desktop timeline maps expanded scroll progress through `thLegacyProgress` / `thRawProgress` in the main bundle, preserving existing card motion. Compact and reduced-motion layouts use ordinary document flow.
