"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const adminNav = [
  { href: "/admin", label: "Dashboard", index: "01" },
  { href: "/admin/portfolio", label: "Portfolio", index: "02" },
  { href: "/admin/services", label: "Services", index: "03" },
  { href: "/admin/contact", label: "Contact", index: "04" },
] as const;

export function AdminNav() {
  const pathname = usePathname();

  return (
    <ul>
      {adminNav.map((item) => {
        const active =
          item.href === "/admin"
            ? pathname === "/admin"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <li key={item.href} className="border-b border-line-dark">
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-baseline justify-between px-5 py-4 transition-colors",
                active ? "bg-surface text-emerald" : "hover:bg-surface text-paper",
              )}
            >
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em]">
                {item.label}
              </span>
              <span className={cn("meta-label", active ? "text-emerald" : "text-muted-dark")}>
                {item.index}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
