"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Check } from "lucide-react";
import type { Product } from "@/lib/products";
import { CATEGORY_LABELS } from "@/lib/products";
import { ProductImage } from "./product-image";
import { useCart } from "@/lib/cart-store";
import { cn, formatPrice } from "@/lib/utils";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const add = useCart((s) => s.add);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [wished, setWished] = useState(false);
  const [addedSize, setAddedSize] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // At least 2 frames so the gallery has something to slide through.
  const images = product.images.length > 1 ? product.images : [product.images[0], product.images[0]];
  const count = images.length;

  const discount = product.compareAt
    ? Math.round((1 - product.price / product.compareAt) * 100)
    : 0;

  // Auto-advance the gallery while hovering (story-style).
  useEffect(() => {
    if (hovering && count > 1) {
      timer.current = setInterval(() => setActive((i) => (i + 1) % count), 1100);
    }
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [hovering, count]);

  const stop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const go = (e: React.MouseEvent, dir: 1 | -1) => {
    stop(e);
    setActive((i) => (i + dir + count) % count);
  };
  const quickAdd = (e: React.MouseEvent, size: string) => {
    stop(e);
    add({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      color: product.colors[0].name,
    });
    setAddedSize(size);
    setTimeout(() => setAddedSize(null), 1200);
  };

  return (
    <div className="group">
      {/* Media */}
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-lg bg-bg-subtle"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          setActive(0);
        }}
      >
        {/* Slides */}
        {images.map((src, i) => (
          <div
            key={i}
            className={cn(
              "card-media absolute inset-0 transition-opacity duration-500",
              i === active ? "opacity-100" : "opacity-0"
            )}
          >
            <ProductImage
              src={src}
              alt={`${product.name} view ${i + 1}`}
              label={product.name}
              priority={priority && i === 0}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        ))}

        {/* Click-through to product (below controls) */}
        <Link href={`/product/${product.slug}`} className="absolute inset-0 z-10" aria-label={product.name} />

        {/* Progress segments (hover) */}
        {count > 1 && (
          <div className="pointer-events-none absolute inset-x-3 top-3 z-20 flex gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {images.map((_, i) => (
              <span key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/40">
                <span
                  className={cn(
                    "block h-full rounded-full bg-white transition-all duration-300",
                    i < active ? "w-full" : i === active ? "w-full" : "w-0"
                  )}
                />
              </span>
            ))}
          </div>
        )}

        {/* Wishlist */}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={(e) => {
            stop(e);
            setWished((w) => !w);
          }}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-bg/90 text-fg backdrop-blur transition-transform hover:scale-105"
        >
          <Heart className={cn("h-4 w-4", wished && "fill-current text-red-500")} />
        </button>

        {/* Arrows (hover) */}
        {count > 1 && (
          <>
            <button
              aria-label="Previous image"
              onClick={(e) => go(e, -1)}
              className="absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-fg opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => go(e, 1)}
              className="absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-fg opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Discount badge */}
        {discount > 0 && (
          <span className="absolute bottom-3 left-3 z-20 bg-varsity px-3 py-1 label-xs text-chalk">
            {discount}% Off
          </span>
        )}

        {/* Select-size panel (slides up on hover) */}
        <div className="absolute inset-x-0 bottom-0 z-30 translate-y-full bg-bg/95 p-4 backdrop-blur transition-transform duration-300 ease-out group-hover:translate-y-0">
          <p className="mb-2.5 text-center label-xs text-fg-muted">
            Select Size
          </p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => quickAdd(e, size)}
                className={cn(
                  "flex h-8 min-w-8 items-center justify-center border px-2 text-xs font-bold transition-colors",
                  addedSize === size
                    ? "border-varsity bg-varsity text-chalk"
                    : "border-border hover:border-obsidian hover:bg-obsidian hover:text-chalk"
                )}
              >
                {addedSize === size ? <Check className="h-3.5 w-3.5" /> : size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-[13px] font-bold uppercase leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-fg-muted">{CATEGORY_LABELS[product.category]}</p>
        <p className="text-xs text-fg-muted">{product.colors[0].name}</p>
        <div className="flex items-center gap-1.5 pt-0.5">
          {product.colors.map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="h-3.5 w-3.5 rounded-full border border-border-strong"
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
          {product.compareAt && (
            <span className="text-xs text-red-500 line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
