import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";
const officeEmail = process.env.OFFICE_EMAIL || "office@3plus.az";

export const canSendEmail = Boolean(resendApiKey);

const resend = canSendEmail ? new Resend(resendApiKey) : null;

// Resend's shared domain — works immediately with no DNS setup. Swap to a
// verified 3plus.az address once the sending domain is verified in Resend.
const FROM = "3PLUS Website <onboarding@resend.dev>";

type RfqEmailInput = {
  name: string;
  company: string;
  email: string;
  phone: string | null;
  enquiryType: string;
  brandInterest: string | null;
  message: string;
};

export async function sendRfqEmail(data: RfqEmailInput) {
  if (!resend) return;

  await resend.emails.send({
    from: FROM,
    to: officeEmail,
    replyTo: data.email,
    subject: `Yeni sorğu (RFQ): ${data.company}`,
    text: [
      `Ad: ${data.name}`,
      `Şirkət: ${data.company}`,
      `Email: ${data.email}`,
      `Telefon: ${data.phone || "-"}`,
      `Sorğu növü: ${data.enquiryType}`,
      `Maraqlanan brend: ${data.brandInterest || "-"}`,
      "",
      "Mesaj:",
      data.message,
    ].join("\n"),
  });
}

type NotifyEmailInput = {
  company: string;
  email: string;
  category: string | null;
};

export async function sendNotifyEmail(data: NotifyEmailInput) {
  if (!resend) return;

  await resend.emails.send({
    from: FROM,
    to: officeEmail,
    replyTo: data.email,
    subject: `Yeni bildiriş abunəliyi: ${data.company}`,
    text: [
      `Şirkət: ${data.company}`,
      `Email: ${data.email}`,
      `Kateqoriya: ${data.category || "-"}`,
    ].join("\n"),
  });
}
