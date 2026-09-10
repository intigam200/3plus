import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { BrandProduct } from "@/data/brands";

type BrandProductCardProps = {
  product: BrandProduct;
  brandSlug: string;
  categoryLabel: string;
  requestQuoteLabel: string;
};

export function BrandProductCard({
  product,
  brandSlug,
  categoryLabel,
  requestQuoteLabel,
}: BrandProductCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#E8E8E3] bg-white p-6">
      <Link href={`/brands/${brandSlug}/${product.id}`} className="flex flex-1 flex-col">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-[var(--brand-light)]">
          {product.photo ? (
            <Image
              src={product.photo}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain p-4"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center p-10 opacity-30">
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
        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-[var(--brand-accent)]">
          {categoryLabel}
        </p>
        <h3 className="mt-1 text-base font-semibold text-graphite">{product.name}</h3>
        <p className="mt-2 text-sm text-graphite/50">{product.packSize}</p>
      </Link>

      <Link href="/contact" className="mt-5 self-start">
        <span className="inline-block rounded-full border border-[var(--brand-accent)] px-5 py-2 text-sm font-medium text-[var(--brand-accent)] transition-colors duration-300 hover:bg-[var(--brand-accent)] hover:text-white">
          {requestQuoteLabel}
        </span>
      </Link>
    </div>
  );
}
