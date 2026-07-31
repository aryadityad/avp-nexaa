# AVP Nexaa — B2B Export Website PRD

## Original Problem Statement
Build a premium, corporate B2B export website for AVP Nexaa, an Indian exporter of organic dehydrated agricultural products, spices, and herbs. Tagline: "Collaborate. Connect. Grow." Trustworthy, global, export-grade feel (B2B-exporter page flow similar to pisumfoods.com, distinct visual identity). Agri-green + gold palette, serif headings (Playfair Display), sans body (Outfit), award-worthy motion (Framer Motion + Lenis), Google Translate widget (en, ar, fr, es, zh-CN), WhatsApp FAB, footer QR "Scan & Connect" strip, placeholder enquiry form (mailto), single-page smooth-scroll structure.

## Architecture
- Frontend: React 19 (CRA/craco), Tailwind CSS, framer-motion, lenis, lucide-react, sonner — single-page app at `/`
- Backend: FastAPI template (untouched — no backend features required yet; form uses mailto placeholder)
- DB: MongoDB (available, unused so far)
- Client assets: `/app/frontend/public/assets/` — logo.png (real AVP logo), qr-1.png (labeled Instagram), qr-whatsapp.png (WhatsApp QR, verified glyph), qr-2.png (labeled Facebook)
- Sections (src/components): Header, Hero, Marquee, About, WhyChoose, Products, Certifications, GlobalReach, Contact, Footer, WhatsAppFloat + Reveal/Counter/GoogleTranslate helpers, data in src/data/content.js

## User Personas
- International B2B buyers / importers researching Indian agri suppliers (EN/AR/FR/ES/ZH)
- Distributors & wholesalers requesting quotes and specs
- The client (AVP Nexaa team) swapping in real assets (logo, product photos, certificates, QR codes)

## Core Requirements (static)
- Sticky glass header with shrink-on-scroll, click-to-call phone, Google Translate switcher
- Kinetic hero: masked line reveal, Ken Burns bg, scroll parallax, tagline + Get a Quote CTA
- About with Mission/Vision cards; Why Choose Us 6-card grid; 4 product cards (Moringa, Turmeric, Amla, Chilli) with "specs coming soon" placeholders
- Certifications placeholder row (FSSAI, APEDA, IEC, GST, MSME, ISO)
- Global Reach / Why India with parallax cargo imagery + animated counters
- Contact enquiry form (mailto placeholder) + details + Google Map embed of Pune office
- Footer with quick links, products, socials, copyright, QR "Scan & Connect" strip
- WhatsApp FAB (wa.me/919112374325), smooth scroll, prefers-reduced-motion respected, semantic SEO structure

## Implemented
- 2026-07-31: Full single-page site live — all sections above, Lenis momentum scroll, scroll reveals, counters, editorial marquee, Google Translate widget (dropdown verified rendering 5 languages), mobile menu, map embed, QR strip, form prefills mailto to info@avpnexaa.com. Logo/QR asset mapping corrected after upload.
- 2026-07-31: Google Translate expanded to 35 major languages (IN, EU, Middle East, East & SE Asia, Africa). 3D layer added: WebGL golden/green particle field in hero reacting to mouse (react-three-fiber), cursor-follow gold glow, magnetic hero CTA, 3D tilt on product + Why Choose Us cards (all disabled under prefers-reduced-motion / no WebGL). Footer QR codes are now clickable links (WhatsApp → wa.me/919112374325; Instagram/Facebook → placeholder handles instagram.com/avpnexaa, facebook.com/avpnexaa — client to supply real profile URLs).

## Backlog
- P0: Wire enquiry form to email service (Resend) + persist enquiries in MongoDB
- P0: Product detail pages/sections with real specs (moisture %, mesh size, packaging, MOQ)
- P1: Swap placeholders — final product photography, certification badge files, testimonials, real Instagram/Facebook profile URLs for QR links
- P1: Verify QR code labels (two plain QRs labeled Instagram/Facebook by upload order — client to confirm)
- P2: Testimonials section, blog/insights, multi-page routing with page transitions
- P2: Analytics events on CTAs, downloadable product catalog PDF
- P2: OG share image, schema.org Organization + Product structured data, sitemap

## Next Tasks
1. Connect form to Resend + save enquiries to Mongo (needs no key — managed integration)
2. Build product spec detail views once client supplies data
3. Replace stock imagery with client's real product/farm photos
