import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ShopView } from "@/components/shop/shop-view";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Shop All Menswear",
  description: "Browse the full MOB FACTORY collection — tees, shirts, outerwear, trousers and more.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string }>;
}) {
  const { sort } = await searchParams;
  const initialSort =
    sort === "new" || sort === "price-asc" || sort === "price-desc" ? sort : "featured";

  return (
    <>
      <PageHeader
        eyebrow="Heavy Iron Division"
        title="Shop All Drops"
        description="Every batch in one place. Heavyweight essentials, iron gear and collector drops."
      />
      <ShopView products={products} initialSort={initialSort} />
    </>
  );
}
