# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Moulton's Heating & Cooling | HVAC Services in Tampa Bay, FL
purpose: Home page: what Moulton's does, its services, recent projects, FAQ and how to get in touch.
sections:
- `#hero` "Reliable AC & Home Services Built Around Your Schedule" — introduction, call and quote actions, two job photos
- `#offerings` "Everything your HVAC system needs, from one local team." — Installation, Maintenance, Repair, Cleaning, Air Conditioning
- `#booking` "Book your visit online." — Square booking cards: Diagnostic Service, AC Maintenance, AC Installation
- `#about` "From the moment we step into your home." — who they are: Professionalism, Respect for your home, Exceeding expectations
- `#beyond` "One call for the rest of the house, too." — Water heater service, Cleaning & air quality, Commercial HVAC
- `#projects` "Recent work across Tampa Bay." — four project photos linking to the projects page
- `#reviews` "What our customers say." — three real Google reviews: Jermaine Levy, Sachae Soso, Erika Li
- `#process` "Comfortable again in three simple steps." — Call or send a request, We come to you, We get you comfortable
- `#faq` "Frequently asked questions." — six questions (also in FAQPage JSON-LD)
- `#contact` "We would love to hear from you." — Book online and Text now (sms:) buttons; phone, email, service area, social links
also: HVACBusiness/LocalBusiness (with the three reviews and a ReserveAction pointing at Square booking) and FAQPage JSON-LD in the head.

## about.html → /about
title: About Moulton's Heating & Cooling | Tampa Bay HVAC
purpose: Who the business is and how it works.
sections:
- `#hero` "A Tampa Bay HVAC team that treats your home like it matters."
- `#story` "Known for quality, built on trust." — business story and pull quote
- `#values` "Three promises on every visit." — Professionalism, Respect, Going beyond
- `#work` "Homes, businesses and everything in between." — Heating & air conditioning, Commercial HVAC, Water heaters, Dryer vent cleaning & minor repairs
- `#area` "Proudly serving the Tampa Bay area."
- `#contact` "Ready when you need us."

## services.html → /services
title: HVAC Services in Tampa Bay | Moulton's Heating & Cooling
purpose: Detail on every service.
sections:
- `#hero` "HVAC services in Tampa Bay, for homes and businesses." — on-page links to each service
- `#offerings` — `#installation`, `#maintenance`, `#repair`, `#air-conditioning` (photo + text rows)
- `#cleaning` "Cleaner air, safer home." — dryer vent cleaning; condenser before/after; insulation removal
- `#water-heaters` "Hot water and the small fixes, handled." — tank & tankless water heaters, minor home repairs
- `#reliable-service` "Dependable HVAC service when you need it." — reliable service during standard hours
- `#faq` "Good to know." — five service questions (also in FAQPage JSON-LD)
- `#contact` "Tell us what your system is doing."

## our-projects.html → /our-projects
title: Our HVAC Projects in Tampa Bay | Moulton's Heating & Cooling
purpose: Gallery of the business's own job photos.
sections:
- `#hero` "Real HVAC work from around Tampa Bay."
- `#gallery` "Every project reflects our commitment to quality." — eleven photos, filters: Installation, Commercial, Repair & maintenance, Cleaning, Water heaters; lightbox dialog
- `#contact` "Have a job like these?"

## contact-us.html → /contact-us
title: Contact Moulton's Heating & Cooling | Tampa Bay HVAC Quote
purpose: Contact details and the quote request form.
sections:
- `#hero` "Get HVAC help in Tampa Bay."
- `#contact` — details panel ("Need HVAC assistance? We're here to help.", with a Text now button) and the quote form `#quote` ("Get a quote or ask a question.")

## 404.html (reserved, noindex)
- `#hero` "This page has gone cold."

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — Business summary, pages, services and contact details for LLMs  [content]
- `site.js` — shared scroll reveal, sticky header shadow, mobile menu close
- `_redirects` — old WordPress placeholder URLs → /
- `robots.txt`, `sitemap.xml`

## shared (every page)
The header (navigation, mobile menu) and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically. The
active nav item comes from `body[data-page]`. The header's primary action is "Book online" (Square, new tab), shown from 1024px with the desktop nav (below that it is in the menu sheet);
"Request a quote" joins it from 1280px.
