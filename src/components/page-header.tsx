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
    <div className="mx-auto max-w-[1680px] px-4 pb-10 pt-12 sm:px-6 lg:px-10 lg:pt-16">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="mt-3 font-display text-5xl font-light leading-none sm:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-xl text-sm text-fg-muted">{description}</p>
      )}
    </div>
  );
}
