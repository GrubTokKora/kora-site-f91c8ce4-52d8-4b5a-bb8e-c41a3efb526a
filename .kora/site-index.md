# Site index · format 2
Structure and the names of what each page offers. Values that change often — prices, hours, phone,
address — and body copy are deliberately not recorded here; read the page itself for those.

## index.html → /
title: Moulton's Heating & Cooling – HVAC across Tampa Bay
purpose: Home page for Moulton's Heating & Cooling, showcasing HVAC services, emergency support, and service areas across Tampa Bay.
sections:
- `#hero` — hero introduction
- `#offerings` "Services" — service offerings: Installation, Maintenance, Repair, Cleaning, Air Conditioning, 24/7 Support
- `#story` "From the moment we step into your home." — business story and extended services: Water heater service, Dryer vent cleaning, Minor home repairs
- `#contact` "Call first. We'll take it from there." — contact details and service area: Tampa Bay, Florida, 33601 United States
- `#cta` — call to action bar
also: The business telephone number appears in the LocalBusiness schema block and the visible contact section.

## contact-us.html → /contact-us
title: Contact Moulton's Heating & Cooling | Tampa Bay HVAC
purpose: Provide contact details and an enquiry form for Moulton's Heating & Cooling in Tampa Bay.
sections:
- `#hero` "Get HVAC help in Tampa Bay" — Page introduction and emergency callout: Tampa Bay
- `#contact` "Call first, email second." — Direct contact details and service offerings overview: Tampa Bay, Heating, ventilation and air conditioning installation, maintenance and repair, dryer vent cleaning, water heater service, minor home repairs
- `#contact-title` "Book a visit or ask a question" — Enquiry form
- `#cta` — Call to action

## support files
Files that are not pages. A line marked [content] holds words or data a visitor reads, so a
change to the site's content can land there; the rest only make the site work or look right.
- `llms.txt` — Business contact information and service area details for LLMs: Moulton's Heating & Cooling, Tampa Bay, Florida  [content]
- `robots.txt` — 45 bytes — too small to hold content
- `sitemap.xml` — 160 bytes — too small to hold content

## shared (every page)
The header, navigation, mobile menu and footer are propagated from index.html to every other page by
`shell_propagation`. A change to any of them is made on index.html alone and copied automatically.
