import { NextResponse } from "next/server";
import { canWriteToSupabase, supabase } from "@/lib/supabase";
import { sendNotifyEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type NotifyPayload = {
  company?: string;
  email?: string;
  category?: string;
};

export async function POST(request: Request) {
  let body: NotifyPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const company = body.company?.trim() || "";
  const email = body.email?.trim() || "";

  if (!company || !email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  }

  const submission = {
    company,
    email,
    category: body.category?.trim() || null,
    submitted_at: new Date().toISOString(),
  };

  if (canWriteToSupabase && supabase) {
    const { error } = await supabase.from("notify_signups").insert(submission);
    if (error) {
      console.error("Failed to save notify signup to Supabase:", error);
      return NextResponse.json({ ok: false, error: "storage_failed" }, { status: 502 });
    }
  } else {
    console.log("Notify signup (Supabase not configured):", submission);
  }

  try {
    await sendNotifyEmail({
      company,
      email,
      category: submission.category,
    });
  } catch (error) {
    console.error("Failed to send notify signup email:", error);
  }

  return NextResponse.json({ ok: true });
}
