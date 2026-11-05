# Tonhaute Labs — visual and interaction audit

Audit pass: November 5, 2026.

## Corrected findings

- The reference chapter stylesheet used its largest display type token for deliverable lists. This caused oversized, heavily wrapped copy and vertical clipping. Deliverables now use 18–22px desktop text and 19px phone/tablet text, with explicit line heights and spacing.
- Chapter body copy now uses 16–17px text and 1.5–1.65 line height. Hero headings scale from 34px on phones to a 60px desktop maximum. Other headings, labels, controls and form fields use bounded sizes.
- Repeated generic SVG workflow boards have been replaced in all active placements by 14 distinct corporate photographs generated for the service offering. Original holographic service card colours and icons remain.
- Photos use full-resolution 1536×1024 assets, appropriate cover fitting and JPEG encoding. The fourteen assets total approximately 5.8 MB. Photographs are illustrative, not actual team/client photographs.
- Faded and masked process carousels have been replaced by accessible selectable process steps, a clear visual and a caption. Arrow keys move between the process tabs.
- Desktop chapter section buttons provide direct navigation to Overview, Deliverables, Process, Working Together, Booking and Next Service.
- Phone hero padding was applied twice; redundant outer padding is removed. The payment CTA now remains on one line. Input text is at least 16px on phones.
- Keyboard focus trapping excludes hidden or disabled controls.

## Verification

| Check | Result |
| --- | --- |
| All 14 desktop chapters, 1280×720 | 16px body, 18px deliverables; no scope/process panel overflow; loaded 1536px photos; no broken chapter images |
| Phone, 390×844 | 16px body, 19px deliverables, 34px hero; document width 390px; no horizontal panel overflow |
| Tablet, 768×1024 | 16px body; document width 768px; no horizontal panel overflow |
| Large desktop, 2048×1152 | 17px body, 22px deliverables, 60px maximum hero heading; no scope/process panel overflow |
| Process step selection | Updates the selected step and description; keyboard-accessible tab controls |
| Booking modal, phone | 16px inputs, no horizontal overflow, internal scrolling for long form |
| Content/asset validation | 14 unique services, complete chapters and all referenced local images/icons present |

## Still awaiting company/commercial setup

Live Stripe checkout, confirmed service prices/currency, and an enquiry submission destination remain outstanding. The booking brief is a draft/review/download flow; it does not claim to send an enquiry, confirm a booking or collect payment. This audit does not enable payment or change the company's commercial terms.

## Supplied identity update

The user-supplied Ton Haute / Est. 2013 identity replaces the draft logo. Transparent white/red variants are used for contrasting surfaces, with the standalone TH symbol in the scroll animation and favicon. Updated browser modules and style sheets carry a release query to avoid stale cached versions.

## Company reach and portfolio update — 5 November 2026

Re-read the supplied Canva portfolio (DAHZF0ccAgY, revision 125). Added three sections after Who we are, before the closing brief form:

- Global reach: United Arab Emirates (Abu Dhabi/Dubai), India, Qatar, Russia, Australia and Saudi Arabia. Country selection displays the portfolio's corresponding LinkedIn clients. These are client locations, not claimed office addresses.
- Services: 14 existing service chapters grouped into Build & launch, Grow & create and Explore & innovate. Every link opens the original animated chapter interface.
- Client work: 23 distinct brand names, filterable to 12 social media entries and 15 performance marketing entries; nine LinkedIn entries have their own filter. Names are typeset; no invented client logos or performance claims.

Extended the desktop company portion of the pinned scroll timeline by 600 viewport heights, with a piecewise progress conversion preserving the existing card/closing phase lengths. Added company section navigation and menu links. On compact devices the same sections use normal document flow with one-time entrance reveals; reduced-motion visitors receive static content.

Restored the supplied white hero wordmark's masked light sweep and soft white halo. Fixed inherited white headings inside the light Who we are accordion and prevented parked service cards from obstructing the company sequence.

Verified in browser: desktop company transitions via scrolling and direct navigation, country switching, all four client filters (23/12/15/9), service-to-chapter opening, mobile country navigation and absence of horizontal overflow, opening wordmark animation, and closing form visibility. Standard desktop 1280×720 and mobile 390×844 checked. Existing payment/lead submission limitations are unchanged.
