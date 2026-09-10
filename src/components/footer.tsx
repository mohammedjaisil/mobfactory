import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "./social-icons";
import { NewsletterForm } from "./newsletter-form";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "Drop 04", href: "/shop?sort=new" },
      { label: "T-Shirts", href: "/shop/t-shirts" },
      { label: "Shirts", href: "/shop/shirts" },
      { label: "Outerwear", href: "/shop/outerwear" },
      { label: "Trousers", href: "/shop/trousers" },
      { label: "Iron Gear", href: "/shop/accessories" },
    ],
  },
  {
    title: "The Factory",
    links: [
      { label: "The Mob Creed", href: "/about" },
      { label: "Collector Series", href: "/collections/collector" },
      { label: "Fabric Benchmark", href: "/#spec-sheet" },
      { label: "Sustainability", href: "/about#sustainability" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping & Delivery", href: "/about#shipping" },
      { label: "Returns & Exchanges", href: "/about#returns" },
      { label: "Fit Guide", href: "/about#sizing" },
      { label: "Contact", href: "/about#contact" },
    ],
  },
];

const WHATSAPP =
  "https://wa.me/916235263955?text=Hi%20Mob%20Factory!%20I%20have%20a%20question%20about%20Drop%2004";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian text-chalk">
      <div className="mx-auto max-w-[1680px] px-4 py-14 sm:px-6 lg:px-10">
        {/* Join the mob */}
        <div className="grid gap-8 rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm lg:grid-cols-2 lg:items-center lg:p-8">
          <div>
            <p className="label-sm text-varsity-soft">The Mob Protocol</p>
            <h3 className="mt-1.5 font-display text-3xl uppercase leading-none sm:text-4xl">
              Join the mob · Unlock 15% off
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-heather/80">
              Private early access links 30 minutes before official drop
              launches, secret vault codes and iron news. No noise.
            </p>
          </div>
          <NewsletterForm />
        </div>

        {/* Direct comms */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-white/10 bg-white/[0.06] p-3.5 transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5 text-iron-green" strokeWidth={1.6} />
            <span>
              <span className="label-xs block text-chalk">WhatsApp helpline</span>
              <span className="text-[11px] text-heather/70">+91 6235263955</span>
            </span>
          </a>
          <a
            href="https://www.instagram.com/mobfactory.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border border-white/10 bg-white/[0.06] p-3.5 transition-colors hover:bg-white/10"
          >
            <InstagramIcon className="h-5 w-5 text-varsity-soft" />
            <span>
              <span className="label-xs block text-chalk">Instagram</span>
              <span className="text-[11px] text-heather/70">@mobfactory.co</span>
            </span>
          </a>
        </div>

        {/* Link columns */}
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="diamond h-2 w-2" />
              <span className="font-display text-2xl leading-none">MOB FACTORY</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-heather/70">
              Heavy iron division. Heavyweight gymwear engineered for compound
              work and built in the trenches.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="label-sm text-varsity-soft">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-heather/70 transition-colors hover:text-chalk"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Brand footprint */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1680px] flex-col items-center gap-3 px-4 py-6 text-center sm:px-6 lg:px-10">
          <span className="flex items-center gap-2">
            <span className="diamond h-1.5 w-1.5" />
            <span className="label-xs text-heather/70">
              Mob Factory Co. · Heavy Iron Division · Pan-India
            </span>
            <span className="diamond h-1.5 w-1.5" />
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-heather/60">
            <span>© {new Date().getFullYear()} Mob Factory Athletic Dept. All rights reserved.</span>
            <Link href="/about#privacy" className="hover:text-chalk">Privacy Policy</Link>
            <Link href="/about#terms" className="hover:text-chalk">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
