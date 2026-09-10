import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { ProductImage } from "@/components/product-image";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "The Collector Series",
  description:
    "Small-batch, numbered menswear in premium fabrics. Limited drops from MOB FACTORY — once they’re gone, they’re gone.",
};

export default function CollectorPage() {
  const collector = products.filter(
    (p) => p.badge === "Collector" || p.badge === "Limited"
  );
  const rest = products.filter((p) => !collector.includes(p)).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[460px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <ProductImage
            src="/collections/collector-hero.jpg"
            alt="The Collector Series"
            label="Collector Hero — /public/collections/collector-hero.jpg"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40" />
        </div>
        <div className="relative z-10 mx-auto flex h-full max-w-[1680px] flex-col justify-end px-4 pb-14 sm:px-6 lg:px-10">
          <p className="label-sm text-varsity-soft">
            Limited · Numbered · Never restocked
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl uppercase leading-none text-white sm:text-7xl">
            The Collector Series
          </h1>
          <p className="mt-4 max-w-lg text-sm text-white/80">
            Our most considered work. Small runs in the finest fabrics we can
            source, made for those who notice the details.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-[1680px] px-4 py-16 sm:px-6 lg:px-10">
        <Reveal className="mb-10">
          <p className="label-sm text-brand">The current batch</p>
          <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">In the series now</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
          {(collector.length ? collector : rest).map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 4} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian text-chalk">
        <div className="mx-auto flex max-w-[1680px] flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <h3 className="font-display text-3xl uppercase sm:text-4xl">
              Be first to the next drop.
            </h3>
            <p className="mt-2 max-w-md text-sm text-heather/70">
              Series pieces sell out in hours. Members get early access.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-chalk px-8 py-4 label-lg text-obsidian transition-transform hover:scale-[1.02]"
          >
            Shop everything <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
