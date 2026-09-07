import { Truck, RefreshCcw, ShieldCheck, Sparkles } from "lucide-react";

const ITEMS = [
  { icon: Truck, title: "Free express shipping", copy: "On all orders over ₹2,999, India-wide." },
  { icon: RefreshCcw, title: "30-day returns", copy: "Changed your mind? Send it back, easy." },
  { icon: ShieldCheck, title: "Secure checkout", copy: "Encrypted payments you can trust." },
  { icon: Sparkles, title: "Premium fabrics", copy: "Sourced from the world’s best mills." },
];

export function ValueProps() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-[1680px] grid-cols-2 gap-px bg-border sm:grid-cols-4">
        {ITEMS.map((it) => (
          <div key={it.title} className="flex flex-col items-center gap-3 bg-bg px-4 py-10 text-center">
            <it.icon className="h-6 w-6 text-fg" strokeWidth={1.4} />
            <div>
              <p className="text-sm font-medium">{it.title}</p>
              <p className="mt-1 text-xs text-fg-muted">{it.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
