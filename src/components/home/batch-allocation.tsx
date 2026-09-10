const TARGET = 600;
const REMAINING = 142;
const CLAIMED = Math.round(((TARGET - REMAINING) / TARGET) * 100);

/**
 * Batch allocation strip — the scarcity read-out that sits directly under the
 * hero. Numbers are static drop copy; wire them to inventory when it exists.
 */
export function BatchAllocation() {
  return (
    <section className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-[1680px] px-4 py-5 sm:px-6 lg:px-10">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-varsity-bright" />
            <span className="label-sm text-fg">Batch 04 allocation</span>
          </span>
          <span className="label-sm text-brand">
            Only {REMAINING} units remaining
          </span>
        </div>

        <div
          className="h-2 w-full overflow-hidden rounded-full bg-bg-subtle"
          role="progressbar"
          aria-label="Batch 04 units claimed"
          aria-valuenow={CLAIMED}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-varsity to-varsity-bright"
            style={{ width: `${CLAIMED}%` }}
          />
        </div>

        <div className="mt-1.5 flex items-center justify-between">
          <span className="label-xs text-fg-muted">Target: {TARGET} units</span>
          <span className="label-xs text-fg">{CLAIMED}% claimed worldwide</span>
        </div>
      </div>
    </section>
  );
}
