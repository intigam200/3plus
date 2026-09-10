import type { BrandSummary } from "@/sanity/queries";

/**
 * Fallback content used only until Sanity is configured (see README).
 * Mirrors the brands named explicitly in 3PLUS_Website_Spec.md section 3.
 */
export const seedBrands: BrandSummary[] = [
  {
    _id: "seed-bridge-bio",
    name: "The Bridge Bio",
    slug: "the-bridge-bio",
    tagline: { az: "Bitki əsaslı içkilər və inqrediyentlər", en: "Plant-based drinks and ingredients" },
    isComingSoon: false,
    logo: null,
  },
  {
    _id: "seed-beyond-the-bean",
    name: "Beyond The Bean",
    slug: "beyond-the-bean",
    tagline: { az: "HoReCa üçün spesialty qəhvə", en: "Specialty coffee for HoReCa" },
    isComingSoon: false,
    logo: null,
  },
  {
    _id: "seed-coffee-soon",
    name: "Coffee",
    slug: "coffee",
    tagline: { az: "Tezliklə", en: "Coming soon" },
    isComingSoon: true,
    logo: null,
  },
];
