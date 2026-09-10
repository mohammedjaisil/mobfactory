/**
 * Spec marquee under the header — the factory's running spec sheet.
 * Rendered twice back-to-back so the -50% translate loops seamlessly.
 */
const SPECS = [
  { text: "Built in the trenches", bold: true },
  { text: "Heavy iron heritage" },
  { text: "Uncompromising specs", bold: true },
  { text: "260 GSM comb-ring cotton" },
  { text: "Zero-deform ribs", bold: true },
  { text: "Made in India" },
];

function Run() {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {SPECS.map((s, i) => (
        <span key={i} className="flex shrink-0 items-center gap-6">
          <span
            className={
              s.bold
                ? "label-sm text-chalk"
                : "label-sm text-heather/70"
            }
          >
            {s.text}
          </span>
          <span className="text-varsity-soft" aria-hidden>
            ◆
          </span>
        </span>
      ))}
    </div>
  );
}

export function SpecTicker() {
  return (
    <div className="select-none overflow-hidden border-b border-white/5 bg-obsidian py-2">
      <div className="flex w-max animate-marquee">
        <Run />
        <Run />
      </div>
    </div>
  );
}
