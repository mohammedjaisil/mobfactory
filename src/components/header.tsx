"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useCart, cartCount } from "@/lib/cart-store";
import { CATEGORY_LABELS } from "@/lib/products";
import { cn } from "@/lib/utils";

const NAV: { label: string; href: string }[] = [
  { label: "Drop 04", href: "/shop?sort=new" },
  { label: "T-Shirts", href: "/shop/t-shirts" },
  { label: "Shirts", href: "/shop/shirts" },
  { label: "Outerwear", href: "/shop/outerwear" },
  { label: "Trousers", href: "/shop/trousers" },
  { label: "Collector", href: "/collections/collector" },
  { label: "The Creed", href: "/about" },
];

/** Wordmark: diamond-flanked lockup over the athletic dept. subline. */
function Wordmark() {
  return (
    <Link href="/" className="shrink-0 select-none" aria-label="MOB FACTORY home">
      <span className="flex items-center gap-1.5">
        <span className="diamond h-2 w-2" />
        <span className="font-display text-2xl leading-none sm:text-[28px]">MOB FACTORY</span>
        <span className="diamond h-2 w-2" />
      </span>
      <span className="mt-0.5 block text-center text-[9px] font-extrabold uppercase leading-none tracking-[0.24em] text-fg-muted">
        Athletic Dept · Est. 2026
      </span>
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = useCart((s) => s.items);
  const openCart = useCart((s) => s.open);
  const [count, setCount] = useState(0);

  useEffect(() => setCount(cartCount(items)), [items]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
        {/* Left: logo + inline nav */}
        <div className="flex min-w-0 items-center gap-7">
          <button
            type="button"
            aria-label="Open menu"
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Wordmark />

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="link-underline label-sm text-fg/85 transition-colors hover:text-brand"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/shop"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center text-fg transition-colors hover:text-brand"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href="/about#contact"
            aria-label="Account"
            className="hidden h-9 w-9 items-center justify-center text-fg transition-colors hover:text-brand sm:flex"
          >
            <User className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href="/shop"
            aria-label="Wishlist"
            className="hidden h-9 w-9 items-center justify-center text-fg transition-colors hover:text-brand sm:flex"
          >
            <Heart className="h-[18px] w-[18px]" />
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open bag"
            onClick={openCart}
            className="relative flex h-9 items-center gap-2 px-2 text-fg transition-colors hover:text-brand"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="label-sm hidden sm:inline">Bag / {count}</span>
            {count > 0 && (
              <span className="absolute right-0 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-varsity px-1 text-[0.6rem] font-bold text-chalk sm:hidden">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/50 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[82%] max-w-sm bg-obsidian text-chalk shadow-xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
            <span className="label-lg">Mob Department</span>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col px-5 py-4">
            <Link
              href="/shop"
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 font-display text-xl"
            >
              Shop All Drops
            </Link>
            {Object.entries(CATEGORY_LABELS).map(([slug, label]) => (
              <Link
                key={slug}
                href={`/shop/${slug}`}
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 py-4 font-display text-xl"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/collections/collector"
              onClick={() => setMobileOpen(false)}
              className="border-b border-white/10 py-4 font-display text-xl text-varsity-soft"
            >
              Collector Series
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="py-4 font-display text-xl"
            >
              The Mob Creed
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
