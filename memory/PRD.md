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
- 2026-07-31: Google Translate expanded to 35 major languages. 3D layer: WebGL particle hero field, cursor glow, magnetic CTA, 3D tilt cards, custom gold cursor, per-character split-text headings (dnbagro.com-style), floating leaf motifs. Footer QRs clickable. Real cert logos (APEDA/FSSAI/ISO/MSME) placed; fake stats removed, replaced with real credentials strip.
- 2026-08-03 (client revision): New green logo integrated (mark cropped from supplied logo.jpg) as horizontal lockup in header + footer; permanent white nav bar (scrolled style is now default); icon-only language switcher; larger nav font; tagline removed from hero; all italics removed sitewide; hero overline in high-contrast pill; hero bg upgraded to golden wheat field; body text darkened (#334155); bigger About/WhyChoose headings; decorative numbers removed; leaves all green; marquee separators use logo mark (seamless 2x loop); Mission/Vision updated; HQ badge removed; new Why Organic green-band section; Key Features block (4 items) in Why Choose Us; scalable PRODUCT_CATEGORIES data structure + Products nav dropdown (desktop + mobile); chilli card shows chilli-only cropped image; dedicated product pages at /products/:slug with spec tables (Coming soon) + routing; Countries We Serve flags row (flagcdn); Google Map embed pinned to 18.6681738,73.7976322; full address updated; WhatsApp FAB moved bottom-left; footer socials linked (FB profile + IG), LinkedIn removed; client-supplied QR images replaced (whatsapp/instagram/facebook).

- 2026-08-03 (client revision 2): Logo lockup redone Baker Hughes-style — mark + "AVP nexaa" wordmark with "Collaborate. Connect. Grow." tagline visible beneath in green (header) / gold (footer). Language selector rebuilt as a labeled pill — shows active language name (read from googtrans cookie) + globe icon, invisible overlay gadget keeps native menu working (verified menu opens with all 35 languages).

- 2026-08-03 (link preview): Branded 1200×630 OG share image composed from hero art + logo (public/assets/og-image.jpg); Open Graph + Twitter Card meta tags wired in index.html using %REACT_APP_BACKEND_URL% so the image URL is absolute. Verified tags served and image returns 200.

- 2026-08-03 (hero swap): Hero background replaced with client-supplied spice flat-lay (hero-spices.jpg, optimized 591KB), overlay retuned for the darker image.

- 2026-08-03 (ticker fix): Editorial marquee re-engineered from CSS keyframes to a JS rAF loop (45px/s, seamless wrap at half-width, hover pause) — the CSS version was frozen on devices with reduce-motion enabled. Verified moving in normal AND reduced-motion emulation.

- 2026-08-03 (share card v2 + dash cleanup): OG image regenerated on the spice hero photo; decorative dash lines removed from hero pill and all Chapter section labels.

## Backlog
- P0: Wire enquiry form to email service (Resend) + persist enquiries in MongoDB
- P0: Fill product spec tables with real data (moisture %, mesh size, packaging, MOQ, shelf life)
- P1: Swap remaining placeholders — final product photography, IEC/GST badge files, testimonials
- P1: More product categories (data structure ready — add to PRODUCT_CATEGORIES in src/data/content.js)
- P2: Testimonials section, blog/insights, OG share image, schema.org structured data
- P2: Analytics events on CTAs, downloadable product catalog PDF

## Next Tasks
1. Connect form to Resend + save enquiries to Mongo (needs no key — managed integration)
2. Build product spec detail views once client supplies data
3. Replace stock imagery with client's real product/farm photos
