export const ADMIN_COOKIE = "dgn_admin";

const encoder = new TextEncoder();

async function sha256Hex(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function adminToken() {
  const password = process.env.ADMIN_PASSWORD ?? "dignify-admin";
  const salt = process.env.ADMIN_SALT ?? "dignify-2026";
  return `dgn-${await sha256Hex(`${password}:${salt}`)}`;
}

export async function isAdminToken(token: string | undefined | null) {
  if (!token || token.length === 0) return false;
  return token === (await adminToken());
}
