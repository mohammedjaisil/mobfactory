import type { Metadata } from "next";
import Link from "next/link";
import { ProductImage } from "@/components/product-image";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "MOBFACTORY is a premium menswear label built on considered design, honest fabrics and a lifetime of wear.",
};

const STATS = [
  { value: "2019", label: "Founded" },
  { value: "40+", label: "Fabric mills" },
  { value: "120k", label: "Men dressed" },
  { value: "30-day", label: "Easy returns" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Menswear, redefined."
        description="MOBFACTORY exists for the man who cares how the small things are done — the weight of a fabric, the fall of a hem, the way a jacket wears in over years."
      />

      {/* Image band */}
      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-subtle">
          <ProductImage
            src="/about/studio.jpg"
            alt="Inside the MOBFACTORY studio"
            label="About — /public/about/studio.jpg"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-[1680px] grid-cols-2 gap-px bg-border sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-bg px-4 py-10 text-center">
              <p className="font-display text-4xl font-light">{s.value}</p>
              <p className="eyebrow mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-10">
        {[
          {
            id: "sustainability",
            eyebrow: "Sustainability",
            title: "Made responsibly, made to last.",
            body: "The most sustainable garment is the one you keep. We build pieces that outlast trends — sourcing organic and recycled fibres, working with mills that share our standards, and pricing honestly so quality is never a compromise.",
          },
          {
            id: "sizing",
            eyebrow: "Fit & sizing",
            title: "Honest fits for real bodies.",
            body: "Every fit is developed on real men across a range of builds, not idealised mannequins. Our size guide is detailed and our team is a message away — because the right fit is the difference between a garment you wear and one you love.",
          },
          {
            id: "shipping",
            eyebrow: "Shipping & returns",
            title: "Fast, free and fuss-free.",
            body: "Free express shipping on orders over ₹2,999, delivered in 2–5 business days across India. Not right? Return anything unworn within 30 days — no drama, no restocking fees.",
          },
        ].map((p) => (
          <Reveal key={p.id} className="scroll-mt-24 border-b border-border py-10 first:pt-0">
            <div id={p.id} />
            <p className="eyebrow">{p.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-light sm:text-4xl">{p.title}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fg-muted">{p.body}</p>
          </Reveal>
        ))}

        <div id="contact" className="scroll-mt-24 pt-12 text-center">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-light sm:text-4xl">
            We’re here to help.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-fg-muted">
            Questions about fit, an order, or a Collector piece? Our team replies
            within one business day.
          </p>
          <a
            href="mailto:hello@mobfactory.com"
            className="mt-6 inline-block border border-fg px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-accent hover:text-accent-fg"
          >
            hello@mobfactory.com
          </a>
          <p className="mt-6 text-xs text-fg-faint">
            Prefer to browse?{" "}
            <Link href="/shop" className="underline hover:text-fg">
              Shop the collection
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
