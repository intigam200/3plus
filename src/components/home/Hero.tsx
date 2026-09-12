import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/photos/hero1.png"
        alt={t("imageAlt")}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "75% center" }}
      />

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.78) 35%, rgba(15,15,15,0.4) 65%, rgba(15,15,15,0.08) 100%)",
        }}
      />

      <div className="relative z-[2] mx-auto flex min-h-screen max-w-content items-center px-6 pt-24 md:px-10 md:pt-28 lg:px-16">
        <div className="max-w-xl">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-green-soft">
            {t("eyebrow")}
          </p>
          <h1 className="mt-5 text-balance text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-md text-base text-white/80 md:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/brands"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-graphite transition-colors hover:bg-warmwhite"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/70 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
