# MOBFACTORY — Premium Menswear Store

A fast, aesthetic e-commerce front-end for **MOBFACTORY** (men's wear only), built
with Next.js 16 (App Router), Tailwind CSS v4 and TypeScript. Editorial, minimal
design inspired by gymkha.com — full-width imagery, generous whitespace, refined
typography — with light & dark modes.

## Brand & design system
- **Primary:** white · **Secondary:** `#0F102C` (deep navy)
- **Light mode:** white canvas, navy ink
- **Dark mode:** deep navy canvas, white ink (toggle in the header — remembers choice)
- **Type:** Cormorant Garamond (display) + Inter (UI)
- All colours are CSS variables in `src/app/globals.css` — change them in one place.

## Run it
```bash
npm run dev     # http://localhost:3000  (development)
npm run build   # production build
npm start       # serve the production build
```

## Add your images
See **`public/IMAGES-GUIDE.md`** for the exact filenames. Drop photos into
`public/` and they appear automatically — until then a branded "MF" placeholder
shows, so the layout never breaks. Upload your gymkha / H&M-style photos there.

## Where things live
| What | File |
|------|------|
| Products (add/edit/reprice) | `src/lib/products.ts` |
| Colours, fonts, theme | `src/app/globals.css` |
| Header / nav | `src/components/header.tsx` |
| Cart (state) | `src/lib/cart-store.ts` |
| Homepage sections | `src/components/home/*` |

## Pages
- `/` — homepage (hero, categories, featured, editorial, brand statement)
- `/shop` — all products with filters & sort
- `/shop/[category]` — t-shirts, shirts, outerwear, trousers, knitwear, accessories
- `/product/[slug]` — gallery, size/colour, add-to-bag, related
- `/collections/collector` — the Collector Series
- `/about` — brand story, sustainability, shipping, contact

## Performance
- Every page is statically prerendered (SSG) — instant loads
- `next/image` with responsive `sizes` + priority on above-the-fold art
- `next/font` self-hosts fonts (no layout shift, no external requests)
- Client JS kept minimal (cart, theme, interactive product controls only)

## Next steps (optional)
- Wire the "Proceed to Checkout" button to Stripe / a payment provider
- Connect products to a CMS or commerce backend (Shopify, Medusa, etc.)
- Replace placeholder copy & the `mobfactory.com` domain in `sitemap.ts` / `robots.ts`
