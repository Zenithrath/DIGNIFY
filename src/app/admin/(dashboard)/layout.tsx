import Link from "next/link";
import { Container } from "@/components/ui/container";
import { AdminNav } from "@/components/admin/admin-nav";

export default function AdminDashboardLayout({ children }: LayoutProps<"/admin">) {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-paper">
      <header className="sticky top-0 z-40 border-b border-line-dark bg-ink">
        <Container className="flex h-14 items-center justify-between">
          <Link href="/admin" className="flex items-baseline gap-3">
            <span className="display text-lg">DIGNIFY</span>
            <span className="meta-label text-emerald">/ ADMIN</span>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="link-underline font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-dark transition-colors hover:text-emerald"
            >
              View site
            </Link>
            <a
              href="/api/auth/logout"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-dark transition-colors hover:text-emerald"
            >
              Logout
            </a>
          </div>
        </Container>
      </header>

      <div className="flex flex-1">
        <aside className="hidden w-56 shrink-0 border-r border-line-dark lg:block">
          <nav aria-label="Admin" className="sticky top-14">
            <AdminNav />
          </nav>
        </aside>

        <main className="flex-1">
          <nav aria-label="Admin mobile" className="border-b border-line-dark lg:hidden">
            <AdminNav />
          </nav>
          {children}
        </main>
      </div>
    </div>
  );
}
