import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { BRANDS, getBrandProduct } from "@/data/brands";
import { BrandProductCard } from "@/components/brands/BrandProductCard";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    BRANDS.flatMap((brand) =>
      brand.products.map((product) => ({ locale, slug: brand.slug, productId: product.id })),
    ),
  );
}

export default async function BrandProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; productId: string }>;
}) {
  const { locale, slug, productId } = await params;
  const found = getBrandProduct(slug, productId);
  if (!found) notFound();

  setRequestLocale(locale);
  const { brand, product } = found;
  const t = await getTranslations();
  const brandName = t(`brands.${brand.homeKey}.name`);
  const categoryLabel = t(`brandPages.productCategories.${product.categoryKey}`);
  const description = t(`productDescriptions.${product.id}`);
  const nameCaption = t(`productNames.${product.id}`);

  const related = brand.products.filter((item) => item.id !== product.id).slice(0, 3);

  const brandVars = {
    "--brand-accent": brand.colors.accent,
    "--brand-light": brand.colors.accentLight,
    "--brand-dark": brand.colors.accentDark,
  } as CSSProperties;

  return (
    <div style={brandVars}>
      {/* 1. Product hero */}
      <section style={{ backgroundColor: brand.colors.accentLight }}>
        <div className="mx-auto grid max-w-content items-center gap-12 px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:grid-cols-[45%_55%] lg:px-16">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white">
            {product.photo ? (
              <Image
                src={product.photo}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain p-10"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center p-16 opacity-30">
                <Image
                  src="/images/logos/3plus-logo-dark.png"
                  alt=""
                  width={697}
                  height={505}
                  className="h-auto w-full object-contain"
                />
              </div>
            )}
          </div>

          <div>
            <nav className="flex flex-wrap items-center gap-2 text-xs text-graphite/50">
              <Link href="/" className="transition-colors hover:text-graphite">
                {t("brandPages.breadcrumbHome")}
              </Link>
              <span>/</span>
              <Link
                href={{ pathname: "/", hash: "brands" }}
                className="transition-colors hover:text-graphite"
              >
                {t("brandPages.breadcrumbBrands")}
              </Link>
              <span>/</span>
              <Link href={`/brands/${brand.slug}`} className="transition-colors hover:text-graphite">
                {brandName}
              </Link>
              <span>/</span>
              <span className="text-graphite">{product.name}</span>
            </nav>

            <div className="relative mt-6 h-10 w-32">
              <Image src={brand.logo} alt={brandName} fill className="object-contain object-left" />
            </div>

            <p className="mt-6 text-xs font-medium uppercase tracking-wide text-[var(--brand-accent)]">
              {categoryLabel}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-graphite md:text-4xl">{product.name}</h1>
            {nameCaption !== product.name && (
              <p className="mt-1 text-sm text-graphite/50">{nameCaption}</p>
            )}
            <p className="mt-4 text-sm text-graphite/50">{product.packSize}</p>
            <p className="mt-5 max-w-md text-base text-graphite/70">{description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: brand.colors.accent }}
              >
                {t("featured.requestQuote")}
              </Link>
              <Link
                href={`/brands/${brand.slug}`}
                className="rounded-full border-2 bg-transparent px-7 py-3.5 text-sm font-medium transition-colors duration-300"
                style={{ borderColor: brand.colors.accent, color: brand.colors.accent }}
              >
                {t("brandPages.backToBrand", { brand: brandName })}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. More from this brand */}
      {related.length > 0 && (
        <section className="bg-white">
          <div className="section-padding mx-auto max-w-content">
            <h2 className="text-center text-2xl font-bold text-graphite md:text-3xl">
              {t("brandPages.moreFromBrand", { brand: brandName })}
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <BrandProductCard
                  key={item.id}
                  product={item}
                  brandSlug={brand.slug}
                  categoryLabel={t(`brandPages.productCategories.${item.categoryKey}`)}
                  requestQuoteLabel={t("featured.requestQuote")}
                  nameCaption={t(`productNames.${item.id}`)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
