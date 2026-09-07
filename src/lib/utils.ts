import clsx, { type ClassValue } from "clsx";

/** Merge conditional class names. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format a number as Indian Rupee currency (e.g. ₹1,499). */
export function formatPrice(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
