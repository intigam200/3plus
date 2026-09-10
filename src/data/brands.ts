import {
  Award,
  Coffee,
  Flag,
  Flame,
  Globe,
  Heart,
  Leaf,
  LeafyGreen,
  MapPin,
  Palette,
  Sprout,
  Wheat,
  type LucideIcon,
} from "lucide-react";

export type BrandSlug = "sweetbird" | "zuma" | "the-bridge";

export type BrandColors = {
  accent: string;
  accentLight: string;
  accentDark: string;
};

export type BrandProduct = {
  id: string;
  name: string;
  packSize: string;
  categoryKey: string;
  photo?: string;
};

export type BrandFeature = {
  key: string;
  icon: LucideIcon;
};

export type BrandDef = {
  slug: BrandSlug;
  /** Key under the `brands` i18n namespace (name, tagline — shared with Home). */
  homeKey: "sweetbird" | "zuma" | "thebridge";
  /** Key under the `brandPages` i18n namespace (this page's copy). */
  detailKey: "sweetbird" | "zuma" | "thebridge";
  colors: BrandColors;
  logo: string;
  heroPhoto: string;
  storyPhoto: string;
  features: BrandFeature[];
  /** Empty array = no tabs, just a plain grid. */
  categories: string[];
  products: BrandProduct[];
};

export const BRANDS: BrandDef[] = [
  {
    slug: "sweetbird",
    homeKey: "sweetbird",
    detailKey: "sweetbird",
    colors: { accent: "#D4442A", accentLight: "#FEF0ED", accentDark: "#9E2E18" },
    logo: "/images/logos/Sweetbird-Logo_black.png",
    heroPhoto: "/images/photos/Sweetbird-UK-.png",
    storyPhoto: "/images/photos/Sweetbird-UK-.png",
    features: [
      { key: "flavours", icon: Palette },
      { key: "vegan", icon: LeafyGreen },
      { key: "accredited", icon: Award },
      { key: "origin", icon: MapPin },
    ],
    categories: ["frappe", "classicSyrups", "creativeSyrups", "sugarFree"],
    products: [
      {
        id: "caffeFrappe",
        name: "Caffè Frappé",
        packSize: "4 × 1 kg",
        categoryKey: "frappe",
        photo: "/images/products/sweetbird/caffe-frappe.jpg",
      },
      {
        id: "vanillaSyrup",
        name: "Vanilla Syrup",
        packSize: "1 litre",
        categoryKey: "classicSyrups",
        photo: "/images/products/sweetbird/vanilla-syrup.jpg",
      },
      {
        id: "caramelSyrup",
        name: "Caramel Syrup",
        packSize: "1 litre",
        categoryKey: "classicSyrups",
        photo: "/images/products/sweetbird/caramel-syrup.jpg",
      },
      {
        id: "blueCuracaoSyrup",
        name: "Blue Curaçao Syrup",
        packSize: "1 litre",
        categoryKey: "creativeSyrups",
      },
      {
        id: "grenadineSyrup",
        name: "Grenadine Syrup",
        packSize: "1 litre",
        categoryKey: "creativeSyrups",
        photo: "/images/products/sweetbird/grenadine-syrup.jpg",
      },
      {
        id: "saltedCaramelSyrup",
        name: "Salted Caramel Syrup",
        packSize: "1 litre",
        categoryKey: "creativeSyrups",
        photo: "/images/products/sweetbird/salted-caramel-syrup.jpg",
      },
      {
        id: "mangoSyrup",
        name: "Mango Syrup",
        packSize: "1 litre",
        categoryKey: "creativeSyrups",
        photo: "/images/products/sweetbird/mango-syrup.jpg",
      },
      {
        id: "sfCaramelSyrup",
        name: "SF Caramel Syrup",
        packSize: "1 litre",
        categoryKey: "sugarFree",
        photo: "/images/products/sweetbird/sf-caramel-syrup.jpg",
      },
      {
        id: "sfVanillaSyrup",
        name: "SF Vanilla Syrup",
        packSize: "1 litre",
        photo: "/images/products/sweetbird/sf-vanilla-syrup.png",
        categoryKey: "sugarFree",
      },
    ],
  },
  {
    slug: "zuma",
    homeKey: "zuma",
    detailKey: "zuma",
    colors: { accent: "#1B6B5A", accentLight: "#EDF7F4", accentDark: "#0F4D3F" },
    logo: "/images/logos/zuma.png",
    heroPhoto: "/images/photos/zuma.png",
    storyPhoto: "/images/photos/zuma.png",
    features: [
      { key: "indulgent", icon: Flame },
      { key: "natural", icon: Leaf },
      { key: "barista", icon: Coffee },
      { key: "trusted", icon: Globe },
    ],
    categories: ["hotChocolate", "matcha", "chai", "sauces"],
    products: [
      {
        id: "darkHotChocolate",
        name: "Dark Hot Chocolate",
        packSize: "8 × 1 kg",
        categoryKey: "hotChocolate",
        photo: "/images/products/zuma/dark-hot-chocolate.jpg",
      },
      {
        id: "whiteHotChocolate",
        name: "White Hot Chocolate",
        packSize: "8 × 1 kg",
        categoryKey: "hotChocolate",
        photo: "/images/products/zuma/white-hot-chocolate.jpg",
      },
      {
        id: "originalMatcha",
        name: "Original Matcha",
        packSize: "10 × 100 g",
        categoryKey: "matcha",
        photo: "/images/products/zuma/original-matcha.png",
      },
      {
        id: "spicedChai",
        name: "Spiced Chai",
        packSize: "4 × 1 kg",
        categoryKey: "chai",
        photo: "/images/products/zuma/spiced-chai.jpg",
      },
      {
        id: "vanillaChai",
        name: "Vanilla Chai",
        packSize: "4 × 1 kg",
        categoryKey: "chai",
        photo: "/images/products/zuma/vanilla-chai.jpg",
      },
      {
        id: "darkChocolateSauce",
        name: "Dark Chocolate Sauce",
        packSize: "4 × 1.9 L",
        categoryKey: "sauces",
      },
      {
        id: "whiteChocolateSauce",
        name: "White Chocolate Sauce",
        packSize: "4 × 1.9 L",
        categoryKey: "sauces",
      },
    ],
  },
  {
    slug: "the-bridge",
    homeKey: "thebridge",
    detailKey: "thebridge",
    colors: { accent: "#5BA030", accentLight: "#F2F8EC", accentDark: "#3D7020" },
    logo: "/images/logos/logo-thebridge-horizontal-opt.png",
    heroPhoto: "/images/photos/Biodrink-oat-natural_Livello2-e-livello-3.png",
    storyPhoto: "/images/photos/Biodrink-oat-natural_Livello2-e-livello-3.png",
    features: [
      { key: "organic", icon: Sprout },
      { key: "plantBased", icon: Heart },
      { key: "origin", icon: Flag },
      { key: "barista", icon: Wheat },
    ],
    categories: [],
    products: [
      {
        id: "oatDrinkBarista",
        name: "Oat Drink Barista",
        packSize: "1 litre",
        categoryKey: "barista",
        photo: "/images/products/the-bridge/oat-drink-barista.png",
      },
      {
        id: "almondDrinkBarista",
        name: "Almond Drink Barista",
        packSize: "1 litre",
        categoryKey: "barista",
        photo: "/images/products/the-bridge/almond-drink-barista.jpg",
      },
      {
        id: "coconutDrinkBarista",
        name: "Coconut Drink Barista",
        packSize: "1 litre",
        categoryKey: "barista",
        photo: "/images/products/the-bridge/coconut-drink-barista.jpg",
      },
    ],
  },
];

export function getBrandBySlug(slug: string): BrandDef | undefined {
  return BRANDS.find((brand) => brand.slug === slug);
}

export function getBrandProduct(
  brandSlug: string,
  productId: string,
): { brand: BrandDef; product: BrandProduct } | undefined {
  const brand = getBrandBySlug(brandSlug);
  const product = brand?.products.find((item) => item.id === productId);
  if (!brand || !product) return undefined;
  return { brand, product };
}
