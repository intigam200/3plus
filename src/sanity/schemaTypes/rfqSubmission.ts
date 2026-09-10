import { defineType, defineField } from "sanity";

export const rfqSubmission = defineType({
  name: "rfqSubmission",
  title: "RFQ Submission",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
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
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "enquiryType",
      title: "Enquiry type",
      type: "string",
      options: {
        list: [
          { title: "Request a Quote", value: "quote" },
          { title: "Sample Request", value: "sample" },
          { title: "Partnership", value: "partnership" },
          { title: "General Enquiry", value: "general" },
        ],
      },
    }),
    defineField({
      name: "brandInterest",
      title: "Brand interest",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Closed", value: "closed" },
        ],
      },
      initialValue: "new",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted at",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "company", description: "enquiryType" },
  },
});
