"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Minus, Plus, ShoppingBag, Check, Truck, RefreshCcw } from "lucide-react";
import type { Product } from "@/lib/products";
import { CATEGORY_LABELS } from "@/lib/products";
import { ProductImage } from "@/components/product-image";
import { useCart } from "@/lib/cart-store";
import { cn, formatPrice } from "@/lib/utils";

export function ProductDetail({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [color, setColor] = useState(product.colors[0].name);
  const [size, setSize] = useState<string | null>(
    product.sizes.length === 1 ? product.sizes[0] : null
  );
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("details");

  const gallery = product.images.length > 1 ? product.images : [product.images[0], product.images[0]];

  const handleAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    add(
      {
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size,
        color,
      },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="mx-auto max-w-[1680px] px-4 pb-24 pt-6 sm:px-6 lg:px-10">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 text-xs text-fg-muted">
        <Link href="/" className="hover:text-fg">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href="/shop" className="hover:text-fg">Shop</Link>
        <ChevronRight className="h-3 w-3" />
        <Link href={`/shop/${product.category}`} className="hover:text-fg">
          {CATEGORY_LABELS[product.category]}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-fg">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          <div className="flex gap-3 sm:flex-col">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative aspect-[3/4] w-16 shrink-0 overflow-hidden border bg-bg-subtle sm:w-20",
                  activeImg === i ? "border-fg" : "border-border"
                )}
              >
                <ProductImage src={img} alt={`${product.name} view ${i + 1}`} label={product.name} sizes="80px" />
              </button>
            ))}
          </div>
          <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-bg-subtle">
            <ProductImage
              src={gallery[activeImg]}
              alt={product.name}
              label={product.name}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-varsity px-3 py-1.5 label-xs text-chalk">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Purchase panel */}
        <div className="lg:sticky lg:top-24 lg:h-fit lg:py-2">
          <p className="label-sm text-brand">{CATEGORY_LABELS[product.category]}</p>
          <h1 className="mt-3 font-display text-4xl uppercase leading-tight sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xl">{formatPrice(product.price)}</span>
            {product.compareAt && (
              <>
                <span className="text-sm text-fg-faint line-through">
                  {formatPrice(product.compareAt)}
                </span>
                <span className="bg-varsity px-2 py-0.5 label-xs text-chalk">
                  Save {formatPrice(product.compareAt - product.price)}
                </span>
              </>
            )}
          </div>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-fg-muted">
            {product.description}
          </p>

          {/* Colors */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.14em]">Colour</p>
              <span className="text-xs text-fg-muted">{color}</span>
            </div>
            <div className="mt-3 flex gap-2.5">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  aria-label={c.name}
                  className={cn(
                    "relative h-9 w-9 rounded-full border transition-all",
                    color === c.name ? "border-fg ring-1 ring-fg ring-offset-2 ring-offset-bg" : "border-border-strong"
                  )}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-7">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-[0.14em]">Size</p>
              <button className="text-xs text-fg-muted underline hover:text-fg">Size guide</button>
            </div>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSize(s);
                    setError(false);
                  }}
                  className={cn(
                    "border py-3 text-xs font-medium transition-colors",
                    size === s
                      ? "border-fg bg-accent text-accent-fg"
                      : "border-border hover:border-fg"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
            {error && (
              <p className="mt-2 text-xs text-red-500">Please select a size.</p>
            )}
          </div>

          {/* Qty + add */}
          <div className="mt-7 flex gap-3">
            <div className="flex items-center border border-border">
              <button
                aria-label="Decrease quantity"
                className="flex h-full w-11 items-center justify-center hover:bg-bg-subtle"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button
                aria-label="Increase quantity"
                className="flex h-full w-11 items-center justify-center hover:bg-bg-subtle"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className="flex flex-1 items-center justify-center gap-2 bg-obsidian py-4 label-lg text-chalk transition-transform hover:scale-[1.01]"
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" /> Added to bag
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4" /> Add to bag — {formatPrice(product.price * qty)}
                </>
              )}
            </button>
          </div>

          {/* Perks */}
          <div className="mt-6 space-y-2 border-t border-border pt-6 text-xs text-fg-muted">
            <p className="flex items-center gap-2">
              <Truck className="h-4 w-4" /> Free express shipping over ₹2,999
            </p>
            <p className="flex items-center gap-2">
              <RefreshCcw className="h-4 w-4" /> 30-day easy returns & exchanges
            </p>
          </div>

          {/* Accordions */}
          <div className="mt-6 border-t border-border">
            {[
              { id: "details", title: "Product details", body: product.details },
              {
                id: "shipping",
                title: "Shipping & returns",
                body: [
                  "Free express shipping on orders over ₹2,999.",
                  "Standard delivery in 2–4 business days.",
                  "Returns accepted within 30 days, unworn with tags.",
                ],
              },
              {
                id: "care",
                title: "Care",
                body: [
                  "Machine wash cold, inside out.",
                  "Do not tumble dry. Reshape and dry flat.",
                  "Warm iron if needed.",
                ],
              },
            ].map((sec) => (
              <div key={sec.id} className="border-b border-border">
                <button
                  onClick={() => setOpenSection((o) => (o === sec.id ? null : sec.id))}
                  className="flex w-full items-center justify-between py-4 text-left text-sm font-medium"
                >
                  {sec.title}
                  <Plus
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openSection === sec.id && "rotate-45"
                    )}
                  />
                </button>
                {openSection === sec.id && (
                  <ul className="space-y-1.5 pb-5 text-sm text-fg-muted">
                    {sec.body.map((line, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-fg-faint">—</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
