"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart, cartTotal } from "@/lib/cart-store";
import { ProductImage } from "./product-image";
import { formatPrice, cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, close, remove, updateQty } = useCart();
  const total = cartTotal(items);
  const freeShippingThreshold = 2999;
  const remaining = Math.max(0, freeShippingThreshold - total);
  const progress = Math.min(100, (total / freeShippingThreshold) * 100);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60]",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={close}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-bg shadow-2xl transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="label-lg">
            Your Bag ({items.length})
          </h2>
          <button aria-label="Close bag" onClick={close}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free shipping progress */}
        {items.length > 0 && (
          <div className="border-b border-border px-5 py-4">
            <p className="text-xs text-fg-muted">
              {remaining > 0 ? (
                <>
                  You’re {formatPrice(remaining)} away from{" "}
                  <span className="font-medium text-fg">free shipping</span>
                </>
              ) : (
                <span className="font-medium text-fg">You’ve unlocked free shipping ✦</span>
              )}
            </p>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-bg-subtle">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-20 text-center">
              <ShoppingBag className="h-10 w-10 text-fg-faint" strokeWidth={1} />
              <p className="text-sm text-fg-muted">Your bag is empty.</p>
              <button
                onClick={close}
                className="mt-2 border-b border-fg pb-0.5 text-xs font-medium uppercase tracking-[0.14em]"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={`${item.slug}-${item.size}-${item.color}`} className="flex gap-4 py-5">
                  <div className="relative h-28 w-20 shrink-0 overflow-hidden bg-bg-subtle">
                    <ProductImage src={item.image} alt={item.name} label={item.name} sizes="80px" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        href={`/product/${item.slug}`}
                        onClick={close}
                        className="text-sm font-medium leading-snug hover:underline"
                      >
                        {item.name}
                      </Link>
                      <button
                        aria-label="Remove item"
                        onClick={() => remove(item.slug, item.size, item.color)}
                        className="text-fg-faint transition-colors hover:text-fg"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-fg-muted">
                      {item.color} · {item.size}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-border">
                        <button
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center hover:bg-bg-subtle"
                          onClick={() =>
                            updateQty(item.slug, item.size, item.color, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center hover:bg-bg-subtle"
                          onClick={() =>
                            updateQty(item.slug, item.size, item.color, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / checkout */}
        {items.length > 0 && (
          <div className="border-t border-border px-5 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-fg-muted">Subtotal</span>
              <span className="text-base font-semibold">{formatPrice(total)}</span>
            </div>
            <p className="mt-1 text-xs text-fg-faint">
              Taxes and shipping calculated at checkout.
            </p>
            <button className="mt-4 w-full bg-accent py-3.5 label-lg text-accent-fg transition-opacity hover:opacity-90">
              Proceed to Checkout
            </button>
            <button
              onClick={close}
              className="mt-2 w-full py-2 text-xs font-medium uppercase tracking-[0.14em] text-fg-muted hover:text-fg"
            >
              Continue shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
