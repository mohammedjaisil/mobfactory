"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  add: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  remove: (slug: string, size: string, color: string) => void;
  updateQty: (slug: string, size: string, color: string, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const keyOf = (i: { slug: string; size: string; color: string }) =>
  `${i.slug}__${i.size}__${i.color}`;

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      add: (item, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((i) => keyOf(i) === keyOf(item));
          if (existing) {
            return {
              isOpen: true,
              items: state.items.map((i) =>
                keyOf(i) === keyOf(item) ? { ...i, quantity: i.quantity + quantity } : i
              ),
            };
          }
          return { isOpen: true, items: [...state.items, { ...item, quantity }] };
        }),
      remove: (slug, size, color) =>
        set((state) => ({
          items: state.items.filter((i) => keyOf(i) !== keyOf({ slug, size, color })),
        })),
      updateQty: (slug, size, color, quantity) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              keyOf(i) === keyOf({ slug, size, color })
                ? { ...i, quantity: Math.max(1, quantity) }
                : i
            )
            .filter((i) => i.quantity > 0),
        })),
      clear: () => set({ items: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
    }),
    { name: "mobfactory-cart" }
  )
);

export const cartCount = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.quantity, 0);

export const cartTotal = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.price * i.quantity, 0);
