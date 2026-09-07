import Link from "next/link";
import { getFeatured, products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export function FeaturedCollection() {
  const base = getFeatured();
  const featured = [...base, ...products.filter((p) => !base.includes(p))].slice(0, 6);

  return (
    <section className="border-y border-border bg-bg-subtle">
      <div className="mx-auto max-w-[1680px] px-4 py-20 sm:px-6 lg:px-10">
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">New this season</p>
            <h2 className="mt-3 font-display text-4xl font-light sm:text-5xl">
              The essentials edit.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-fg-muted">
            Our most-wanted pieces, restocked and ready. Considered fabrics, honest
            fits, made to last.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/shop"
            className="border border-fg px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-accent hover:text-accent-fg"
          >
            Shop all menswear
          </Link>
        </div>
      </div>
    </section>
  );
}
