type EnquiryPayload = Record<string, unknown>;

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const rows: Array<{ label: string; field: keyof EnquiryPayload }> = [
  { label: "Name", field: "name" },
  { label: "Email", field: "email" },
  { label: "Company", field: "company" },
  { label: "Service", field: "service" },
  { label: "Budget", field: "budget" },
  { label: "Timeline", field: "timeline" },
];

function fieldRows(payload: EnquiryPayload) {
  return rows
    .map(({ label, field }) => {
      const value = clean(payload[field]);
      if (!value) return "";
      return `<tr>
        <td style="padding:8px 0;border-bottom:1px solid #e5e5e5;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#71717a;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:8px 0 8px 24px;border-bottom:1px solid #e5e5e5;font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#18181b;vertical-align:top;">${escapeHtml(value)}</td>
      </tr>`;
    })
    .join("");
}

export function buildEnquiryEmail(payload: EnquiryPayload, reference: string) {
  const description = escapeHtml(clean(payload.description));
  const referenceLink = escapeHtml(clean(payload.reference));
  const service = escapeHtml(clean(payload.service));

  const text = [
    "NEW PROJECT ENQUIRY",
    `Reference: ${reference}`,
    "",
    ...rows
      .map(({ label, field }) => {
        const value = clean(payload[field]);
        return value ? `${label}: ${value}` : "";
      })
      .filter(Boolean),
    "",
    `Description:\n${clean(payload.description) || "(Not provided)"}`,
    referenceLink ? `\nReference link: ${referenceLink}` : "",
    "",
  ].join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f5f5f5;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;">
      <tr>
        <td align="center" style="padding:40px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #d4d4d4;">
            <tr>
              <td style="border-bottom:4px solid #10b981;padding:28px 32px;">
                <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#059669;">Dignify Studio / Incoming Brief</p>
                <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-size:26px;color:#18181b;">New project enquiry</h1>
                <p style="margin:6px 0 0;font-family:monospace;font-size:12px;letter-spacing:0.1em;color:#71717a;">REF ${reference}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${fieldRows(payload)}
                </table>
                <p style="margin:24px 0 8px;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#71717a;">Project description</p>
                <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;color:#18181b;white-space:pre-wrap;">${description}</p>
                ${
                  referenceLink
                    ? `<p style="margin:24px 0 8px;font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#71717a;">Reference link</p>
                <p style="margin:0;font-family:monospace;font-size:13px;color:#059669;word-break:break-all;"><a href="${referenceLink}" style="color:#059669;">${referenceLink}</a></p>`
                    : ""
                }
              </td>
            </tr>
            <tr>
              <td style="border-top:1px solid #e5e5e5;padding:16px 32px;">
                <p style="margin:0;font-family:Helvetica,Arial,sans-serif;font-size:11px;color:#a1a1aa;">Service requested: <strong style="color:#18181b;">${service || "Not specified"}</strong></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  return { subject: `New enquiry ${reference} · ${service || "Dignify"}`, html, text };
}
