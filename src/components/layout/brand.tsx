import Image from "next/image";
import logo from "@/app/LOGO (1).png";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function BrandLogo({ tone = "ink", className }: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src={logo}
        alt=""
        width={1800}
        height={1800}
        sizes="(max-width: 768px) 40px, 48px"
        priority
        className="brand-logo h-10 w-auto sm:h-12"
      />
      <span className={cn("display text-2xl leading-none", tone === "paper" ? "text-paper" : "text-ink")}>
        {site.wordmark}
      </span>
    </span>
  );
}

export function BrandLockup({ tone = "ink", className }: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  return <BrandLogo tone={tone} className={className} />;
}
