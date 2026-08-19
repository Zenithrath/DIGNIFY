import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, isAdminToken } from "@/lib/auth";

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

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/halaman-login-dignify"],
};