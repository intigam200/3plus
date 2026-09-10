import { setRequestLocale, getTranslations } from "next-intl/server";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { RfqForm } from "@/components/contact/RfqForm";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "994101212345";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const tFooter = await getTranslations("footer");

  return (
    <section className="bg-warmwhite">
      <div className="mx-auto max-w-content px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-32 lg:px-16">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand-green">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 text-3xl font-bold text-graphite md:text-4xl">{t("heading")}</h1>
          <p className="mt-4 text-graphite/60">{t("subheading")}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <RfqForm />

          <div className="h-fit rounded-2xl border border-[#E8E8E3] bg-white p-6 sm:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-graphite">
              {t("directTitle")}
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={1.75} />
                <div className="flex flex-col">
                  <a
                    href={`mailto:${tFooter("email")}`}
                    className="text-graphite/70 transition-colors hover:text-graphite"
                  >
                    {tFooter("email")}
                  </a>
                  <a
                    href={`mailto:${tFooter("emailSecondary")}`}
                    className="text-graphite/70 transition-colors hover:text-graphite"
                  >
                    {tFooter("emailSecondary")}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={1.75} />
                <a
                  href={`tel:${tFooter("phone").replace(/\s/g, "")}`}
                  className="text-graphite/70 transition-colors hover:text-graphite"
                >
                  {tFooter("phone")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={1.75} />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite/70 transition-colors hover:text-graphite"
                >
                  {tFooter("whatsapp")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={1.75} />
                <span className="text-graphite/70">{tFooter("address")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
