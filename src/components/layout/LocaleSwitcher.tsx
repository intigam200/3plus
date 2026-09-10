"use client";

import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {routing.locales.map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && (
            <span className={light ? "text-white/30" : "text-graphite/30"}>|</span>
          )}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: code })}
            aria-current={locale === code}
            className={
              locale === code
                ? light
                  ? "text-white"
                  : "text-graphite"
                : light
                  ? "text-white/50 transition-colors hover:text-white"
                  : "text-graphite/40 transition-colors hover:text-graphite"
            }
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
