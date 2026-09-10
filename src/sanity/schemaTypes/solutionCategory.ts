import { defineType, defineField } from "sanity";

export const solutionCategory = defineType({
  name: "solutionCategory",
  title: "Solution category",
  type: "document",
  description:
    "Customer-type categories used on Solutions (Coffee Shops, Hotels & Restaurants, Bakeries, Professional) and Corporate & Office Solutions.",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title.en", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "localeText",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "title.en" },
  },
});
