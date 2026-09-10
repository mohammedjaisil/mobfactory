import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductImage } from "@/components/product-image";
import { formatPrice } from "@/lib/utils";

/**
 * Hero: obsidian stage with two blurred varsity-blue glows behind a framed
 * campaign still. The still carries its own batch badge, spec plate and price
 * tag so the panel reads as a drop announcement, not a banner.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-obsidian text-chalk">
      {/* Ambient factory glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-varsity/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-varsity-bright/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1680px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
        {/* Copy */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="label-xs bg-varsity px-2.5 py-1 text-chalk">
              Mob Apparel / Season 04
            </span>
            <span className="label-xs text-heather/70">Heavy Iron Division</span>
          </div>

          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.92] sm:text-7xl lg:text-8xl">
            Engineered for
            <br />
            <span className="text-varsity-soft">the heavy sets.</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-heather/80">
            Heavyweight luxury gymwear built in the trenches. Built for
            uncompromised compound work with 2×2 ribbed breathability and raw
            streetwear presence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop?sort=new"
              className="label-lg group inline-flex items-center gap-2 bg-chalk px-7 py-3.5 text-obsidian transition-transform hover:scale-[1.02]"
            >
              Shop Drop 04
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about#sizing"
              className="label-lg inline-flex items-center gap-2 border border-white/25 px-7 py-3.5 text-chalk backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Fit Guide
            </Link>
          </div>
        </div>

        {/* Campaign still */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl lg:aspect-[5/4]">
          <ProductImage
            src="/hero.jpg"
            alt="MOB FACTORY Drop 04 campaign — heavyweight ribbed trio"
            label="Campaign Image — /public/hero.jpg"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80" />

          <span className="label-xs absolute left-3 top-3 flex items-center gap-1.5 border border-white/10 bg-obsidian/80 px-2.5 py-1 text-varsity-soft backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-varsity-bright" />
            Live batch drop
          </span>

          <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3">
            <div className="border border-white/10 bg-obsidian/90 px-3 py-2 backdrop-blur-md">
              <p className="label-xs text-chalk">Mob Trio Pack · 2×2 Rib</p>
              <p className="mt-0.5 text-[11px] text-heather/70">
                Olive / Jet Black / Ecru
              </p>
            </div>
            <span className="bg-varsity px-3 py-1.5 font-display text-2xl leading-none text-chalk">
              {formatPrice(2499)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
