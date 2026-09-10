"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { BRANDS } from "@/data/brands";
import { SOLUTIONS } from "@/data/solutions";
import { LocaleSwitcher } from "./LocaleSwitcher";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/brands", key: "brands" },
  { href: "/solutions", key: "solutions" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

const HEADER_HEIGHT = 96;

function isNavItemActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const t = useTranslations("nav");
  const tBrands = useTranslations("brands");
  const tSolutions = useTranslations("solutions");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) {
        // No full-bleed hero on this page (e.g. /contact) — always show the solid header.
        setSolid(true);
        return;
      }
      setSolid(hero.getBoundingClientRect().bottom <= HEADER_HEIGHT);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-colors duration-300 ${
        solid
          ? "border-b border-graphite/10 bg-warmwhite/95 backdrop-blur"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center">
          <Image
            src={solid ? "/images/logos/3plus-logo-dark.png" : "/images/logos/3plus-logo-white.png"}
            alt="3PLUS"
            width={697}
            height={505}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isNavItemActive(item.href, pathname);
            const linkClass = `relative py-1 text-sm font-medium after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand-green after:transition-[width] after:duration-300 after:content-[''] ${
              active ? "after:w-full" : "after:w-0 hover:after:w-full"
            } ${solid ? "text-graphite/70" : "text-white/80"}`;

            if (item.key === "brands") {
              return (
                <div key={item.key} className="group/brands relative">
                  <Link href={{ pathname: "/", hash: "brands" }} className={linkClass}>
                    {t(item.key)}
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover/brands:visible group-hover/brands:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-graphite/10 bg-white p-2 shadow-xl">
                      {BRANDS.map((brand) => (
                        <Link
                          key={brand.slug}
                          href={`/brands/${brand.slug}`}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-warmwhite"
                        >
                          <span className="relative h-8 w-16 shrink-0">
                            <Image
                              src={brand.logo}
                              alt=""
                              fill
                              sizes="64px"
                              className="object-contain"
                            />
                          </span>
                          <span className="text-sm font-medium text-graphite">
                            {tBrands(`${brand.homeKey}.name`)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (item.key === "solutions") {
              return (
                <div key={item.key} className="group/solutions relative">
                  <Link href={{ pathname: "/", hash: "solutions" }} className={linkClass}>
                    {t(item.key)}
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover/solutions:visible group-hover/solutions:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-graphite/10 bg-white p-2 shadow-xl">
                      {SOLUTIONS.map(({ slug, homeKey, icon: Icon }) => (
                        <Link
                          key={slug}
                          href={`/solutions/${slug}`}
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-warmwhite"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-warmwhite">
                            <Icon className="h-4 w-4 text-graphite" strokeWidth={1.5} />
                          </span>
                          <span className="text-sm font-medium text-graphite">
                            {tSolutions(`${homeKey}.title`)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.key} href={item.href} className={linkClass}>
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LocaleSwitcher light={!solid} />
          <Link
            href="/contact"
            className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-medium text-warmwhite transition-colors hover:bg-graphite"
          >
            {t("businessEnquiry")}
          </Link>
        </div>

        <button
          type="button"
          className="relative h-4 w-6 shrink-0 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 transition-all duration-300 ${
              solid ? "bg-graphite" : "bg-white"
            } ${open ? "top-1/2 -translate-y-1/2 rotate-45" : ""}`}
          />
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 transition-opacity duration-200 ${
              solid ? "bg-graphite" : "bg-white"
            } ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute bottom-0 left-0 h-0.5 w-6 transition-all duration-300 ${
              solid ? "bg-graphite" : "bg-white"
            } ${open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-graphite/10 bg-warmwhite px-6 pb-6 lg:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_ITEMS.map((item) => {
              const active = isNavItemActive(item.href, pathname);
              return (
                <Link
                  key={item.key}
                  href={
                    item.key === "brands"
                      ? { pathname: "/", hash: "brands" }
                      : item.key === "solutions"
                        ? { pathname: "/", hash: "solutions" }
                        : item.href
                  }
                  onClick={() => setOpen(false)}
                  className={`relative w-fit py-1 text-base font-medium text-graphite/80 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand-green after:transition-[width] after:duration-300 after:content-[''] ${
                    active ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex items-center justify-between">
            <LocaleSwitcher />
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-medium text-warmwhite"
            >
              {t("businessEnquiry")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
