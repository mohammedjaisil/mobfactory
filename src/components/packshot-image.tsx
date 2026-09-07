"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders a transparent-background product cut-out (PNG), contained so the
 * whole garment shows and "floats". Falls back to a branded placeholder if the
 * file isn't there yet — drop your own cut-outs into /public/packshots.
 */
export function PackshotImage({
  src,
  alt,
  sizes = "(max-width: 768px) 45vw, 22vw",
  className,
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <span className="font-display text-4xl text-fg-faint">MF</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      onError={() => setFailed(true)}
      className={cn("object-contain", className)}
    />
  );
}
