import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { team } from "@/content/team";
import { processSteps } from "@/content/process";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: { index: false, follow: false },
};

function StatCell({
  label,
  value,
  note,
}: {
  label: string;
  value: string | number;
  note?: string;
}) {
  return (
    <div className="border border-line-dark">
      <div className="flex items-center justify-between border-b border-line-dark px-4 py-2">
        <p className="meta-label text-muted-dark">{label}</p>
        <span aria-hidden className="size-1.5 bg-emerald" />
      </div>
      <div className="px-4 py-5">
        <p className="display text-4xl">{value}</p>
        {note ? <p className="meta-label mt-2 text-muted-dark">{note}</p> : null}
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const systemRows = [
    ["Framework", "Next.js 16.3.0"],
    ["Render", "React 19.2.8"],
    ["Runtime", "Node.js"],
    ["Mode", "Static + SSG"],
  ] as const;

  const contentRows = [
    { label: "Projects", value: projects.length, href: "/admin/portfolio", note: "Portfolio items" },
    { label: "Services", value: services.length, href: "/admin/content", note: "Service definitions" },
    { label: "Team", value: team.length, href: "/admin/content", note: "Studio members" },
    { label: "Process steps", value: processSteps.length, href: "/admin/content", note: "Process sequence" },
  ] as const;

  return (
    <Container className="py-10 sm:py-14">
      <div className="flex items-end justify-between border-b border-line-dark pb-6">
        <div>
          <p className="meta-label text-emerald">/ DASHBOARD</p>
          <h1 className="display mt-3 text-4xl sm:text-5xl">System Overview</h1>
        </div>
        <p className="meta-label hidden text-muted-dark sm:block">DGN ADM 01</p>
      </div>

      <section aria-labelledby="content-stats" className="mt-10">
        <div className="flex items-center justify-between border-b border-line-dark pb-3">
          <h2 id="content-stats" className="meta-label text-paper">
            / CONTENT STATS
          </h2>
          <span className="meta-label text-muted-dark">LIVE FROM CONTENT LAYER</span>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4">
          {contentRows.map((row) => (
            <div key={row.label} className="col-span-12 sm:col-span-6 lg:col-span-3">
              <Link href={row.href} className="block transition-opacity hover:opacity-80">
                <StatCell label={row.label} value={row.value} note={row.note} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 grid grid-cols-12 gap-4">
        <section aria-labelledby="system-status" className="col-span-12 lg:col-span-5">
          <div className="flex items-center justify-between border-b border-line-dark pb-3">
            <h2 id="system-status" className="meta-label text-paper">
              / SYSTEM STATUS
            </h2>
            <span className="meta-label text-emerald">● ONLINE</span>
          </div>
          <dl className="mt-4 border border-line-dark">
            {systemRows.map(([k, v], i) => (
              <div
                key={k}
                className={cn(
                  "flex items-center justify-between px-4 py-3",
                  i > 0 && "border-t border-line-dark",
                )}
              >
                <dt className="meta-label text-muted-dark">{k}</dt>
                <dd className="font-mono text-xs text-paper">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="quick-actions" className="col-span-12 lg:col-span-7">
          <div className="flex items-center justify-between border-b border-line-dark pb-3">
            <h2 id="quick-actions" className="meta-label text-paper">
              / QUICK ACTIONS
            </h2>
            <span className="meta-label text-muted-dark">NAVIGATE</span>
          </div>
          <div className="mt-4 grid grid-cols-12 gap-4">
            {[
              { href: "/admin/portfolio", label: "Manage projects", desc: "CRUD portfolio items, photos, case studies" },
              { href: "/admin/content", label: "Edit content", desc: "Services, team, values, process steps" },
              { href: "/admin/media", label: "Media library", desc: "Upload and manage images" },
            ].map((action, i) => (
              <Link
                key={action.href}
                href={action.href}
                className={cn(
                  "group col-span-12 border border-line-dark p-5 transition-colors hover:border-emerald",
                  i < 2 && "sm:col-span-6",
                  i === 2 && "sm:col-span-12",
                )}
              >
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper transition-colors group-hover:text-emerald">
                    {action.label}
                  </p>
                  <span className="meta-label text-muted-dark">/ {String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-2 text-sm text-muted-dark">{action.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
