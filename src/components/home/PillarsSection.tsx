import { getTranslations } from "next-intl/server";
import { Building2, Globe, Warehouse, type LucideIcon } from "lucide-react";

const PILLARS: { key: string; icon: LucideIcon }[] = [
  { key: "distribution", icon: Warehouse },
  { key: "corporateSupply", icon: Building2 },
  { key: "sourcing", icon: Globe },
];

export async function PillarsSection() {
  const t = await getTranslations("pillars");

  return (
    <section className="bg-white">
      <div className="section-padding mx-auto max-w-content">
        <h2 className="text-center text-3xl font-bold text-graphite md:text-4xl">
          {t("heading")}
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
          {PILLARS.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className={`px-0 md:px-10 ${
                index > 0 ? "md:border-l md:border-[#E8E8E3]" : ""
              } ${index === 0 ? "md:pl-0" : ""}`}
            >
              <Icon className="h-10 w-10 text-brand-green md:h-12 md:w-12" strokeWidth={1.5} />
              <h3 className="mt-6 text-2xl font-bold text-graphite">{t(`${key}.title`)}</h3>
              <p className="mt-4 text-base text-graphite/60">{t(`${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
