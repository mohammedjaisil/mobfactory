import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORY_LABELS, getByCategory, type Category } from "@/lib/products";
import { ShopView } from "@/components/shop/shop-view";
import { PageHeader } from "@/components/page-header";

const VALID: Category[] = [
  "t-shirts",
  "shirts",
  "outerwear",
  "trousers",
  "knitwear",
  "accessories",
];

const DESCRIPTIONS: Record<Category, string> = {
  "t-shirts": "Heavyweight tees and graphics, cut to hold their shape.",
  shirts: "Oxfords, linens and camp collars for every day.",
  outerwear: "Statement jackets and overshirts built for the season.",
  trousers: "Tailored trousers, denim and easy tapers.",
  knitwear: "Merino knits and heavyweight sweats.",
  accessories: "The finishing pieces — belts, caps and more.",
};

export function generateStaticParams() {
  return VALID.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!VALID.includes(category as Category)) return { title: "Shop" };
  return {
    title: `${CATEGORY_LABELS[category as Category]}`,
    description: DESCRIPTIONS[category as Category],
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!VALID.includes(category as Category)) notFound();
  const cat = category as Category;

  return (
    <>
      <PageHeader
        eyebrow="Heavy Iron Division"
        title={CATEGORY_LABELS[cat]}
        description={DESCRIPTIONS[cat]}
      />
      <ShopView products={getByCategory(cat)} activeCategory={cat} />
    </>
  );
}
