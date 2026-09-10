export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-border bg-bg-elevated">
      <div className="mx-auto max-w-[1680px] px-4 pb-10 pt-12 sm:px-6 lg:px-10 lg:pt-16">
        {eyebrow && (
          <p className="label-sm flex items-center gap-2 text-brand">
            <span className="diamond h-1.5 w-1.5" />
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-5xl uppercase leading-none sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg-muted">{description}</p>
        )}
      </div>
    </div>
  );
}
