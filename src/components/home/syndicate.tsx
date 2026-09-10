import Link from "next/link";
import { ArrowRight, Award, Gem, Timer } from "lucide-react";

const TIERS = [
  {
    tier: "Tier 01",
    icon: Timer,
    title: "Early Access",
    note: "30-min headstart",
    accent: "text-varsity-soft",
  },
  {
    tier: "Tier 02",
    icon: Gem,
    title: "1-of-1 Drops",
    note: "Vault invites",
    accent: "text-amber-400",
  },
  {
    tier: "Tier 03",
    icon: Award,
    title: "Iron Club",
    note: "Free bespoke gear",
    accent: "text-iron-green",
  },
];

/** Membership pitch — three tier plates inside one obsidian card. */
export function Syndicate() {
  return (
    <section className="bg-bg-subtle py-16 lg:py-20">
      <div className="mx-auto max-w-[1680px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-obsidian p-6 text-chalk shadow-xl lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="flex items-center gap-2">
              <span className="diamond h-2.5 w-2.5" />
              <span className="label-sm text-varsity-soft">Iron alliance</span>
            </span>
            <span className="font-display text-xl tracking-[0.2em]">Members Only</span>
          </div>

          <div className="mt-4 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
                The Mob Syndicate collector pass
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-heather/80">
                Prepaid orders automatically enroll you in The Syndicate tier.
                Unlock 30-minute early drop access, private restock codes and
                rare metallic member badges.
              </p>
              <Link
                href="/collections/collector"
                className="label-lg mt-6 inline-flex items-center gap-2 bg-chalk px-7 py-3.5 text-obsidian transition-transform hover:scale-[1.02]"
              >
                Claim collector pass
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {TIERS.map((t) => (
                <div
                  key={t.tier}
                  className="flex flex-col items-center justify-between rounded border border-white/15 bg-white/[0.08] p-3 text-center"
                >
                  <span className={`label-xs ${t.accent}`}>{t.tier}</span>
                  <span className="py-3">
                    <t.icon className={`mx-auto h-6 w-6 ${t.accent}`} strokeWidth={1.5} />
                    <span className="mt-2 block font-display text-base uppercase leading-none text-chalk">
                      {t.title}
                    </span>
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-heather/60">
                    {t.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
