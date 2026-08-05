import { NextRequest } from "next/server";

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

  const reference = `DGN-${Date.now().toString(36).toUpperCase()}`;

  return Response.json({ ok: true, reference }, { status: 200 });
}
