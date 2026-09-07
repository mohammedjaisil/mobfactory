import Link from "next/link";
import { PackshotImage } from "@/components/packshot-image";
import { Reveal } from "@/components/reveal";
import { formatPrice } from "@/lib/utils";

/**
 * "The Edit" — garments floating on a clean canvas (H&M packshot style).
 * Uses transparent-PNG cut-outs from /public/packshots. Swap these for your
 * own product cut-outs (same filenames) any time.
 */
const PIECES = [
  { file: "jeans.png", name: "Harbor Relaxed Denim", price: 3499, href: "/product/harbor-relaxed-denim" },
  { file: "denim-jacket.png", name: "Vantage Bomber Jacket", price: 6999, href: "/product/vantage-bomber-jacket" },
  { file: "white-shirt.png", name: "Meridian Oxford Shirt", price: 2499, href: "/product/meridian-oxford-shirt" },
  { file: "denim-folded.png", name: "Cadence Pleated Trouser", price: 2999, href: "/product/cadence-pleated-trouser" },
  { file: "denim-stack.png", name: "Sentinel Overshirt", price: 4299, href: "/product/sentinel-overshirt" },
  { file: "product.png", name: "North Merino Knit", price: 3999, href: "/product/north-merino-knit" },
];

export function PackshotEdit() {
  return (
    <section className="bg-bg py-20 lg:py-24">
      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <p className="eyebrow">Curated for you</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none sm:text-6xl lg:text-7xl">
            The Edit
          </h2>
          <p className="mt-4 max-w-md text-sm text-fg-muted">
            Six pieces, endlessly wearable. The building blocks of a considered wardrobe.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-x-10 md:grid-cols-3">
          {PIECES.map((p, i) => (
            <Reveal key={p.file} delay={(i % 3) * 0.06}>
              <Link href={p.href} className="group block text-center">
                <div className="relative mx-auto aspect-square w-full">
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    <PackshotImage src={`/packshots/${p.file}`} alt={p.name} />
                  </div>
                  {/* soft floor shadow */}
                  <div className="absolute inset-x-[18%] bottom-[8%] h-3 rounded-[50%] bg-black/15 blur-md transition-all duration-500 group-hover:inset-x-[24%] group-hover:opacity-70 dark:bg-black/40" />
                </div>
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-tight">{p.name}</h3>
                <p className="mt-1 text-sm text-fg-muted">{formatPrice(p.price)}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/shop"
            className="rounded-full border border-fg px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-accent hover:text-accent-fg"
          >
            Shop everything
          </Link>
        </div>
      </div>
    </section>
  );
}
