import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-display text-6xl font-light">Lost the thread.</h1>
      <p className="mt-4 text-sm text-fg-muted">
        The page you’re looking for has moved or never existed. Let’s get you back
        to the good stuff.
      </p>
      <Link
        href="/shop"
        className="mt-8 bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-fg transition-opacity hover:opacity-90"
      >
        Shop the collection
      </Link>
    </div>
  );
}
