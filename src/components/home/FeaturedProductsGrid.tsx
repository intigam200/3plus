"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";

type FeaturedProduct = {
  key: string;
  brand: string;
  name: string;
  nameCaption?: string;
  packSize: string;
  description: string;
  photo?: string;
  href: string;
};

const INITIAL_COUNT = 6;

export function FeaturedProductsGrid({
  products,
  ctaLabel,
  showMoreLabel,
}: {
  products: FeaturedProduct[];
  ctaLabel: string;
  showMoreLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? products : products.slice(0, INITIAL_COUNT);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard
            key={product.key}
            brand={product.brand}
            name={product.name}
            nameCaption={product.nameCaption}
            packSize={product.packSize}
            description={product.description}
            photo={product.photo}
            href={product.href}
            ctaLabel={ctaLabel}
          />
        ))}
      </div>

      {!expanded && products.length > INITIAL_COUNT && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="rounded-full border border-brand-green px-7 py-3 text-sm font-medium text-brand-green transition-colors duration-300 hover:bg-brand-green hover:text-warmwhite"
          >
            {showMoreLabel}
          </button>
        </div>
      )}
    </div>
  );
}
