import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, isAdminToken } from "@/lib/auth";

const siteRedirects: Array<{ from: RegExp; to: (match: RegExpMatchArray) => string }> = [
  { from: /^\/$/, to: () => "/id" },
  { from: /^\/services(\/.*)?$/, to: (m) => `/id/services${m[1] ?? ""}` },
  { from: /^\/portfolio(\/.*)?$/, to: (m) => `/id/portfolio${m[1] ?? ""}` },
  { from: /^\/about$/, to: () => "/id/about" },
  { from: /^\/testimonials$/, to: () => "/id/testimonials" },
  { from: /^\/contact$/, to: () => "/id/contact" },
  { from: /^\/web-development$/, to: () => "/id/jasa-pembuatan-website" },
];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get(ADMIN_COOKIE)?.value;
  const isLoggedIn = await isAdminToken(token);

  if (!isLoggedIn && pathname.startsWith("/admin")) {
    const loginUrl = new URL("/halaman-login-dignify", request.url);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoggedIn && pathname === "/halaman-login-dignify") {
    const adminUrl = new URL("/admin", request.url);
    return NextResponse.redirect(adminUrl);
  }

  for (const redirect of siteRedirects) {
    const match = pathname.match(redirect.from);
    if (match) {
      const target = new URL(redirect.to(match), request.url);
      return NextResponse.redirect(target, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/halaman-login-dignify",
    "/",
    "/services/:path*",
    "/portfolio/:path*",
    "/about",
    "/testimonials",
    "/contact",
    "/web-development",
  ],
};
