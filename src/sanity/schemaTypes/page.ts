import { defineType, defineField } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  description: "Flexible content for About, For Brands, Contact, and similar pages.",
  fields: [
    defineField({
      name: "title",
      title: "Internal title",
      type: "string",
      description: "For the Studio list only — not shown on the site",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "localeString",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "localeText",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        { type: "pageHeroBlock" },
        { type: "textSectionBlock" },
        { type: "cardsSectionBlock" },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
