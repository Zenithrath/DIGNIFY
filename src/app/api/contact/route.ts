import { NextRequest } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";
import { buildEnquiryEmail } from "@/lib/contact-email";

const required = ["name", "email", "service", "budget", "timeline", "description"] as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlPattern = /^https?:\/\/\S+$/;

function validate(payload: Record<string, unknown>) {
  const errors: Record<string, string> = {};
  for (const field of required) {
    const value = typeof payload[field] === "string" ? payload[field].trim() : "";
    if (!value) {
      errors[field] = `${field} is required.`;
    }
  }
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (email && !emailPattern.test(email)) {
    errors.email = "Invalid email address.";
  }
  const reference = typeof payload.reference === "string" ? payload.reference.trim() : "";
  if (reference && !urlPattern.test(reference)) {
    errors.reference = "Reference link must start with http:// or https://";
  }
  return errors;
}

export async function POST(request: NextRequest) {
  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!payload) {
    return Response.json({ errors: { form: "Invalid request body." } }, { status: 400 });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { errors: { form: "Email delivery is not configured. Please contact us directly." } },
      { status: 503 },
    );
  }

  const reference = `DGN-${Date.now().toString(36).toUpperCase()}`;
  const { subject, html, text } = buildEnquiryEmail(payload, reference);

  const resend = new Resend(apiKey);
  const replyToEmail = typeof payload.email === "string" ? payload.email.trim() : "";
  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM ?? "Dignify Studio <onboarding@resend.dev>",
    to: site.email,
    ...(replyToEmail ? { replyTo: replyToEmail } : {}),
    subject,
    html,
    text,
  });

  if (error) {
    console.error("Resend delivery failed:", error);
    return Response.json({ errors: { form: "Email delivery failed. Please try again." } }, { status: 502 });
  }

  return Response.json({ ok: true, reference }, { status: 200 });
}
