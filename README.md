# 8am Showcase recreation

Preserves the public reference browser application, GSAP animations, 83 scroll frames, original fonts, image assets, holographic cards, animated grid and filter transitions, 14 complete chapter views and their interactive feature demos.

Reference: https://showcase.8am.com/

Serve `dist` as a static website. No build step. The public compiled browser files are retained to preserve animation timing and behavior; original editable component source is not available.

Hosting adaptations: image URLs resolve to locally bundled originals instead of Netlify image transformations; third-party analytics injection is removed; lead submission is isolated from the reference company’s Marketo endpoint and displays a preview message. External editorial and integration links continue to their original destinations.

Local browser QA: desktop intro, card grid/menu transition, chapter opening, feature tab selection; mobile viewport 390px with no horizontal overflow.
