import { Hero } from "@/components/home/hero";
import { BestSellers } from "@/components/home/best-sellers";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { NewIn } from "@/components/home/new-in";
import { EditorialSplit } from "@/components/home/editorial-split";
import { BrandStatement } from "@/components/home/brand-statement";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <CategoryGrid />
      <FeaturedCollection />
      <NewIn />
      <EditorialSplit />
      <BrandStatement />
    </>
  );
}
