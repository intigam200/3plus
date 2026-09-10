import { getTranslations } from "next-intl/server";
import { BRANDS } from "@/data/brands";
import { FeaturedProductsGrid } from "./FeaturedProductsGrid";

export async function FeaturedProducts() {
  const t = await getTranslations("featured");
  const tBrands = await getTranslations("brands");
  const tBrandPages = await getTranslations("brandPages");

  const products = BRANDS.flatMap((brand) =>
    brand.products.map((product) => ({
      key: `${brand.slug}-${product.id}`,
      brand: tBrands(`${brand.homeKey}.name`),
      name: product.name,
      packSize: product.packSize,
      description: tBrandPages(`productCategories.${product.categoryKey}`),
      photo: product.photo,
      href: `/brands/${brand.slug}/${product.id}`,
    })),
  );

  return (
    <section className="bg-white">
      <div className="section-padding mx-auto max-w-content">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand-green">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-graphite md:text-4xl">{t("heading")}</h2>
        </div>

        <FeaturedProductsGrid
          products={products}
          ctaLabel={t("requestQuote")}
          showMoreLabel={t("showMore")}
        />
      </div>
    </section>
  );
}
