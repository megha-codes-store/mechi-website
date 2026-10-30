# Mechi — House of Uniforms website

Static multi-page website for Mechi — House of Uniforms, a premium B2B uniform
manufacturer in Siliguri, West Bengal. Plain HTML + one shared stylesheet; no
build step. Domain: https://mechihouse.com (not live yet).

## Structure

- `index.html` — home (4-slide hero banner slider, sector showcase, trust band, reach path)
- `about.html`, `why-mechi.html`, `what-we-make.html`, `contact.html`
- Sector pages: `healthcare-uniforms.html`, `hospitality-uniforms.html`,
  `corporate-uniforms.html`, `school-uniforms.html` — all share one template
  (hero banner, categories, design showcase, customisation grid, why Mechi, CTA)
- `insights.html` + `blog-choosing-scrub-fabric.html`
- `css/style.css` — all styling; `js/site.js` — mobile menu toggle (loaded on every page)
- `images/` — logo (`logo-header.png` / `logo-white-trim.png` are cropped versions used in header/footer),
  favicon, hero banners (`hero-*.jpg` originals + `hero-*-1200/2400.webp` used via srcset),
  `og-image.jpg` (link-preview card), product photos

Header nav and footer are duplicated in every page: change them in all pages together.
WhatsApp links carry a per-page prefilled message (`?text=`); keep that when adding new links.
The home hero banners have the headline baked into the image; on mobile an HTML caption (`.hb-caption`)
shows it instead.
Canonical links use `https://mechihouse.com/<page>.html`.

## Brand rules (locked — do not change without the founders' approval)

- Tagline: "Carefully crafted. Confidently worn." Positioning: "The Complete Uniform Partner"
- Fonts: Cormorant Garamond (headings), DM Sans (body)
- Colours: Brand Red #B5201B, Deep Golden Bronze #A88040, Deep Black #1A1A1A, Warm Off-White #F7F3EE
- Never set Cormorant Garamond in all caps; never use italic DM Sans
- No ornamental elements; no AI-generated model imagery unless explicitly approved
- Primary CTA is WhatsApp: https://wa.me/917001761444
- Email mechi.uniforms@gmail.com; Instagram mechi_uniforms;
  LinkedIn https://www.linkedin.com/company/108157450/ (public URL only, never the admin URL)

## How to work with the founders (Megha & Sanchit)

- Never invent facts: client names, numbers, products, fabrics, MOQs, lead times and
  testimonials must come from the founders. Ask, don't assume.
- Founders give rough answers; Claude writes polished copy; founders review and approve.
- Work section by section: explain → ask → draft → approve → lock.
- Never name the subcontracting model. Say "manufactured under direct quality control
  using a trusted production partner network".

## Current status (Oct 2026)

- Home stats (founder-confirmed): 500+ organisations, 50,000+ employees outfitted, Pan-India delivery,
  international client in California, USA. ("100% quality-inspected" removed at founders' request.)
- Hero banners appear AI-generated (people); founders have no real photos yet — replacement pending.
- Contact page has an enquiry form that sends via WhatsApp or email (no backend).
- Decision: stay on this hand-coded site (no website builder); founders send changes to Claude.
- Process facts (founder-confirmed, used in the 6-step How It Works on home + hospitality): mockups and
  fabric swatches; site visits case by case; physical samples on request (chargeable, adjusted against the
  confirmed order — do not publish charges); sizing by size chart or staff measurement; quality-checked at
  production (not again before dispatch); no MOQ; 1–4 weeks; packed by department, measured pieces numbered
  with a staff list, standard sizes size-tagged; size exchange only for faults on Mechi's side; alterations
  only for local clients on measured pieces; reorders any size.

- All pages exist and every internal link works.
- Product photos are intentionally hidden: product images were replaced with placeholder
  tiles; only the hero/slider banners show. Photo files remain in `images/` for reuse.
- Working sector by sector to completion. **Next: Hospitality page**, where "complete" means
  real product photos, an accurate product list and details, reviewed/locked copy, and client proof.
- Open questions for Hospitality: roles and garments supplied; fabrics and colours; photos
  available; which clients can be named (ECKO Hotels & Resorts and Royal Heritage Inn are
  clients — confirm before naming); testimonials; hospitality numbers; design/mockup process,
  MOQ, lead time, reorder handling.
- School page copy is a first draft awaiting founder review. The Why Mechi headline
  "India's Most Trusted Complete Uniform Partner" is a strong claim to reconfirm.
- Pending brand decisions: heading font (Cormorant may change), and whether "INSTITUTIONS"
  replaces "EDUCATION" in the sector line.
