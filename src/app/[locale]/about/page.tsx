import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <section className="bg-warmwhite">
        <div className="mx-auto max-w-content px-6 pb-20 pt-28 text-center md:px-10 md:pb-28 md:pt-32 lg:px-16">
          <div className="mx-auto flex justify-center">
            <Image
              src="/images/logos/3plus-logo-dark.png"
              alt="3PLUS"
              width={697}
              height={505}
              className="h-16 w-auto md:h-20"
            />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.12em] text-brand-green">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 text-3xl font-bold text-graphite md:text-4xl">{t("heading")}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-graphite/60 md:text-lg">
            {t("text")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <p className="text-sm text-graphite/60">{t("ctaText")}</p>
            <Link
              href="/contact"
              className="rounded-full bg-brand-green px-6 py-2.5 text-sm font-medium text-warmwhite transition-colors hover:bg-graphite"
            >
              {t("ctaButton")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-content px-6 pb-20 md:px-10 md:pb-28 lg:px-16">
          <h2 className="text-center text-2xl font-bold text-graphite md:text-3xl">
            {t("mapHeading")}
          </h2>
          <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E8E8E3] md:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps?q=Baku,Azerbaijan&z=15&output=embed"
              title="3PLUS — Baku, Azerbaijan"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
