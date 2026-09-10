import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductImage } from "@/components/product-image";
import { Reveal } from "@/components/reveal";

export function EditorialSplit() {
  return (
    <section className="mx-auto max-w-[1680px] px-4 py-20 sm:px-6 lg:px-10">
      <div className="grid items-stretch gap-3 sm:gap-4 lg:grid-cols-2">
        {/* Collector series */}
        <Reveal>
          <div className="card-media group relative aspect-[4/5] overflow-hidden bg-bg-subtle">
            <ProductImage
              src="/editorial/collector.jpg"
              alt="The Collector Series"
              label="Editorial — Collector"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <p className="label-sm text-varsity-soft">
                Limited · Numbered
              </p>
              <h3 className="mt-3 font-display text-4xl uppercase text-white lg:text-5xl">
                The Collector Series
              </h3>
              <p className="mt-3 max-w-sm text-sm text-white/80">
                Small-batch pieces in premium fabrics. Once they’re gone, they’re gone.
              </p>
              <Link
                href="/collections/collector"
                className="mt-6 inline-flex w-fit items-center gap-2 bg-white px-6 py-3 label-lg text-obsidian transition-transform hover:scale-[1.02]"
              >
                Explore <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Craft / material story */}
        <Reveal delay={0.1}>
          <div className="card-media group relative aspect-[4/5] overflow-hidden bg-bg-subtle">
            <ProductImage
              src="/editorial/craft.jpg"
              alt="Made to last"
              label="Editorial — Craft"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
              <p className="label-sm text-varsity-soft">
                The Mob Factory standard
              </p>
              <h3 className="mt-3 font-display text-4xl uppercase text-white lg:text-5xl">
                Made to last.
              </h3>
              <p className="mt-3 max-w-sm text-sm text-white/80">
                Responsibly sourced fabrics, considered construction and a lifetime
                of wear built into every stitch.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex w-fit items-center gap-2 border border-white/50 px-6 py-3 label-lg text-white transition-colors hover:bg-white/10"
              >
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
