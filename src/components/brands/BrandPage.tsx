import type { CSSProperties } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { BrandDef } from "@/data/brands";
import { ProductTabs } from "./ProductTabs";

export async function BrandPage({ brand }: { brand: BrandDef }) {
  const t = await getTranslations();
  const { detailKey, homeKey, colors, logo, heroPhoto, storyPhoto, features } = brand;
  const brandName = t(`brands.${homeKey}.name`);

  const brandVars = {
    "--brand-accent": colors.accent,
    "--brand-light": colors.accentLight,
    "--brand-dark": colors.accentDark,
  } as CSSProperties;

  return (
    <div style={brandVars}>
      {/* 1. Hero */}
      <section style={{ backgroundColor: colors.accentLight }}>
        <div className="mx-auto grid max-w-content items-center gap-12 px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32 lg:grid-cols-[55%_45%] lg:px-16">
          <div>
            <nav className="flex items-center gap-2 text-xs text-graphite/50">
              <Link href="/" className="transition-colors hover:text-graphite">
                {t("brandPages.breadcrumbHome")}
              </Link>
              <span>/</span>
              <Link href="/brands" className="transition-colors hover:text-graphite">
                {t("brandPages.breadcrumbBrands")}
              </Link>
              <span>/</span>
              <span className="text-graphite">{brandName}</span>
            </nav>

            <div className="relative mt-6 h-14 w-44 sm:h-16">
              <Image src={logo} alt={brandName} fill className="object-contain object-left" />
            </div>

            <h1
              className="mt-6 text-4xl font-bold md:text-5xl"
              style={{ color: colors.accent }}
            >
              {t(`brandPages.${detailKey}.heroTitle`)}
            </h1>
            <p className="mt-5 max-w-md text-base text-graphite/70">
              {t(`brandPages.${detailKey}.heroDescription`)}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#products"
                className="rounded-full px-7 py-3.5 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: colors.accent }}
              >
                {t("brandPages.exploreProducts")}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border-2 bg-transparent px-7 py-3.5 text-sm font-medium transition-colors duration-300"
                style={{ borderColor: colors.accent, color: colors.accent }}
              >
                {t("featured.requestQuote")}
              </Link>
            </div>
          </div>

          <div className="relative aspect-square w-full">
            <Image
              src={heroPhoto}
              alt={brandName}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 2. Features */}
      <section className="bg-white">
        <div className="section-padding mx-auto max-w-content">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ key, icon: Icon }) => (
              <div key={key}>
                <Icon className="h-7 w-7" strokeWidth={1.5} style={{ color: colors.accent }} />
                <h3 className="mt-4 text-base font-bold text-graphite">
                  {t(`brandPages.${detailKey}.features.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-graphite/60">
                  {t(`brandPages.${detailKey}.features.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Products */}
      <section id="products" style={{ backgroundColor: colors.accentLight }}>
        <div className="section-padding mx-auto max-w-content">
          <h2 className="text-center text-3xl font-bold text-graphite md:text-4xl">
            {t("brandPages.productsHeading")}
          </h2>
          <div className="mt-12">
            <ProductTabs
              categories={brand.categories}
              products={brand.products}
              brandSlug={brand.slug}
            />
          </div>
        </div>
      </section>

      {/* 4. Brand story */}
      <section className="bg-white">
        <div className="section-padding mx-auto grid max-w-content gap-12 lg:grid-cols-[60%_40%] lg:items-center lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-graphite md:text-3xl">
              {t(`brandPages.${detailKey}.aboutHeading`)}
            </h2>
            <p className="mt-5 text-base text-graphite/60">
              {t(`brandPages.${detailKey}.aboutText`)}
            </p>
          </div>
          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
            style={{ backgroundColor: colors.accentLight }}
          >
            <Image
              src={storyPhoto}
              alt={brandName}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section style={{ backgroundColor: colors.accent }}>
        <div className="section-padding mx-auto max-w-content text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
            {t(`brandPages.${detailKey}.ctaHeading`)}
          </h2>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium transition-transform duration-300 hover:scale-105"
              style={{ color: colors.accent }}
            >
              {t("featured.requestQuote")}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
            >
              {t("brandPages.contactSales")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
