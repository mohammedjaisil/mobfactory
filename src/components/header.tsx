"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useCart, cartCount } from "@/lib/cart-store";
import { CATEGORY_LABELS } from "@/lib/products";
import { cn } from "@/lib/utils";

const NAV: { label: string; href: string }[] = [
  { label: "New In", href: "/shop?sort=new" },
  { label: "T-Shirts", href: "/shop/t-shirts" },
  { label: "Shirts", href: "/shop/shirts" },
  { label: "Outerwear", href: "/shop/outerwear" },
  { label: "Trousers", href: "/shop/trousers" },
  { label: "Collector", href: "/collections/collector" },
  { label: "About", href: "/about" },
];

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
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
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

          <Link href="/" className="shrink-0 select-none" aria-label="MOBFACTORY home">
            <span className="text-lg font-bold uppercase tracking-[0.14em] sm:text-xl">
              MOB<span className="text-fg-muted">FACTORY</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="link-underline text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-fg/85 transition-colors hover:text-fg"
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
            className="flex h-9 w-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-bg-subtle"
          >
            <Search className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href="/about#contact"
            aria-label="Account"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-bg-subtle sm:flex"
          >
            <User className="h-[18px] w-[18px]" />
          </Link>
          <Link
            href="/shop"
            aria-label="Wishlist"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-bg-subtle sm:flex"
          >
            <Heart className="h-[18px] w-[18px]" />
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open bag"
            onClick={openCart}
            className="relative flex h-9 items-center gap-2 rounded-full px-2 text-fg transition-colors hover:bg-bg-subtle"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            <span className="hidden text-[0.72rem] font-semibold uppercase tracking-[0.1em] sm:inline">
              Bag / {count}
            </span>
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[0.6rem] font-semibold text-accent-fg sm:hidden">
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
            "absolute inset-0 bg-black/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-[82%] max-w-sm bg-bg shadow-xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-border px-5">
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Menu</span>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col px-5 py-4">
            <Link
              href="/shop"
              onClick={() => setMobileOpen(false)}
              className="border-b border-border py-4 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              Shop All
            </Link>
            {Object.entries(CATEGORY_LABELS).map(([slug, label]) => (
              <Link
                key={slug}
                href={`/shop/${slug}`}
                onClick={() => setMobileOpen(false)}
                className="border-b border-border py-4 text-sm font-semibold uppercase tracking-[0.12em]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/collections/collector"
              onClick={() => setMobileOpen(false)}
              className="border-b border-border py-4 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              Collector Series
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="py-4 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
