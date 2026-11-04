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

Live Stripe checkout, confirmed service prices/currency, an enquiry submission destination and the official logo file remain outstanding. The booking brief is a draft/review/download flow; it does not claim to send an enquiry, confirm a booking or collect payment. This audit does not enable payment or change the company's commercial terms.
