import { Layers, Lock, Ruler, ShieldCheck } from "lucide-react";
import { ProductImage } from "@/components/product-image";
import { Reveal } from "@/components/reveal";

const PILLARS = [
  {
    icon: Layers,
    title: "260 GSM Comb-Ring",
    copy: "Heavy structured drape with zero see-through opacity.",
  },
  {
    icon: Lock,
    title: "Zero-Deform Ribbing",
    copy: "Dual-layer ribbed neckline stays tight after 100+ washes.",
  },
  {
    icon: Ruler,
    title: "Ergonomic Drop Cut",
    copy: "Curved bottom hem prevents shirt ride-up on deadlifts.",
  },
  {
    icon: ShieldCheck,
    title: "Double-Stitch Lock",
    copy: "Military-grade seam enforcement on all high-stress zones.",
  },
];

/** The fabric benchmark: campaign still over four hard spec pillars. */
export function SpecSheet() {
  return (
    <section id="spec-sheet" className="bg-obsidian py-16 text-chalk lg:py-24">
      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <ProductImage
                src="/editorial/craft.jpg"
                alt="Athlete conditioning in MOB FACTORY engineered vest"
                label="Editorial — Craft"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
              <div className="absolute inset-x-4 bottom-4">
                <span className="label-xs bg-varsity px-2 py-1 text-chalk">
                  Fabric benchmark
                </span>
                <h2 className="mt-2 font-display text-3xl uppercase leading-none sm:text-4xl">
                  Engineered heavyweight specs
                </h2>
                <p className="mt-1.5 text-[11px] text-heather/80">
                  Tested under maximum bar tension and high sweat conditions.
                  Crafted to never lose silhouette.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-2.5">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-lg border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded bg-varsity/40">
                    <p.icon className="h-4 w-4 text-varsity-soft" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-[13px] font-bold uppercase leading-tight text-chalk">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug text-heather/70">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
