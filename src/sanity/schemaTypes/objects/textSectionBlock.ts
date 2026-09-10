import { defineType, defineField } from "sanity";

export const textSectionBlock = defineType({
  name: "textSectionBlock",
  title: "Text section",
  type: "object",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "localeString" }),
    defineField({ name: "body", title: "Body", type: "localeText" }),
  ],
  preview: {
    select: { title: "heading.en" },
    prepare: ({ title }) => ({ title: title || "Text section" }),
  },
});
