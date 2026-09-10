import { getTranslations } from "next-intl/server";
import { MessageCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";

export async function CtaSection() {
  const t = await getTranslations("cta");

  return (
    <section className="bg-brand-green text-warmwhite">
      <div className="section-padding mx-auto max-w-content text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
          {t("heading")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-warmwhite/80">{t("description")}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-graphite transition-transform duration-300 hover:scale-105"
          >
            {t("buttonPrimary")}
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-white/70 px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            {t("buttonWhatsapp")}
          </Link>
        </div>
      </div>
    </section>
  );
}
