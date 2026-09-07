import { Hero } from "@/components/home/hero";
import { BestSellers } from "@/components/home/best-sellers";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { PackshotEdit } from "@/components/home/packshot-edit";
import { EditorialSplit } from "@/components/home/editorial-split";
import { BrandStatement } from "@/components/home/brand-statement";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <CategoryGrid />
      <FeaturedCollection />
      <PackshotEdit />
      <EditorialSplit />
      <BrandStatement />
    </>
  );
}
