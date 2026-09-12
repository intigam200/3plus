import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/ui/Reveal";

const STATS = ["productsCount", "response", "focus"] as const;

export async function WhySection() {
  const t = await getTranslations("why");

  return (
    <section className="bg-graphite text-warmwhite">
      <div className="section-padding mx-auto max-w-content">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            {t("heading")}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {STATS.map((key, index) => (
            <Reveal key={key} delay={index * 120} className="text-center">
              <span className="text-5xl font-bold text-brand-green-soft">
                {t(`${key}.value`)}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{t(`${key}.title`)}</h3>
              <p className="mt-2 text-sm text-white/50">{t(`${key}.description`)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
