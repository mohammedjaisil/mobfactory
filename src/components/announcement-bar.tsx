"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MESSAGES = [
  "Get 10% off your first order — use code NEW10",
  "Free express shipping on orders over ₹2,999",
  "The Collector Series — Autumn drop now live",
  "30-day easy returns, India-wide",
  "New arrivals every Thursday",
];

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex h-9 items-center justify-center overflow-hidden border-b border-border bg-accent text-accent-fg">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="px-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em]"
        >
          {MESSAGES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
