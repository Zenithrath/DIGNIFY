import { cn } from "@/lib/utils";

export function SectionHeader({
  index,
  label,
  title,
  tone = "light",
  id,
  className,
}: {
  index?: string;
  label: string;
  title?: string;
  tone?: "light" | "dark";
  id?: string;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div className={cn("border-b pb-6 sm:pb-8", dark ? "border-line-dark" : "border-line", className)}>
      <div className="flex items-center gap-3">
        {index ? (
          <span className={cn("meta-label", dark ? "text-emerald" : "text-emerald-deep")}>/ {index}</span>
        ) : null}
        <span className={cn("meta-label", dark ? "text-muted-dark" : "text-muted")}>{label}</span>
        <span aria-hidden className={cn("h-px flex-1", dark ? "bg-line-dark" : "bg-line")} />
      </div>
      {title ? (
        <h2 id={id} className={cn("display mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl", dark ? "text-paper" : "text-ink-text")}>
          {title}
        </h2>
      ) : null}
    </div>
  );
}