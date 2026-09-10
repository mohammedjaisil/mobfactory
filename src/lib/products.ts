export type Category = "t-shirts" | "shirts" | "outerwear" | "trousers" | "knitwear" | "accessories";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  compareAt?: number;
  /**
   * Primary + hover images. Drop your uploaded photos into
   * /public/products and update these paths. Falls back to a
   * generated placeholder until then.
   */
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  badge?: "New" | "Collector" | "Bestseller" | "Limited";
  description: string;
  details: string[];
  featured?: boolean;
  season?: "Spring" | "Summer" | "Autumn" | "Winter";
}

export const CATEGORY_LABELS: Record<Category, string> = {
  "t-shirts": "T-Shirts",
  shirts: "Shirts",
  outerwear: "Outerwear",
  trousers: "Trousers",
  knitwear: "Knitwear",
  accessories: "Accessories",
};

const SIZES = ["S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  {
    slug: "atlas-heavyweight-tee",
    name: "Atlas Heavyweight Tee",
    category: "t-shirts",
    price: 1499,
    compareAt: 1899,
    images: ["/products/tee-black-1.jpg", "/products/tee-black-2.jpg"],
    colors: [
      { name: "Onyx", hex: "#0f102c" },
      { name: "Bone", hex: "#efece4" },
    ],
    sizes: SIZES,
    badge: "Bestseller",
    featured: true,
    season: "Summer",
    description:
      "A 240gsm heavyweight tee cut from long-staple cotton. Boxy, structured, built to hold its shape wash after wash.",
    details: ["240gsm combed cotton", "Boxy relaxed fit", "Ribbed collar", "Garment dyed", "Made in Portugal"],
  },
  {
    slug: "meridian-oxford-shirt",
    name: "Meridian Oxford Shirt",
    category: "shirts",
    price: 2499,
    images: ["/products/shirt-white-1.jpg", "/products/shirt-white-2.jpg"],
    colors: [
      { name: "Chalk", hex: "#f4f2ec" },
      { name: "Midnight", hex: "#0f102c" },
    ],
    sizes: SIZES,
    badge: "New",
    featured: true,
    season: "Spring",
    description:
      "The everyday oxford, refined. Mother-of-pearl buttons, a clean spread collar and a tailored-but-easy silhouette.",
    details: ["Japanese oxford cotton", "Regular fit", "Mother-of-pearl buttons", "Single chest pocket"],
  },
  {
    slug: "vantage-bomber-jacket",
    name: "Vantage Bomber Jacket",
    category: "outerwear",
    price: 6999,
    compareAt: 8499,
    images: ["/products/jacket-navy-1.jpg", "/products/jacket-navy-2.jpg"],
    colors: [
      { name: "Deep Navy", hex: "#0f102c" },
      { name: "Slate", hex: "#3a3d4d" },
    ],
    sizes: SIZES,
    badge: "Collector",
    featured: true,
    season: "Autumn",
    description:
      "A water-repellent technical bomber with a matte finish and satin lining. The centrepiece of the Collector Series.",
    details: ["Water-repellent shell", "Satin lining", "Ribbed cuffs & hem", "YKK hardware", "Limited run"],
  },
  {
    slug: "cadence-pleated-trouser",
    name: "Cadence Pleated Trouser",
    category: "trousers",
    price: 2999,
    images: ["/products/trouser-stone-1.jpg", "/products/trouser-stone-2.jpg"],
    colors: [
      { name: "Stone", hex: "#c9c2b2" },
      { name: "Charcoal", hex: "#2b2b30" },
    ],
    sizes: SIZES,
    badge: "New",
    featured: true,
    season: "Spring",
    description:
      "A single-pleat trouser with a relaxed taper. Drapes clean, moves easy — dress it up or keep it street.",
    details: ["Wool-blend twill", "Single pleat", "Relaxed taper", "Zip fly", "Unfinished hem"],
  },
  {
    slug: "north-merino-knit",
    name: "North Merino Knit",
    category: "knitwear",
    price: 3999,
    images: ["/products/knit-grey-1.jpg", "/products/knit-grey-2.jpg"],
    colors: [
      { name: "Fog", hex: "#b8b8ba" },
      { name: "Onyx", hex: "#0f102c" },
    ],
    sizes: SIZES,
    badge: "Bestseller",
    featured: true,
    season: "Winter",
    description:
      "A fine-gauge merino crewneck that layers effortlessly. Temperature-regulating and impossibly soft.",
    details: ["100% extra-fine merino", "Fine gauge", "Ribbed trims", "Machine washable"],
  },
  {
    slug: "sentinel-overshirt",
    name: "Sentinel Overshirt",
    category: "outerwear",
    price: 4299,
    images: ["/products/overshirt-olive-1.jpg", "/products/overshirt-olive-2.jpg"],
    colors: [
      { name: "Olive", hex: "#4a4b32" },
      { name: "Midnight", hex: "#0f102c" },
    ],
    sizes: SIZES,
    badge: "New",
    season: "Autumn",
    description:
      "The overshirt that does it all — a shacket cut from brushed cotton twill with a boxy, layerable fit.",
    details: ["Brushed cotton twill", "Boxy fit", "Twin chest pockets", "Corozo buttons"],
  },
  {
    slug: "orbit-graphic-tee",
    name: "Orbit Graphic Tee",
    category: "t-shirts",
    price: 1699,
    images: ["/products/tee-graphic-1.jpg", "/products/tee-graphic-2.jpg"],
    colors: [
      { name: "Bone", hex: "#efece4" },
      { name: "Onyx", hex: "#0f102c" },
    ],
    sizes: SIZES,
    badge: "Limited",
    season: "Summer",
    description:
      "A screen-printed statement tee from the Collector Series. Heavyweight, oversized, unmistakably MOB FACTORY.",
    details: ["220gsm cotton", "Oversized fit", "Hand screen-printed", "Limited to 300 pieces"],
  },
  {
    slug: "harbor-relaxed-denim",
    name: "Harbor Relaxed Denim",
    category: "trousers",
    price: 3499,
    images: ["/products/denim-indigo-1.jpg", "/products/denim-indigo-2.jpg"],
    colors: [
      { name: "Raw Indigo", hex: "#26324a" },
      { name: "Washed Black", hex: "#1c1c1f" },
    ],
    sizes: SIZES,
    badge: "Bestseller",
    season: "Winter",
    description:
      "A relaxed straight-leg denim in 13.5oz Japanese selvedge. Ages beautifully with wear.",
    details: ["13.5oz Japanese selvedge", "Relaxed straight", "Button fly", "Chain-stitched hem"],
  },
  {
    slug: "echo-hooded-sweat",
    name: "Echo Hooded Sweat",
    category: "knitwear",
    price: 2299,
    images: ["/products/hoodie-sand-1.jpg", "/products/hoodie-sand-2.jpg"],
    colors: [
      { name: "Sand", hex: "#d8ccb4" },
      { name: "Onyx", hex: "#0f102c" },
    ],
    sizes: SIZES,
    season: "Autumn",
    description:
      "A heavyweight loopback hoodie with a double-layer hood and a fit that sits just right.",
    details: ["380gsm loopback cotton", "Double-layer hood", "Kangaroo pocket", "Ribbed cuffs"],
  },
  {
    slug: "compass-leather-belt",
    name: "Compass Leather Belt",
    category: "accessories",
    price: 1299,
    images: ["/products/belt-brown-1.jpg", "/products/belt-brown-2.jpg"],
    colors: [{ name: "Cognac", hex: "#7a4a2b" }, { name: "Black", hex: "#141414" }],
    sizes: ["S", "M", "L"],
    season: "Spring",
    description: "Full-grain Italian leather with a matte gunmetal buckle. A quiet, essential finishing piece.",
    details: ["Full-grain Italian leather", "Matte gunmetal buckle", "35mm width", "Hand-finished edges"],
  },
  {
    slug: "drift-cotton-cap",
    name: "Drift Cotton Cap",
    category: "accessories",
    price: 899,
    images: ["/products/cap-navy-1.jpg", "/products/cap-navy-2.jpg"],
    colors: [{ name: "Navy", hex: "#0f102c" }, { name: "Bone", hex: "#efece4" }],
    sizes: ["One Size"],
    badge: "New",
    season: "Summer",
    description: "A washed 6-panel cap with a low crown and a tonal embroidered mark.",
    details: ["Washed cotton twill", "Low crown", "Adjustable strap", "Tonal embroidery"],
  },
  {
    slug: "pioneer-linen-shirt",
    name: "Pioneer Linen Shirt",
    category: "shirts",
    price: 2699,
    images: ["/products/linen-sky-1.jpg", "/products/linen-sky-2.jpg"],
    colors: [{ name: "Sky", hex: "#b8c6d0" }, { name: "Chalk", hex: "#f4f2ec" }],
    sizes: SIZES,
    badge: "New",
    season: "Summer",
    description: "A breathable European linen shirt with a camp collar — made for warm evenings.",
    details: ["100% European linen", "Camp collar", "Relaxed fit", "Coconut buttons"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getByCategory(category: Category) {
  return products.filter((p) => p.category === category);
}

export function getFeatured() {
  return products.filter((p) => p.featured);
}

export function getNewIn(limit = 6) {
  const ranked = [
    ...products.filter((p) => p.badge === "New"),
    ...products.filter((p) => p.badge === "Limited"),
    ...products.filter((p) => !p.badge),
    ...products,
  ];
  const seen = new Set<string>();
  return ranked.filter((p) => (seen.has(p.slug) ? false : seen.add(p.slug))).slice(0, limit);
}

export function getBestSellers(limit = 6) {
  const ranked = [
    ...products.filter((p) => p.badge === "Bestseller"),
    ...products.filter((p) => p.badge === "Collector" || p.badge === "Limited"),
    ...products.filter((p) => p.featured),
  ];
  const seen = new Set<string>();
  const unique = ranked.filter((p) => (seen.has(p.slug) ? false : seen.add(p.slug)));
  return unique.slice(0, limit);
}

export function getRelated(slug: string, limit = 4) {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .concat(products.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, limit);
}
