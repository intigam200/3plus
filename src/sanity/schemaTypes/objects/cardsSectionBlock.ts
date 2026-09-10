import { defineType, defineField } from "sanity";

export const cardsSectionBlock = defineType({
  name: "cardsSectionBlock",
  title: "Cards section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "localeString" }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        {
          type: "object",
          name: "card",
          fields: [
            defineField({ name: "title", title: "Title", type: "localeString" }),
            defineField({ name: "description", title: "Description", type: "localeText" }),
            defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: "heading.en" },
    prepare: ({ title }) => ({ title: title || "Cards section" }),
  },
});
