import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { BRANDS, getBrandBySlug } from "@/data/brands";
import { BrandPage } from "@/components/brands/BrandPage";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    BRANDS.map((brand) => ({ locale, slug: brand.slug })),
  );
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  setRequestLocale(locale);

  return <BrandPage brand={brand} />;
}
