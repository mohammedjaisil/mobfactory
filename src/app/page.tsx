import { Hero } from "@/components/home/hero";
import { BatchAllocation } from "@/components/home/batch-allocation";
import { BestSellers } from "@/components/home/best-sellers";
import { CategoryGrid } from "@/components/home/category-grid";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { SpecSheet } from "@/components/home/spec-sheet";
import { NewIn } from "@/components/home/new-in";
import { RigPack } from "@/components/home/rig-pack";
import { EditorialSplit } from "@/components/home/editorial-split";
import { Syndicate } from "@/components/home/syndicate";
import { BrandStatement } from "@/components/home/brand-statement";
import { Faq } from "@/components/home/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <BatchAllocation />
      <BestSellers />
      <CategoryGrid />
      <FeaturedCollection />
      <SpecSheet />
      <NewIn />
      <RigPack />
      <EditorialSplit />
      <Syndicate />
      <BrandStatement />
      <Faq />
    </>
  );
}
