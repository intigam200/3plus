import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Coffee, SprayCan, type LucideIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";

const BRANDS = [
  {
    key: "sweetbird",
    slug: "sweetbird",
    logo: "/images/logos/Sweetbird-Logo_black.png",
    photo: "/images/photos/Sweetbird-UK-.webp",
  },
  {
    key: "zuma",
    slug: "zuma",
    logo: "/images/logos/zuma.png",
    photo: "/images/photos/zuma.webp",
  },
  {
    key: "thebridge",
    slug: "the-bridge",
    logo: "/images/logos/logo-thebridge-horizontal-opt.png",
    photo: "/images/photos/Biodrink-oat-natural_Livello2-e-livello-3.webp",
  },
] as const;

const COMING_SOON: { key: string; icon: LucideIcon }[] = [
  { key: "coffee", icon: Coffee },
  { key: "cleaning", icon: SprayCan },
];

export async function BrandsSection() {
  const t = await getTranslations();

  return (
    <section id="brands" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-content px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-32 lg:px-16">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand-green">
            {t("brands.eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-graphite md:text-4xl">
            {t("brands.heading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-graphite/10">
          {BRANDS.map((brand) => (
            <Link
              key={brand.key}
              href={`/brands/${brand.slug}`}
              className="group flex flex-col items-center px-6 text-center transition-opacity duration-300 hover:opacity-80 md:px-10"
            >
              <div className="relative h-12 w-full md:h-14">
                <Image
                  src={brand.logo}
                  alt={t(`brands.${brand.key}.name`)}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-sm text-graphite/60">{t(`brands.${brand.key}.tagline`)}</p>
              <div className="relative mt-6 h-[200px] w-full">
                <Image
                  src={brand.photo}
                  alt={t(`brands.${brand.key}.name`)}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {COMING_SOON.map(({ key, icon: Icon }) => (
            <div key={key} className="flex items-center gap-6 rounded-xl bg-warmwhite p-6 sm:p-8">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-white sm:h-24 sm:w-24">
                <Icon className="h-8 w-8 text-graphite" strokeWidth={1.5} />
              </div>
              <div>
                <span className="inline-block rounded-full bg-brand-green/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-green">
                  {t("comingSoonBanners.badge")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-graphite">
                  {t(`comingSoonBanners.${key}.title`)}
                </h3>
                <p className="mt-1 text-sm text-graphite/60">
                  {t(`comingSoonBanners.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
