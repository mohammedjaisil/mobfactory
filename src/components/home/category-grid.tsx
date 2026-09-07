"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProductImage } from "@/components/product-image";

/**
 * Scroll-driven "zoom-out reveal": the centre tile starts large and, as the
 * section scrolls, settles into a clean, equal 6-tile grid — every tile the
 * same at the end (no card stays focused). GPU-only transforms (scale/opacity)
 * keep it smooth; on mobile / reduced-motion it renders as a plain grid.
 */
const CATEGORIES = [
  { slug: "t-shirts", label: "T-Shirts", img: "/categories/tees.jpg" },
  { slug: "shirts", label: "Shirts", img: "/categories/shirts.jpg" },
  { slug: "trousers", label: "Trousers", img: "/categories/trousers.jpg" },
  { slug: "knitwear", label: "Knitwear", img: "/products/knit-grey-1.jpg" },
  { slug: "outerwear", label: "Outerwear", img: "/categories/outerwear.jpg" }, // featured
  { slug: "accessories", label: "Accessories", img: "/products/belt-brown-1.jpg" },
];

const FEATURED = 4;

function Tile({
  c,
  priority,
  sizes,
}: {
  c: (typeof CATEGORIES)[number];
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Link
      href={`/shop/${c.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-xl bg-[#0f102c]"
    >
      <ProductImage src={c.img} alt={c.label} label={c.label} priority={priority} sizes={sizes} />
      <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
      <span className="absolute left-3 top-3 rounded-md bg-black/45 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
        {c.label}
      </span>
      <span className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/60">
        MOBFACTORY
      </span>
    </Link>
  );
}

function Heading() {
  return (
    <>
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-white/50">
        Shop by Category
      </p>
      <h2 className="mt-3 font-display text-5xl uppercase leading-none sm:text-7xl">
        Signature Styles
      </h2>
    </>
  );
}

export function CategoryGrid() {
  const ref = useRef<HTMLElement>(null);
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px), (prefers-reduced-motion: reduce)");
    const apply = () => setLite(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Featured settles to exactly 1 (equal to every other tile) well before the end.
  const featuredScale = useTransform(scrollYProgress, [0, 0.75], [2.6, 1]);
  const othersOpacity = useTransform(scrollYProgress, [0.4, 0.72], [0, 1]);
  const othersScale = useTransform(scrollYProgress, [0.4, 0.8], [0.94, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.35, 0.65], [24, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Lightweight static version — no scroll math, no sticky, minimal work.
  if (lite) {
    return (
      <section className="bg-[#07081a] py-16 text-white">
        <div className="mx-auto max-w-[1680px] px-4 sm:px-6">
          <div className="mb-8 text-center">
            <Heading />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {CATEGORIES.map((c, i) => (
              <Tile key={c.slug} c={c} priority={i < 3} sizes="(max-width: 640px) 50vw, 33vw" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[180vh] bg-[#07081a] text-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: headingOpacity, y: headingY }}
          className="absolute inset-x-0 top-[10%] z-20 px-4 text-center will-change-transform"
        >
          <Heading />
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-10">
          <div className="grid w-full max-w-[1680px] grid-cols-3 gap-3">
            {CATEGORIES.map((c, i) => {
              const isFeatured = i === FEATURED;
              return (
                <motion.div
                  key={c.slug}
                  style={
                    isFeatured
                      ? { scale: featuredScale }
                      : { scale: othersScale, opacity: othersOpacity }
                  }
                  className="transform-gpu will-change-transform"
                >
                  <Tile
                    c={c}
                    priority={isFeatured}
                    sizes={isFeatured ? "100vw" : "(max-width: 1024px) 33vw, 30vw"}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute inset-x-0 bottom-8 z-40 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.22em]">Scroll</span>
          <span className="h-8 w-px animate-pulse bg-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
