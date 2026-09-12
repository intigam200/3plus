import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "994101212345";

const COMPANY_LINKS = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
] as const;

const PRODUCT_LINKS = [
  { href: "/brands/sweetbird", key: "brands.sweetbird.name" },
  { href: "/brands/zuma", key: "brands.zuma.name" },
  { href: "/brands/the-bridge", key: "brands.thebridge.name" },
  { href: { pathname: "/", hash: "solutions" }, key: "nav.solutions" },
] as const;

export async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="bg-graphite text-warmwhite">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          <div>
            <Image
              src="/images/logos/3plus-logo-white.png"
              alt="3PLUS"
              width={697}
              height={505}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-white/50">{t("footer.tagline")}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              {t("footer.company")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              {t("footer.products")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              {t("footer.contact")}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/50">
              <li>
                <a href={`mailto:${t("footer.email")}`} className="transition-colors hover:text-white">
                  {t("footer.email")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t("footer.emailSecondary")}`}
                  className="transition-colors hover:text-white"
                >
                  {t("footer.emailSecondary")}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t("footer.phone").replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {t("footer.phone")}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {t("footer.whatsapp")}
                </a>
              </li>
              <li>{t("footer.address")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=Baku,Azerbaijan&z=15&output=embed"
            title="3PLUS — Baku, Azerbaijan"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[240px] w-full border-0"
          />
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} 3PLUS. {t("footer.rights")}
          </p>
          <LocaleSwitcher light />
        </div>
      </div>
    </footer>
  );
}
