<!-- The design decision this site is built from. Business: Moulton's Heating & Cooling.
     Rebuilt 2026-10-01 as a five-page site (replaces the original two-page Agent V2 design). -->

# DESIGN.md — Moulton's Heating & Cooling

archetype: trust-institutional, warmed up
rationale: A Tampa Bay homeowner with a dead AC wants two things fast: proof this is a real local crew, and a way to reach them. The site leads with booking and "24/7 emergency support", then shows the business's own job photos (eleven real ones, not stock), three real Google reviews and its own words about professionalism and respect inside the home. No credentials or statistics exist, so none are invented.
interaction_level: L1 (scroll reveal, sticky header, popover menu, project filter + lightbox)

personality: [dependable, direct, local, quietly confident]

concept: >
  "Fire & ice", taken straight from the logo: an orange flame (heating) beside a blue flame (cooling) on deep navy.
  The signature is a split heat-to-cool rule (half orange, half logo blue) used on every eyebrow, the nav
  underline and the footer edge. Orange is the action colour; blue is the cooling accent; navy carries structure.

typography:
  display: "Poppins" (500/600/700)
  body: "Open Sans" (400/600)
  notes: >
    Headings use component classes t-display / t-h2 / t-h3. Do NOT name them h-2 / h-3: Tailwind v4 emits
    `.h-2 { height: .5rem }` utilities that override component classes and collapse the heading onto the
    text below it. Eyebrows are Poppins 600 uppercase, tracked .16em, preceded by the heat-to-cool rule.

palette:
  primary: "#f26400"      # brand orange: buttons, phone numbers, active states
  secondary: "#242a56"    # brand navy: dark bands
  accent: "#0d1c39"       # logo navy: header, hero, footer, CTA bands (the logo badge's own background)
  heat-deep: "#c94f00"    # orange text on light grounds (eyebrows)
  cool: "#4a88c8"         # logo "Sub-Zero Cooling" blue: icons, focus ring, rule
  cool-soft: "#9cc3ee"    # blue text on navy
  ice / surface: "#eff2ff"
  ground: "#f7f8fc"
  ink: "#111a30"
  muted: "#4a5070"
  border: "#d6dbe8"
  application: >
    Orange buttons carry a WHITE label (owner's choice, 2026-10-01; ≈3.2:1, hover deepens to #c94f00 ≈4.6:1).
    Orange text appears on navy, or at display size; on light grounds the eyebrow uses heat-deep.

composition:
  photography: owner's own job photos, all portrait 3:4 phone shots, so layouts are split (text + portrait
    photo) rather than full-bleed. Home hero stacks two photos offset. Never crop a photo to imply a scene it
    doesn't show; alt text describes what is actually in frame.
  cards: white, 14px radius, soft navy shadow, lift on hover.
  mobile: popover menu sheet (no top bar, no floating call bar), header
    quote button hidden < 640px, every grid collapses to one or two columns.

pages:
  - index.html (home): hero, offerings, about, beyond, projects, process, faq, contact
  - about.html: hero, story, values, work, area, contact
  - services.html: hero (+ on-page TOC), offerings (installation, maintenance, repair, air-conditioning),
    cleaning, water-heaters, emergency, faq, contact
  - our-projects.html: hero, gallery (filter chips + <dialog> lightbox), contact
  - contact-us.html: hero, contact (details panel + quote form #quote)
  - 404.html: noindex

redirects (_redirects):
  - /blog-post-title → / (template placeholder post on the old WordPress site)
  - /about, /services, /our-projects, /contact-us keep their old URLs (Cloudflare serves the .html)

images:
  - project photos: uploaded to Kora's Azure store (v2-uploads/…/<uuid>-<descriptive-name>-{800,1600}.webp),
    srcset 800w / 1200w (Kora caps uploads at 1200x1600). No images are stored in the repo.
  - Azure (kept): logo 1790854600_lmhn04.png (180px square badge), favicon 1790854600_jt32cx.png,
    og:image 1790854600_lmhn04.png (logo, used for link sharing previews)
  - skipped: 88ec5f6d… (corrupt on the old server; also the Azure 1790854600_21a7h1.jpg copy of it)

booking:
  - Square Appointments, always opened in a new tab with an sr-only "(opens in a new tab)" note.
    List: https://book.squareup.com/appointments/8xou14spkf702r/location/LQJVNXXJBW9Q4/services
    Deep links: /DCFSBHTVXSYFIVAJDCXG34LW (Diagnostic Service, 30 min), /SYVCAOO6BJORUQNBRGKPLSBK (AC Maintenance,
    45 min), /WGNJHF6QHLFIIUBNHC6WBA3D (AC Installation, 6 hr). All "price varies".
  - Placements: header primary button from 1024px only (replaces the old phone block; hidden beside the hamburger), mobile menu, home hero (Book + Call),
    home #booking cards, Services rows (installation/maintenance/repair → their deep links), the
    "Prefer to pick a time yourself?" card above the contact form, and every closing contact band (Book + Text now).
    The contact-us hero carries no buttons.
  - NOT on the 24/7 emergency section: that stays call-only.

texting:
  - "Text now" (sms:+18138601069, carried over from the old site's homepage Contact section) sits beside
    Book online in the closing contact band (no Call button there; the phone number is in the panel beside it)
    on index, about, services and our-projects, and alone under the phone number in the contact-us panel.

reviews:
  - Home #reviews: three real 5-star Google reviews, verbatim (Jermaine Levy, Sachae Soso, Erika Li), as
    equal-height cards with stars, a "Google review" tag and the reviewer's first initial. No dates (they go stale).
  - Also in the business JSON-LD as `review` entries. No `aggregateRating`.

forms:
  - contact-us.html #contact-form → POST {apiBaseUrl}/api/v1/public/forms/submit, form_type "contact",
    fields name, email, phone (optional), service (optional select), message; reCAPTCHA lazy-loaded
    (immediately when arriving on #quote).

avoid:
  - an aggregate rating or review count (owner's choice: show only the three real Google reviews)
  - invented, edited or paraphrased reviews; review text stays verbatim, typos included
  - statistics, years in business, licence numbers, awards (none provided)
  - opening hours other than "24/7 emergency support"
  - a map embed (service area, not a storefront)
  - stock photography
