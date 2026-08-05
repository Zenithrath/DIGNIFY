import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { LoginForm } from "@/components/admin/login-form";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <section
      aria-labelledby="login-heading"
      className="relative flex min-h-screen flex-col overflow-hidden bg-ink text-paper"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="admin-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#admin-grid)" />
        </svg>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[18%] hidden lg:block">
          <div className="size-44 rounded-full border-[3px] border-line-dark/60" />
        </div>
        <div className="absolute right-[8%] top-[22%] hidden lg:block">
          <div className="size-24 rounded-full border-[3px] border-emerald/40" />
        </div>
        <div className="absolute bottom-[16%] right-[14%] hidden lg:block">
          <svg viewBox="0 0 24 24" className="block h-8 w-8 text-line-dark/60" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>
        <div className="absolute bottom-[20%] left-[12%] hidden lg:block">
          <svg viewBox="0 0 24 24" className="block h-6 w-6 text-emerald/50" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M4 4 L20 20 M20 4 L4 20" />
          </svg>
        </div>
      </div>

      <Container className="relative z-10 flex flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-line-dark py-4">
          <p className="meta-label text-muted-dark">/ ADMIN / MAINTENANCE</p>
          <Link
            href="/"
            className="link-underline font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-dark transition-colors hover:text-emerald"
          >
            ← Back to site
          </Link>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-10 py-16 sm:gap-14">
          <div className="text-center">
            <p className="meta-label text-emerald">DIGNIFY / CONTROL</p>
            <h1 id="login-heading" className="display mt-4 text-[clamp(2.5rem,6vw,4.5rem)]">
              Maintenance
              <br />
              Access.
            </h1>
          </div>
          <LoginForm />
          <p className="max-w-sm text-center font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.14em] text-muted-dark">
            Authorized personnel only. All access attempts are logged.
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-line-dark py-4">
          <p className="meta-label text-muted-dark">SYS / ONLINE</p>
          <p className="meta-label text-muted-dark">DGN ADM 01</p>
        </div>
      </Container>
    </section>
  );
}
