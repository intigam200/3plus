import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
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
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "solutionCategory" }],
    }),
    defineField({
      name: "shortDescription",
      title: "Short description",
      type: "localeText",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "benefits",
      title: "Key benefits",
      type: "array",
      of: [{ type: "localeString" }],
    }),
    defineField({
      name: "packSize",
      title: "Pack size / case",
      type: "string",
    }),
    defineField({
      name: "application",
      title: "Application",
      type: "localeText",
    }),
    defineField({
      name: "ingredientsAllergens",
      title: "Ingredients / allergens",
      type: "localeText",
    }),
    defineField({
      name: "documents",
      title: "Documents / certificates",
      type: "array",
      of: [{ type: "file" }],
    }),
    defineField({
      name: "featuredOnHome",
      title: "Featured on Home",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "brand.name", media: "images.0" },
  },
});
