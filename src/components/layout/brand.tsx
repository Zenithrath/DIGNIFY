import Image from "next/image";
import logo from "@/app/Logo No background 1.png";
import { cn } from "@/lib/utils";

export function BrandLogo({ tone = "ink", className }: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <Image
      src={logo}
      alt="Dignify"
      width={1729}
      height={724}
      sizes="(max-width: 768px) 120px, 160px"
      priority
      className={cn("brand-logo h-16 w-auto", tone === "paper" && "brand-logo--paper", className)}
    />
  );
}

export function BrandLockup({ tone = "ink", className }: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  return <BrandLogo tone={tone} className={className} />;
}
