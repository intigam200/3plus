"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

const ENQUIRY_TYPES = ["quote", "sample", "partnership", "general"] as const;
const BRANDS = ["sweetbird", "zuma", "thebridge"] as const;

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-graphite/15 bg-white px-4 py-3 text-sm text-graphite placeholder:text-graphite/35 transition-colors focus:border-brand-green focus:outline-none";

export function RfqForm() {
  const t = useTranslations("contact.form");
  const tBrands = useTranslations("brands");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      enquiryType: String(data.get("enquiryType") || "quote"),
      brandInterest: String(data.get("brandInterest") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#E8E8E3] bg-white p-8 text-center">
        <h3 className="text-xl font-bold text-graphite">{t("successTitle")}</h3>
        <p className="mt-2 text-sm text-graphite/60">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#E8E8E3] bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-graphite">
            {t("name")}
          </label>
          <input id="name" name="name" type="text" required className={`mt-2 ${inputClasses}`} />
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-graphite">
            {t("company")}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className={`mt-2 ${inputClasses}`}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-graphite">
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-2 ${inputClasses}`}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-graphite">
            {t("phone")}
          </label>
          <input id="phone" name="phone" type="tel" className={`mt-2 ${inputClasses}`} />
        </div>

        <div>
          <label htmlFor="enquiryType" className="text-sm font-medium text-graphite">
            {t("enquiryType")}
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            defaultValue="quote"
            className={`mt-2 ${inputClasses}`}
          >
            {ENQUIRY_TYPES.map((key) => (
              <option key={key} value={key}>
                {t(`enquiryTypes.${key}`)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="brandInterest" className="text-sm font-medium text-graphite">
            {t("brandInterest")}
          </label>
          <select
            id="brandInterest"
            name="brandInterest"
            defaultValue=""
            className={`mt-2 ${inputClasses}`}
          >
            <option value="">{t("brandInterestPlaceholder")}</option>
            {BRANDS.map((key) => (
              <option key={key} value={tBrands(`${key}.name`)}>
                {tBrands(`${key}.name`)}
              </option>
            ))}
            <option value="other">{t("brandOther")}</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-graphite">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("messagePlaceholder")}
          className={`mt-2 ${inputClasses}`}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">{t("errorMessage")}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 rounded-full bg-brand-green px-7 py-3.5 text-sm font-medium text-warmwhite transition-colors duration-300 hover:bg-graphite disabled:opacity-60"
      >
        {status === "submitting" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
