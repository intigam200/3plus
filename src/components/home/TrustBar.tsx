import { getTranslations } from "next-intl/server";
import { Award, Building2, Headset, Package, Truck, type LucideIcon } from "lucide-react";

const TRUST_ITEMS: { key: string; icon: LucideIcon }[] = [
  { key: "premium", icon: Award },
  { key: "complete", icon: Package },
  { key: "b2b", icon: Building2 },
  { key: "reliable", icon: Truck },
  { key: "support", icon: Headset },
];

export async function TrustBar() {
  const t = await getTranslations("trustBar");

  return (
    <section className="bg-warmwhite">
      <div className="mx-auto max-w-content px-6 py-14 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
          {TRUST_ITEMS.map(({ key, icon: Icon }) => (
            <div key={key} className="flex flex-col items-center text-center">
              <Icon className="h-7 w-7 text-graphite md:h-8 md:w-8" strokeWidth={1.5} />
              <h3 className="mt-4 text-xs font-semibold uppercase tracking-wide text-graphite">
                {t(`${key}.title`)}
              </h3>
              <p className="mt-1 text-xs text-graphite/60">{t(`${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
