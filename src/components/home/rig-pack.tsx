import Link from "next/link";
import { Cable, Droplets, Magnet, ShoppingBag, Briefcase } from "lucide-react";
import { ProductImage } from "@/components/product-image";
import { formatPrice } from "@/lib/utils";

const SPECS = [
  { icon: Magnet, label: "Quad neodymium lock" },
  { icon: Droplets, label: "Ballistic water-weave" },
  { icon: Cable, label: "Quick-release carabiners" },
  { icon: Briefcase, label: "Detachable chalk pouch" },
];

/**
 * Tactical hardware spotlight. Editorial for now — there is no rig-pack SKU in
 * the catalogue, so the CTA routes to accessories rather than a product page.
 */
export function RigPack() {
  return (
    <section className="relative overflow-hidden bg-varsity text-chalk">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-varsity-bright/40 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1680px] items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-20">
        <div className="relative aspect-square overflow-hidden rounded-xl border border-white/20 bg-chalk p-2 shadow-xl lg:order-last">
          <div className="relative h-full w-full overflow-hidden rounded-lg">
            <ProductImage
              src="/products/belt-brown-1.jpg"
              alt="MOB FACTORY Modular Gym Rig Pack with industrial magnetic locks"
              label="Modular Rig Pack"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <span className="label-xs text-varsity-soft">Tactical iron hardware</span>
          <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-4xl uppercase leading-none sm:text-5xl">
              Mob Modular Gym Rig Pack
            </h2>
            <span className="bg-obsidian px-2.5 py-1 text-lg font-black text-chalk">
              {formatPrice(1499)}
            </span>
          </div>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-chalk/90">
            Engineered for iron temples. Ultra-strong industrial neodymium
            magnets latch directly onto squat racks and cable towers so your gear
            stays off locker room floors. Complete modular pouch ecosystem.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {SPECS.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded border border-white/10 bg-obsidian/40 p-2.5 backdrop-blur-sm"
              >
                <s.icon className="h-4 w-4 shrink-0 text-varsity-soft" strokeWidth={1.6} />
                <span className="label-xs">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/shop/accessories"
              className="label-lg inline-flex items-center gap-2 bg-chalk px-7 py-3.5 text-varsity shadow-lg transition-transform hover:scale-[1.02]"
            >
              <ShoppingBag className="h-4 w-4" />
              Shop iron gear
            </Link>
            <span className="label-xs text-chalk/70">
              Neodymium N52 core · Cordura 1000D · 18L load rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
