import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { BRANDS } from "@/data/brands";
import { SOLUTIONS } from "@/data/solutions";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://3plus.az").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
  ];

  for (const brand of BRANDS) {
    routes.push({ path: `/brands/${brand.slug}`, priority: 0.8 });
    for (const product of brand.products) {
      routes.push({ path: `/brands/${brand.slug}/${product.id}`, priority: 0.5 });
    }
  }

  for (const solution of SOLUTIONS) {
    routes.push({ path: `/solutions/${solution.slug}`, priority: 0.7 });
  }

  const lastModified = new Date();

  return routing.locales.flatMap((locale) =>
    routes.map(({ path, priority }) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified,
      priority,
    })),
  );
}
