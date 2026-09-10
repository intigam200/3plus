"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-graphite/15 bg-white px-4 py-3 text-sm text-graphite placeholder:text-graphite/35 transition-colors focus:border-brand-green focus:outline-none";

export function NotifyForm({ category }: { category: string }) {
  const t = useTranslations("solutionPage.comingSoon");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      company: String(data.get("company") || ""),
      email: String(data.get("email") || ""),
      category,
    };

    try {
      const res = await fetch("/api/notify", {
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
        <h3 className="text-lg font-bold text-graphite">{t("successTitle")}</h3>
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
          <label htmlFor="company" className="text-sm font-medium text-graphite">
            {t("companyLabel")}
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
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-2 ${inputClasses}`}
          />
        </div>
      </div>

      {status === "error" && <p className="mt-4 text-sm text-red-600">{t("errorMessage")}</p>}

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
