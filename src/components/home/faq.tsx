"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How heavy is Mob Factory fabric compared to normal gym tees?",
    a: "Standard sportswear is typically 160–180 GSM polyester blends. Mob Factory uses heavyweight 240–260 GSM 100% combed cotton with custom 2×2 ribbed structures that withstand barbell knurling, chalk stains and repeated high-heat washing.",
  },
  {
    q: "What is the replacement & size exchange policy?",
    a: "We offer 4-day seamless doorstep size replacements across all pin codes in India. If the fit isn't spot on for your shoulders or waist, message our WhatsApp crew for rapid courier swaps.",
  },
  {
    q: "How do Mob batch drops work?",
    a: "Each seasonal batch is produced in limited runs of 500–1000 units to preserve fabric standards and prevent mass commercial dilution. Once a colourway sells out it enters the vault and may not restock.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10">
        <div className="mb-6">
          <p className="label-sm text-brand">Mob Factory intel</p>
          <h2 className="mt-2 font-display text-4xl uppercase leading-none sm:text-5xl">
            Frequently asked
          </h2>
        </div>

        <div className="flex flex-col gap-2.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="border border-border bg-bg-elevated p-4 transition-colors"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="text-sm font-bold uppercase leading-snug">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-brand" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0" />
                  )}
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-fg-muted">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
