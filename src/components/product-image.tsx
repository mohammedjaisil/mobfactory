"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  src?: string;
  alt: string;
  label?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Renders a product photo with next/image. If the file hasn't been
 * uploaded yet (or fails to load), it gracefully falls back to a
 * branded gradient placeholder so layouts never break.
 *
 * Drop real photos into /public/products and they appear automatically.
 */
export function ProductImage({
  src,
  alt,
  label,
  sizes = "(max-width: 768px) 50vw, 25vw",
  className,
  priority,
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-bg-subtle",
          className
        )}
        aria-label={alt}
        role="img"
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <span className="font-display text-3xl leading-none text-fg-faint">MF</span>
          <span className="eyebrow text-[0.55rem] text-fg-faint">
            {label ?? "MOB FACTORY"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
    />
  );
}
