import { defineType, defineField } from "sanity";

export const localeText = defineType({
  name: "localeText",
  title: "Localized text",
  type: "object",
  fields: [
    defineField({ name: "az", title: "Azerbaijani", type: "text" }),
    defineField({ name: "en", title: "English", type: "text" }),
  ],
});
