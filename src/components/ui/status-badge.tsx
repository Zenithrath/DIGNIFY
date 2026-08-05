import { cn } from "@/lib/utils";

export function StatusBadge({
  status,
  tone = "light",
  className,
}: {
  status: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-2 py-1 meta-label",
        dark
          ? "border-emerald/60 text-emerald"
          : "border-emerald-deep text-emerald-deep",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 bg-emerald" />
      {status}
    </span>
  );
}