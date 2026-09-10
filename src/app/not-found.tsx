import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="label-sm text-brand">Error 404</p>
      <h1 className="mt-4 font-display text-6xl uppercase">Dropped the bar.</h1>
      <p className="mt-4 text-sm text-fg-muted">
        The page you’re looking for has moved or never existed. Let’s get you back
        under the iron.
      </p>
      <Link
        href="/shop"
        className="mt-8 label-lg bg-obsidian px-8 py-3.5 text-chalk transition-transform hover:scale-[1.02]"
      >
        Back to the drops
      </Link>
    </div>
  );
}
