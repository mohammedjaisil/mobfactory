# Images

**The site now ships with real menswear photos already in place.** They come from
[Pexels](https://www.pexels.com/license/) — free to use commercially, no
attribution required. Use them as-is, or replace any file with your own product
photography using the **exact same filename** and it swaps in automatically.

> Note on gymkha.com / H&M: their product photos are those brands' copyrighted
> property and can't be reused on your store, so these free-licensed menswear
> shots stand in until your own shoot is ready.

If a file is ever missing, the site falls back to a clean branded "MF" placeholder,
so the layout never breaks. Use `.jpg` (recommended) or `.webp`.

## Homepage
| File | Used for | Suggested size |
|------|----------|----------------|
| `public/hero.jpg` | Main homepage hero | 2000×1400 |
| `public/categories/tees.jpg` | Category card — T-Shirts | 900×1200 |
| `public/categories/shirts.jpg` | Category card — Shirts | 900×1200 |
| `public/categories/outerwear.jpg` | Category card — Outerwear | 900×1200 |
| `public/categories/trousers.jpg` | Category card — Trousers | 900×1200 |
| `public/editorial/collector.jpg` | Editorial split — left | 1200×1500 |
| `public/editorial/craft.jpg` | Editorial split — right | 1200×1500 |

## Collector Series page
| File | Used for |
|------|----------|
| `public/collections/collector-hero.jpg` | Page hero |

## About page
| File | Used for |
|------|----------|
| `public/about/studio.jpg` | Studio image band (16:9) |

## Products
Each product uses two photos (main + hover). Names come from `src/lib/products.ts`.
Drop them in `public/products/`:

```
tee-black-1.jpg / tee-black-2.jpg
shirt-white-1.jpg / shirt-white-2.jpg
jacket-navy-1.jpg / jacket-navy-2.jpg
trouser-stone-1.jpg / trouser-stone-2.jpg
knit-grey-1.jpg / knit-grey-2.jpg
overshirt-olive-1.jpg / overshirt-olive-2.jpg
tee-graphic-1.jpg / tee-graphic-2.jpg
denim-indigo-1.jpg / denim-indigo-2.jpg
hoodie-sand-1.jpg / hoodie-sand-2.jpg
belt-brown-1.jpg / belt-brown-2.jpg
cap-navy-1.jpg / cap-navy-2.jpg
linen-sky-1.jpg / linen-sky-2.jpg
```

Product photos look best at **900×1200** (3:4 portrait) on a plain background.

> Tip: to add, rename, or reprice products, edit `src/lib/products.ts`.
> The `images` array on each product controls which files it looks for.
