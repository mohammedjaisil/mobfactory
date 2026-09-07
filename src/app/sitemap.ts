import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const BASE = "https://mobfactory.com";
const CATEGORIES = ["t-shirts", "shirts", "outerwear", "trousers", "knitwear", "accessories"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/shop", "/about", "/collections/collector"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const categoryRoutes = CATEGORIES.map((c) => ({
    url: `${BASE}/shop/${c}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${BASE}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
