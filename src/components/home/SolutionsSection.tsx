import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { SOLUTIONS } from "@/data/solutions";

export async function SolutionsSection() {
  const t = await getTranslations("solutions");

  return (
    <section id="solutions" className="scroll-mt-24 bg-warmwhite">
      <div className="section-padding mx-auto max-w-content">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand-green">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-graphite md:text-4xl">{t("heading")}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map(({ slug, homeKey, icon: Icon, photo, comingSoon }) => {
            const title = t(`${homeKey}.title`);
            const features = comingSoon ? null : (t.raw(`${homeKey}.features`) as string[]);
            const href = `/solutions/${slug}`;

            return (
              <div
                key={slug}
                className={`flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8E8E3] bg-white transition-all duration-300 ${
                  comingSoon ? "opacity-60" : "hover:-translate-y-1 hover:shadow-sm"
                }`}
              >
                <div className="relative aspect-[4/3] w-full bg-warmwhite">
                  {photo ? (
                    <Image
                      src={photo}
                      alt={title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-green-soft/50 to-warmwhite">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
                        <Icon className="h-9 w-9 text-brand-green" strokeWidth={1.5} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <Icon className="h-6 w-6 text-graphite" strokeWidth={1.5} />

                  <h3 className="mt-4 text-lg font-bold text-graphite">{title}</h3>

                  {comingSoon ? (
                    <p className="mt-3 text-sm text-graphite/60">{t("cleaning.description")}</p>
                  ) : (
                    <ul className="mt-3 space-y-1.5 text-sm text-graphite/60">
                      {features!.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-6">
                    {comingSoon ? (
                      <Link
                        href={href}
                        className="inline-block rounded-full bg-graphite/10 px-3 py-1 text-xs font-medium text-graphite/60 transition-colors hover:bg-graphite/15"
                      >
                        {t("comingSoon")}
                      </Link>
                    ) : (
                      <Link
                        href={href}
                        className="text-sm font-medium text-brand-green transition-colors hover:text-graphite"
                      >
                        {t("learnMore")} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
