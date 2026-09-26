# DitM — mini brand guide

## Core identity

**Brand:** DitM  
**Direction:** technology / AI / software  
**Logo:** geometric DM monogram + DitM wordmark + blue accent

The selected concept should feel modern, technical, clean and premium without using generic AI clichés such as brains, robots or circuit patterns.

## Colors

| Token | Hex | Use |
|---|---|---|
| DitM Blue | `#2F6BFF` | primary accent, CTA, active states |
| DitM Navy | `#0F172A` | primary text, dark surfaces |
| White | `#FFFFFF` | light surfaces / reversed logo |
| Light Gray | `#F5F7FA` | secondary background |
| Mid Gray | `#94A3B8` | secondary text |
| Dark Gray | `#1E293B` | cards / alternate text |

## Typography

- **Headings:** Manrope
- **Body / UI:** Inter

Fallback: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

## Logo files

- `/public/brand/ditm-logo.svg` — default horizontal logo
- `/public/brand/ditm-logo-light.svg` — for dark backgrounds
- `/public/brand/ditm-mark.svg` — standalone DM icon
- `/public/favicon.svg` — favicon/app mark

## Usage

- Keep generous whitespace around the logo.
- Do not stretch or skew.
- Do not recolor the blue accent arbitrarily.
- Prefer flat color; avoid glow, bevel and heavy shadows.
- Use the full logo at >= 120 px width where possible.
- Use the mark alone for favicon, avatars and compact UI.

## Web direction

- light backgrounds + dark text
- blue only as an accent
- 12–16 px corner radii
- subtle 1 px borders
- restrained shadows
- clear, technical hierarchy
- minimal decorative effects

## Business card

Standard European format: **85 × 55 mm**, landscape.

Contact data:

- Marcin Buczak
- Software Engineer
- marcin.buczakk@gmail.com
- +48 798 380 737

Recommended layout:

**Front:** navy background, DM mark + DitM wordmark.  
**Back:** white/light background, contact details, blue accent and free space for a future QR code.


## Source files in Canva

Editable source designs:

- **Logo exploration:** https://www.canva.com/d/gofNaheGqFD7CPN
  - Selected direction: Concept 2 — DM monogram
- **Business card:** https://www.canva.com/d/6NLAScGhQUmuoG8

## Confirmed reference and correction — 2026-09-26

The approved visual reference is saved unchanged as `selected-logo-reference.png` next to this guide. Canva design `DAHWMJMKMd8`, page 2 (Concept 2 — DM monogram), confirms the same construction. The Canva project was inspected without modifying it.

The previous web SVG reconstruction incorrectly placed a small M inside a closed D. The corrected SVG geometry follows the selected reference: an open D, a wide M extending to the right, and a separate blue right stem. Navbar and footer use a horizontal lockup; favicon uses the same monogram.

These SVGs are a web vector reconstruction from the confirmed reference, not a native vector export from Canva. The original Canva components are raster images. Do not replace the geometry with a different DM symbol or compress M inside D. Keep the full 490 × 190 aspect ratio for horizontal logos and use `width: 100%; height: auto` within the logo container.

The `?v=2` asset URLs invalidate previously cached logos and favicon.
