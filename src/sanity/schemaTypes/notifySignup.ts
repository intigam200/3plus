import { defineType, defineField } from "sanity";

export const notifySignup = defineType({
  name: "notifySignup",
  title: "Notify Signup",
  type: "document",
  description: "Interest sign-ups for not-yet-launched categories (e.g. Professional Cleaning).",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Solution slug this sign-up relates to, e.g. professional-cleaning",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted at",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "company", subtitle: "email" },
  },
});
