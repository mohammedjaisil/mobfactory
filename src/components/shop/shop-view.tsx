"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, SlidersHorizontal } from "lucide-react";
import type { Category, Product } from "@/lib/products";
import { CATEGORY_LABELS } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "new" | "price-asc" | "price-desc";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "new", label: "Newest" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
];

const CATEGORY_ORDER: Category[] = [
  "t-shirts",
  "shirts",
  "outerwear",
  "trousers",
  "knitwear",
  "accessories",
];

export function ShopView({
  products,
  activeCategory,
  initialSort = "featured",
}: {
  products: Product[];
  activeCategory?: Category;
  initialSort?: SortKey;
}) {
  const [sort, setSort] = useState<SortKey>(initialSort);
  const [sizes, setSizes] = useState<string[]>([]);
  const [onSale, setOnSale] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const allSizes = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.sizes))).sort(),
    [products]
  );

  const filtered = useMemo(() => {
    let list = [...products];
    if (sizes.length) list = list.filter((p) => p.sizes.some((s) => sizes.includes(s)));
    if (onSale) list = list.filter((p) => p.compareAt);
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "new":
        list.sort((a, b) => (a.badge === "New" ? -1 : 1) - (b.badge === "New" ? -1 : 1));
        break;
      default:
        list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }
    return list;
  }, [products, sizes, onSale, sort]);

  const toggleSize = (s: string) =>
    setSizes((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  return (
    <div className="mx-auto max-w-[1680px] px-4 pb-24 sm:px-6 lg:px-10">
      {/* Category pills */}
      <div className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4">
        <Link
          href="/shop"
          className={cn(
            "shrink-0 border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors",
            !activeCategory
              ? "border-fg bg-accent text-accent-fg"
              : "border-border hover:border-fg"
          )}
        >
          All
        </Link>
        {CATEGORY_ORDER.map((c) => (
          <Link
            key={c}
            href={`/shop/${c}`}
            className={cn(
              "shrink-0 border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors",
              activeCategory === c
                ? "border-fg bg-accent text-accent-fg"
                : "border-border hover:border-fg"
            )}
          >
            {CATEGORY_LABELS[c]}
          </Link>
        ))}
      </div>

      {/* Toolbar */}
      <div className="mb-8 flex items-center justify-between gap-4 border-y border-border py-3">
        <button
          onClick={() => setFiltersOpen((o) => !o)}
          className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </button>
        <p className="hidden text-xs text-fg-muted sm:block">
          {filtered.length} {filtered.length === 1 ? "item" : "items"}
        </p>
        <label className="flex items-center gap-2 text-xs">
          <span className="hidden uppercase tracking-[0.12em] text-fg-muted sm:inline">Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="cursor-pointer border border-border bg-bg px-3 py-2 text-xs outline-none focus:border-fg"
          >
            {SORTS.map((s) => (
              <option key={s.key} value={s.key}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Filter panel */}
      {filtersOpen && (
        <div className="mb-8 flex flex-wrap items-center gap-x-8 gap-y-4 border border-border bg-bg-subtle p-5">
          <div>
            <p className="label-sm mb-2 text-fg-muted">Size</p>
            <div className="flex flex-wrap gap-2">
              {allSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSize(s)}
                  className={cn(
                    "min-w-9 border px-2.5 py-1.5 text-xs font-medium transition-colors",
                    sizes.includes(s)
                      ? "border-fg bg-accent text-accent-fg"
                      : "border-border hover:border-fg"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="label-sm mb-2 text-fg-muted">Offers</p>
            <button
              onClick={() => setOnSale((v) => !v)}
              className="flex items-center gap-2 text-xs"
            >
              <span
                className={cn(
                  "flex h-4 w-4 items-center justify-center border",
                  onSale ? "border-fg bg-accent text-accent-fg" : "border-border"
                )}
              >
                {onSale && <Check className="h-3 w-3" />}
              </span>
              On sale only
            </button>
          </div>
          {(sizes.length > 0 || onSale) && (
            <button
              onClick={() => {
                setSizes([]);
                setOnSale(false);
              }}
              className="ml-auto text-xs font-medium uppercase tracking-[0.12em] text-fg-muted underline hover:text-fg"
            >
              Clear all
            </button>
          )}
        </div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="py-24 text-center text-sm text-fg-muted">
          No products match your filters.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {filtered.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} />
          ))}
        </div>
      )}
    </div>
  );
}
