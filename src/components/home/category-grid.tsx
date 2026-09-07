"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProductImage } from "@/components/product-image";

/**
 * Scroll-driven "zoom-out reveal" (à la Insta360 Luna Ultra):
 * the TRUE-CENTRE tile (index 4 of a 3×3 grid) starts large and, as the
 * section scrolls, settles into an even grid where every tile is the same
 * size. GPU-only transforms keep it smooth; mobile / reduced-motion get a
 * plain grid.
 */
const TILES = [
  { label: "New In", img: "/products/tee-graphic-1.jpg", href: "/shop?sort=new" },
  { label: "T-Shirts", img: "/categories/tees.jpg", href: "/shop/t-shirts" },
  { label: "Shirts", img: "/categories/shirts.jpg", href: "/shop/shirts" },
  { label: "Trousers", img: "/categories/trousers.jpg", href: "/shop/trousers" },
  { label: "Outerwear", img: "/categories/outerwear.jpg", href: "/shop/outerwear" }, // centre
  { label: "Knitwear", img: "/products/knit-grey-1.jpg", href: "/shop/knitwear" },
  { label: "Accessories", img: "/products/belt-brown-1.jpg", href: "/shop/accessories" },
  { label: "Collector", img: "/editorial/collector.jpg", href: "/collections/collector" },
  { label: "On Sale", img: "/products/denim-indigo-1.jpg", href: "/shop" },
];

const FEATURED = 4;

function Tile({
  t,
  priority,
  sizes,
}: {
  t: (typeof TILES)[number];
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Link
      href={t.href}
      className="group relative block aspect-[16/10] overflow-hidden rounded-xl bg-[#0f102c]"
    >
      <ProductImage src={t.img} alt={t.label} label={t.label} priority={priority} sizes={sizes} />
      <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />
      <span className="absolute left-3 top-3 rounded-md bg-black/45 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
        {t.label}
      </span>
      <span className="pointer-events-none absolute inset-x-0 bottom-3 text-center text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/55">
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

  // Featured settles to exactly 1 (equal to every other tile) by ~55%,
  // leaving the rest of the scroll showing the finished even grid.
  const featuredScale = useTransform(scrollYProgress, [0, 0.55], [2.8, 1]);
  const othersOpacity = useTransform(scrollYProgress, [0.3, 0.55], [0, 1]);
  const othersScale = useTransform(scrollYProgress, [0.3, 0.6], [0.92, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.25, 0.5], [24, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  if (lite) {
    return (
      <section className="bg-[#07081a] py-16 text-white">
        <div className="mx-auto max-w-[1680px] px-4 sm:px-6">
          <div className="mb-8 text-center">
            <Heading />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {TILES.map((t, i) => (
              <Tile key={t.label} t={t} priority={i < 3} sizes="(max-width: 640px) 50vw, 33vw" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[200vh] bg-[#07081a] text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ opacity: headingOpacity, y: headingY }}
          className="absolute inset-x-0 top-[6%] z-30 px-4 text-center will-change-transform"
        >
          <Heading />
        </motion.div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-3 gap-3">
            {TILES.map((t, i) => {
              const isFeatured = i === FEATURED;
              return (
                <motion.div
                  key={t.label}
                  style={
                    isFeatured
                      ? { scale: featuredScale, zIndex: 20 }
                      : { scale: othersScale, opacity: othersOpacity }
                  }
                  className="transform-gpu will-change-transform"
                >
                  <Tile
                    t={t}
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
          className="absolute inset-x-0 bottom-6 z-40 flex flex-col items-center gap-2 text-white/70"
        >
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.22em]">Scroll</span>
          <span className="h-8 w-px animate-pulse bg-white/50" />
        </motion.div>
      </div>
    </section>
  );
}
