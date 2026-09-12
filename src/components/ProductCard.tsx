import Image from "next/image";
import { Link } from "@/i18n/navigation";

type ProductCardProps = {
  brand: string;
  name: string;
  packSize: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  photo?: string;
  href?: string;
  nameCaption?: string;
};

export function ProductCard({
  brand,
  name,
  packSize,
  description,
  ctaLabel,
  ctaHref = "/contact",
  photo,
  href,
  nameCaption,
}: ProductCardProps) {
  const caption = nameCaption && nameCaption !== name && (
    <p className="mt-0.5 text-sm text-graphite/50">{nameCaption}</p>
  );
  const media = (
    <div className="relative aspect-square overflow-hidden rounded-xl bg-warmwhite">
      <span className="absolute left-3 top-3 z-10 text-xs font-medium uppercase tracking-wide text-graphite/50">
        {brand}
      </span>
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-6"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-8 opacity-30">
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
  );

  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#E8E8E3] bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
      {href ? (
        <Link href={href} className="flex flex-1 flex-col">
          {media}
          <h3 className="mt-5 text-base font-semibold text-graphite">{name}</h3>
          {caption}
          <p className="mt-1.5 text-sm text-graphite/60">{description}</p>
          <p className="mt-3 text-xs text-graphite/40">{packSize}</p>
        </Link>
      ) : (
        <>
          {media}
          <h3 className="mt-5 text-base font-semibold text-graphite">{name}</h3>
          {caption}
          <p className="mt-1.5 text-sm text-graphite/60">{description}</p>
          <p className="mt-3 text-xs text-graphite/40">{packSize}</p>
        </>
      )}

      <Link href={ctaHref} className="mt-auto self-start pt-6">
        <span className="inline-block rounded-full border border-brand-green px-5 py-2 text-sm font-medium text-brand-green transition-colors duration-300 hover:bg-brand-green hover:text-warmwhite">
          {ctaLabel}
        </span>
      </Link>
    </div>
  );
}
