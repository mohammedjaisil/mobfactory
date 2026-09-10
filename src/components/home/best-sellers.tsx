import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBestSellers } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export function BestSellers() {
  const products = getBestSellers(6);

  return (
    <section className="overflow-hidden bg-bg-subtle py-20 lg:py-24">
      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <Reveal className="flex flex-col items-center text-center">
          <p className="label-sm text-brand">Heavy rotation</p>
          <h2 className="mt-3 font-display text-6xl uppercase leading-[0.9] sm:text-7xl lg:text-8xl">
            Best Sellers
          </h2>
          <p className="mt-4 max-w-md text-sm text-fg-muted">
            The pieces the mob reaches for first — restocked, refined, ready to train.
          </p>
        </Reveal>

        {/* Same card + grid as the repertoire edit */}
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 6) * 0.05}>
              <ProductCard product={p} priority={i < 6} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/shop?sort=new"
            className="label-lg inline-flex items-center gap-2 bg-obsidian px-8 py-3.5 text-chalk transition-transform hover:scale-[1.03]"
          >
            Shop best sellers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
