import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { BrandsSection } from "@/components/home/BrandsSection";
import { TrustBar } from "@/components/home/TrustBar";
import { PillarsSection } from "@/components/home/PillarsSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhySection } from "@/components/home/WhySection";
import { CtaSection } from "@/components/home/CtaSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <BrandsSection />
      <SolutionsSection />
      <PillarsSection />
      <TrustBar />
      <FeaturedProducts />
      <WhySection />
      <CtaSection />
    </>
  );
}
