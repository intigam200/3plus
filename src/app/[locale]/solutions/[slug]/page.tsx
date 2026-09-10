import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { CheckCircle2, Headset, MessageCircle, Package, Truck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getSolutionBySlug, SOLUTIONS } from "@/data/solutions";
import { ProductCard } from "@/components/ProductCard";
import { NotifyForm } from "@/components/solutions/NotifyForm";

const WHY_POINTS = [
  { key: "supply", icon: CheckCircle2 },
  { key: "invoice", icon: Package },
  { key: "delivery", icon: Truck },
  { key: "support", icon: Headset },
] as const;

const STEPS = ["quote", "offer", "delivery"] as const;

type ProductCatalogEntry = {
  brand: string;
  name: string;
  packSize: string;
  description: string;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SOLUTIONS.map((solution) => ({ locale, slug: solution.slug })),
  );
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  setRequestLocale(locale);
  const t = await getTranslations();
  const { detailKey, homeKey, icon: Icon, photo, comingSoon } = solution;

  const heroTitle = t(`solutionPages.${detailKey}.heroTitle`);
  const heroSubtitle = t(`solutionPages.${detailKey}.heroSubtitle`);
  const breadcrumbLabel = t(`solutions.${homeKey}.title`);
  const valueProps = comingSoon
    ? []
    : (t.raw(`solutionPages.${detailKey}.valueProps`) as string[]);
  const products = solution.productIds.map((id) => ({
    id,
    ...(t.raw(`productCatalog.${id}`) as ProductCatalogEntry),
  }));

  return (
    <>
      {/* 1. Hero */}
      <section className="relative min-h-[320px] w-full overflow-hidden sm:min-h-[360px]">
        {photo ? (
          <>
            <Image src={photo} alt={heroTitle} fill sizes="100vw" className="object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.55) 40%, rgba(15,15,15,0.1) 70%, rgba(15,15,15,0) 100%)",
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-graphite">
            <Icon className="h-20 w-20 text-white/10" strokeWidth={1} />
          </div>
        )}

        <div className="relative z-10 mx-auto flex h-full min-h-[320px] max-w-content flex-col justify-center px-6 pt-24 md:px-10 md:pt-28 lg:px-16 sm:min-h-[360px]">
          <nav className="flex items-center gap-2 text-xs text-white/70">
            <Link href="/" className="transition-colors hover:text-white">
              {t("solutionPage.breadcrumbHome")}
            </Link>
            <span>/</span>
            <Link href="/solutions" className="transition-colors hover:text-white">
              {t("solutionPage.breadcrumbSolutions")}
            </Link>
            <span>/</span>
            <span className="text-white">{breadcrumbLabel}</span>
          </nav>
          <h1 className="mt-4 max-w-xl text-3xl font-bold text-white md:text-4xl">{heroTitle}</h1>
          <p className="mt-3 max-w-lg text-white/80">{heroSubtitle}</p>
        </div>
      </section>

      {/* 2. Problem -> Solution */}
      <section className="bg-white">
        <div className="section-padding mx-auto max-w-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-graphite md:text-3xl">
                {t(`solutionPages.${detailKey}.problemHeading`)}
              </h2>
              <p className="mt-5 text-base text-graphite/60">
                {t(`solutionPages.${detailKey}.problemText`)}
              </p>

              {!comingSoon && (
                <ul className="mt-8 space-y-3">
                  {valueProps.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-graphite/70">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-green"
                        strokeWidth={1.75}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {WHY_POINTS.map(({ key, icon: PointIcon }) => (
                <div key={key} className="rounded-2xl border border-[#E8E8E3] p-6">
                  <PointIcon className="h-6 w-6 text-brand-green" strokeWidth={1.5} />
                  <p className="mt-4 text-sm font-medium text-graphite">
                    {t(`solutionPage.whyPoints.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products or Notify */}
      <section className="bg-warmwhite">
        <div className="section-padding mx-auto max-w-content">
          {comingSoon ? (
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-2xl font-bold text-graphite md:text-3xl">
                {t("solutionPage.comingSoon.heading")}
              </h2>
              <p className="mt-4 text-graphite/60">{t("solutionPage.comingSoon.text")}</p>
              <div className="mt-8 text-left">
                <NotifyForm category={solution.slug} />
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-center text-2xl font-bold text-graphite md:text-3xl">
                {t(`solutionPages.${detailKey}.productsHeading`)}
              </h2>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    brand={product.brand}
                    name={product.name}
                    packSize={product.packSize}
                    description={product.description}
                    ctaLabel={t("featured.requestQuote")}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* 4. How it works */}
      <section className="bg-white">
        <div className="section-padding mx-auto max-w-content">
          <h2 className="text-center text-2xl font-bold text-graphite md:text-3xl">
            {t("solutionPage.howItWorks")}
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {STEPS.map((key, index) => (
              <div key={key}>
                <span className="text-6xl font-bold text-brand-green/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-graphite">
                  {t(`solutionPage.steps.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm text-graphite/60">
                  {t(`solutionPage.steps.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-brand-green text-warmwhite">
        <div className="section-padding mx-auto max-w-content text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
            {t(`solutionPages.${detailKey}.ctaHeading`)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-warmwhite/80">{t("cta.description")}</p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-graphite transition-transform duration-300 hover:scale-105"
            >
              {t("cta.buttonPrimary")}
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
              {t("cta.buttonWhatsapp")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
