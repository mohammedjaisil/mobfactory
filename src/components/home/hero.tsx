import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductImage } from "@/components/product-image";

export function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      {/* Background image (drop /public/hero.jpg to replace) */}
      <div className="absolute inset-0">
        <ProductImage
          src="/hero.jpg"
          alt="MOBFACTORY autumn campaign"
          label="Campaign Image — /public/hero.jpg"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1680px] flex-col justify-end px-4 pb-16 sm:px-6 lg:px-10 lg:pb-24">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/80">
          Autumn / Winter — Collector Series
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-light leading-[0.95] text-white sm:text-6xl lg:text-8xl">
          Wear the
          <br />
          statement.
        </h1>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">
          Premium menswear engineered for the modern man. Elevated essentials,
          limited drops, built to outlast the season.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 bg-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0f102c] transition-transform hover:scale-[1.02]"
          >
            Shop the collection
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/collections/collector"
            className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Collector Series
          </Link>
        </div>
      </div>
    </section>
  );
}
