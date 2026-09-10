import { defineType, defineField } from "sanity";

export const pageHeroBlock = defineType({
  name: "pageHeroBlock",
  title: "Hero block",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "localeString" }),
    defineField({ name: "subheading", title: "Subheading", type: "localeText" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    select: { title: "heading.en" },
    prepare: ({ title }) => ({ title: title || "Hero block" }),
  },
});
