import { Dumbbell, CheckCircle2, Truck } from "lucide-react";
import { Reveal } from "@/components/reveal";

/** The Mob Creed — manifesto block, centred, on the light canvas. */
export function BrandStatement() {
  return (
    <section className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-10 lg:py-20">
        <Reveal>
          <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-obsidian text-varsity-soft shadow-md">
            <Dumbbell className="h-6 w-6" strokeWidth={1.5} />
          </span>

          <p className="label-sm text-brand">The Mob Creed</p>

          <blockquote className="mt-3 font-display text-3xl uppercase leading-tight sm:text-4xl lg:text-5xl">
            “No gimmicks. No lightweight excuses. Built for those who find
            freedom under cold heavy iron.”
          </blockquote>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-fg-muted">
            Mob Factory was born in raw garage gyms and underground weight pits.
            We design garments that respect the discipline of compound training
            and the grit of athletic lineage.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
            {[
              { icon: CheckCircle2, label: "260 GSM ring-spun cotton" },
              { icon: Truck, label: "Express pan-India dispatch" },
            ].map((c) => (
              <span
                key={c.label}
                className="flex items-center gap-1.5 border border-border bg-bg-subtle px-3 py-1.5"
              >
                <c.icon className="h-4 w-4 text-brand" strokeWidth={1.8} />
                <span className="label-xs text-fg">{c.label}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
