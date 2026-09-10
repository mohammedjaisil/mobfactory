import Link from "next/link";
import { getNewIn } from "@/lib/products";
import { ProductCard } from "@/components/product-card";

export function NewIn() {
  const products = getNewIn(6);

  return (
    <section className="bg-bg py-16 lg:py-20">
      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-10">
        {/* Heading row (H&M style) */}
        <div className="mb-8 flex items-baseline gap-5">
          <h2 className="font-display text-3xl uppercase leading-none sm:text-4xl">Drop 04</h2>
          <Link
            href="/shop?sort=new"
            className="label-sm text-fg-muted underline underline-offset-4 transition-colors hover:text-brand"
          >
            View All
          </Link>
        </div>

        {/* 6 in a row */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 6} />
          ))}
        </div>
      </div>
    </section>
  );
}
