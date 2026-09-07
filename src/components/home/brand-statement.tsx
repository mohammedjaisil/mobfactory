import { Reveal } from "@/components/reveal";

export function BrandStatement() {
  return (
    <section className="bg-accent text-accent-fg">
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-10">
        <Reveal>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-accent-fg/60">
            The MOBFACTORY ethos
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            We don’t chase trends. We build the pieces you reach for first —
            season after season, wash after wash.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm text-accent-fg/70">
            Designed in-house. Cut from the world’s finest fabrics. Made for men
            who care how the small things are done.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
