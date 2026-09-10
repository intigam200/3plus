"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { BrandProduct } from "@/data/brands";
import { BrandProductCard } from "./BrandProductCard";

export function ProductTabs({
  categories,
  products,
  brandSlug,
}: {
  categories: string[];
  products: BrandProduct[];
  brandSlug: string;
}) {
  const t = useTranslations("brandPages");
  const tFeatured = useTranslations("featured");
  const [active, setActive] = useState(categories[0] ?? "");

  const visible =
    categories.length > 0 ? products.filter((product) => product.categoryKey === active) : products;

  return (
    <div>
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8 border-b border-graphite/10">
          {categories.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`border-b-[3px] px-1 pb-4 text-sm font-medium transition-colors ${
                active === key
                  ? "border-[var(--brand-accent)] text-[var(--brand-accent)]"
                  : "border-transparent text-graphite/50 hover:text-graphite"
              }`}
            >
              {t(`productCategories.${key}`)}
            </button>
          ))}
        </div>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <BrandProductCard
            key={product.id}
            product={product}
            brandSlug={brandSlug}
            categoryLabel={t(`productCategories.${product.categoryKey}`)}
            requestQuoteLabel={tFeatured("requestQuote")}
          />
        ))}
      </div>
    </div>
  );
}
