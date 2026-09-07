import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ShopView } from "@/components/shop/shop-view";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Shop All Menswear",
  description: "Browse the full MOBFACTORY menswear collection — tees, shirts, outerwear, trousers and more.",
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
        eyebrow="Menswear"
        title="Shop All"
        description="The complete collection. Elevated essentials and collector drops, all in one place."
      />
      <ShopView products={products} initialSort={initialSort} />
    </>
  );
}
