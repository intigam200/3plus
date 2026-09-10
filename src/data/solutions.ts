import { Coffee, Cookie, SprayCan, UtensilsCrossed, type LucideIcon } from "lucide-react";

export type SolutionSlug =
  | "coffee-shops"
  | "hotels-restaurants"
  | "bakeries"
  | "professional-cleaning";

export type SolutionDef = {
  slug: SolutionSlug;
  /** Key under the `solutions` i18n namespace (Home page teaser cards). */
  homeKey: "coffeeShops" | "hotelsRestaurants" | "bakeries" | "cleaning";
  /** Key under the `solutionPages` i18n namespace (this detail page's copy). */
  detailKey: "coffeeShops" | "hotelsRestaurants" | "bakeries" | "professionalCleaning";
  icon: LucideIcon;
  photo?: string;
  /** Ids into the `productCatalog` i18n namespace. */
  productIds: string[];
  comingSoon?: boolean;
};

export const SOLUTIONS: SolutionDef[] = [
  {
    slug: "coffee-shops",
    homeKey: "coffeeShops",
    detailKey: "coffeeShops",
    icon: Coffee,
    photo: "/images/photos/coffee.png",
    productIds: [
      "sweetbirdVanillaSyrup",
      "sweetbirdCaramelSyrup",
      "sweetbirdCaffeFrappe",
      "zumaDarkHotChocolate",
      "zumaOriginalMatcha",
      "bridgeOatBarista",
      "bridgeAlmondBarista",
    ],
  },
  {
    slug: "hotels-restaurants",
    homeKey: "hotelsRestaurants",
    detailKey: "hotelsRestaurants",
    icon: UtensilsCrossed,
    photo: "/images/photos/hotel.png",
    productIds: [
      "bridgeOatBarista",
      "bridgeAlmondBarista",
      "bridgeCoconutBarista",
      "zumaSpicedChai",
      "zumaVanillaChai",
      "zumaDarkHotChocolate",
      "sweetbirdVanillaSyrup",
      "sweetbirdCaramelSyrup",
    ],
  },
  {
    slug: "bakeries",
    homeKey: "bakeries",
    detailKey: "bakeries",
    icon: Cookie,
    photo: "/images/photos/bakery.png",
    productIds: [
      "zumaDarkChocolateSauce",
      "zumaWhiteChocolateSauce",
      "zumaOriginalMatcha",
      "sweetbirdCaffeFrappe",
      "sweetbirdGrenadineSyrup",
    ],
  },
  {
    slug: "professional-cleaning",
    homeKey: "cleaning",
    detailKey: "professionalCleaning",
    icon: SprayCan,
    productIds: [],
    comingSoon: true,
  },
];

export function getSolutionBySlug(slug: string): SolutionDef | undefined {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}
