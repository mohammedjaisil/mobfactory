import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";
import { InstagramIcon, TiktokIcon, XIcon } from "./social-icons";

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "New In", href: "/shop?sort=new" },
      { label: "T-Shirts", href: "/shop/t-shirts" },
      { label: "Shirts", href: "/shop/shirts" },
      { label: "Outerwear", href: "/shop/outerwear" },
      { label: "Trousers", href: "/shop/trousers" },
      { label: "Accessories", href: "/shop/accessories" },
    ],
  },
  {
    title: "The Label",
    links: [
      { label: "About MOBFACTORY", href: "/about" },
      { label: "Collector Series", href: "/collections/collector" },
      { label: "Sustainability", href: "/about#sustainability" },
      { label: "Stores", href: "/about#stores" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Delivery", href: "/about#shipping" },
      { label: "Returns & Exchanges", href: "/about#returns" },
      { label: "Size Guide", href: "/about#sizing" },
      { label: "Contact", href: "/about#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      {/* Newsletter */}
      <div className="border-b border-border">
        <div className="mx-auto grid max-w-[1680px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="eyebrow">Join the movement</p>
            <h3 className="mt-3 font-display text-3xl font-light leading-tight sm:text-4xl">
              Early access to every drop.
            </h3>
            <p className="mt-2 max-w-md text-sm text-fg-muted">
              Sign up for first looks at the Collector Series, member-only pricing
              and styling notes. No noise.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto grid max-w-[1680px] grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="text-base font-semibold uppercase tracking-[0.3em]">
            MOBFACTORY
          </Link>
          <p className="mt-4 max-w-xs text-sm text-fg-muted">
            Menswear, redefined. Elevated essentials and collector drops,
            engineered for the modern man.
          </p>
          <div className="mt-6 flex gap-3">
            {[InstagramIcon, TiktokIcon, XIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent hover:text-accent-fg"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="eyebrow">{col.title}</h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1680px] flex-col gap-3 px-4 py-6 text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} MOBFACTORY. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/about#privacy" className="hover:text-fg">Privacy Policy</Link>
            <Link href="/about#terms" className="hover:text-fg">Terms of Service</Link>
            <span className="text-fg-faint">Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
