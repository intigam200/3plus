import { defineType, defineField } from "sanity";

export const brand = defineType({
  name: "brand",
  title: "Brand",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Brand name (kept in one script — brand names are not translated)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "localeString",
      description: "Short line shown on brand cards (e.g. Home → Our Brands)",
    }),
    defineField({
      name: "story",
      title: "Brand story",
      type: "localeText",
    }),
    defineField({
      name: "countryOfOrigin",
      title: "Country of origin",
      type: "string",
    }),
    defineField({
      name: "keyAdvantages",
      title: "Key advantages",
      type: "array",
      of: [{ type: "localeString" }],
    }),
    defineField({
      name: "isComingSoon",
      title: "Coming soon",
      type: "boolean",
      description: "Show as a placeholder card (e.g. \"Coffee — Soon\") with no live brand page",
      initialValue: false,
    }),
    defineField({
      name: "featuredOnHome",
      title: "Featured on Home",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
