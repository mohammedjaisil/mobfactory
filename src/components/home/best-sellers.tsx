import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getBestSellers, CATEGORY_LABELS } from "@/lib/products";
import { ProductImage } from "@/components/product-image";
import { formatPrice } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function BestSellers() {
  const products = getBestSellers(6);

  return (
    <section className="overflow-hidden bg-bg-subtle py-20 lg:py-24">
      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow text-accent">Most wanted</p>
          <h2 className="mt-3 font-display text-6xl uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
            Best Sellers
          </h2>
          <p className="mt-4 max-w-md text-sm text-fg-muted">
            The pieces men reach for first — restocked, refined and ready to wear.
          </p>
        </Reveal>

        {/* 6-in-a-row grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 6) * 0.05}>
              <Link
                href={`/product/${p.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-bg"
              >
                <div className="card-media absolute inset-0">
                  <ProductImage
                    src={p.images[0]}
                    alt={p.name}
                    label={p.name}
                    priority={i < 6}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/20" />

                {/* Tag pill */}
                <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.12em] text-accent-fg">
                  {p.badge ?? "Best Seller"}
                </span>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                  <div className="min-w-0">
                    <p className="text-[0.55rem] font-medium uppercase tracking-[0.16em] text-white/70">
                      {CATEGORY_LABELS[p.category]}
                    </p>
                    <h3 className="mt-1 truncate font-display text-xl uppercase leading-none text-white">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-white/85">{formatPrice(p.price)}</p>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#0f102c] transition-transform group-hover:scale-105">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Pill CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/shop?sort=new"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-fg transition-transform hover:scale-[1.03]"
          >
            Shop best sellers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
