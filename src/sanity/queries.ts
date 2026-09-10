import { groq } from "next-sanity";
import { client } from "./client";
import { isSanityConfigured } from "./env";
import { seedBrands } from "@/lib/seed-data";

export type LocaleString = { az?: string; en?: string };

export type BrandSummary = {
  _id: string;
  name: string;
  slug: string;
  tagline?: LocaleString;
  isComingSoon: boolean;
  logo?: { asset?: { _ref: string } } | null;
};

export type ProductSummary = {
  _id: string;
  name: string;
  slug: string;
  shortDescription?: LocaleString;
  images?: { asset?: { _ref: string } }[];
  brand?: { name: string; slug: string };
};

const homeBrandsQuery = groq`*[_type == "brand" && featuredOnHome == true] | order(order asc) {
  _id, name, "slug": slug.current, tagline, isComingSoon, logo
}`;

const featuredProductsQuery = groq`*[_type == "product" && featuredOnHome == true] | order(order asc) {
  _id, name, "slug": slug.current, shortDescription, images,
  "brand": brand->{ name, "slug": slug.current }
}`;

export async function getHomeBrands(): Promise<BrandSummary[]> {
  if (!isSanityConfigured) return seedBrands;
  const results = await client.fetch<BrandSummary[]>(homeBrandsQuery);
  return results.length > 0 ? results : seedBrands;
}

export async function getFeaturedProducts(): Promise<ProductSummary[]> {
  if (!isSanityConfigured) return [];
  return client.fetch<ProductSummary[]>(featuredProductsQuery);
}
