# Country scroll scenes

Global reach now presents UAE, India, Qatar, Russia, Australia and Saudi Arabia as full-screen landmark scenes. The existing company timeline drives the desktop sequence; smaller screens use a sticky section in ordinary document flow. Country buttons support direct selection. Reduced-motion visitors use direct selection without scroll-driven scene changes or transitions.

Client names and country associations retain the existing portfolio data. These scenes describe client reach, not physical office addresses. Landmark photographs are local WebP assets; source, author, licence and conversion details are in `dist/places/credits.json` and the visitor-facing credits page.

The supplied hawk mascot was adapted into transparent waving, pointing and laptop poses. The pointing pose accompanies the country journey, and the three poses appear in the service overview. The sheet uses CSS positioning, with decorative images excluded from the accessibility tree.

Desktop scroll space is extended for the six countries. The forward and inverse progress mappings allocate the additional scroll duration to the reach section, preserving the logical positions used by existing card and company navigation.

Validation: JavaScript syntax checks; progress-map monotonicity and round-trip checks; browser review of desktop landmark layout, all six destination controls, reverse scrolling, 390px mobile layout, mobile scroll progression, loaded imagery and horizontal overflow. The existing service-detail flow is retained.
