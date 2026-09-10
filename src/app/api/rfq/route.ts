import { NextResponse } from "next/server";
import { canWriteToSupabase, supabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RfqPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  brandInterest?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: RfqPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = body.name?.trim() || "";
  const company = body.company?.trim() || "";
  const email = body.email?.trim() || "";
  const message = body.message?.trim() || "";

  if (!name || !company || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const submission = {
    name,
    company,
    email,
    phone: body.phone?.trim() || null,
    enquiry_type: body.enquiryType || "quote",
    brand_interest: body.brandInterest?.trim() || null,
    message,
    status: "new" as const,
    submitted_at: new Date().toISOString(),
  };

  if (canWriteToSupabase && supabase) {
    const { error } = await supabase.from("rfq_submissions").insert(submission);
    if (error) {
      console.error("Failed to save RFQ submission to Supabase:", error);
      return NextResponse.json({ ok: false, error: "storage_failed" }, { status: 502 });
    }
  } else {
    // Supabase isn't configured yet — log so the enquiry isn't silently lost.
    console.log("RFQ submission (Supabase not configured):", submission);
  }

  return NextResponse.json({ ok: true });
}
