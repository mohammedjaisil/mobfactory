"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MESSAGES = [
  "Members exclusive Drop 04 — free shipping over ₹999",
  "260 GSM comb-ring cotton · zero-deform ribs",
  "Batch 04 is live — limited run of 600 units",
  "4-day doorstep size exchanges, India-wide",
  "Prepaid orders unlock The Mob Syndicate Tier 01",
];

/** High-voltage alert strip: obsidian ground, diamond bullets, rotating copy. */
export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex h-9 items-center justify-center gap-2 overflow-hidden border-b border-white/10 bg-obsidian px-4 text-chalk">
      <span className="diamond h-1.5 w-1.5 shrink-0" />
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="label-xs truncate text-center"
        >
          {MESSAGES[index]}
        </motion.p>
      </AnimatePresence>
      <span className="diamond h-1.5 w-1.5 shrink-0" />
    </div>
  );
}
