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
  const isClient = status === "Client Project";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-2 py-1 meta-label",
        dark
          ? isClient
            ? "border-emerald/60 text-emerald"
            : "border-gold/60 text-gold"
          : isClient
            ? "border-emerald-deep text-emerald-deep"
            : "border-gold-deep text-gold-deep",
        className,
      )}
    >
      <span aria-hidden className={cn("size-1.5", isClient ? "bg-emerald" : "bg-gold")} />
      {status}
    </span>
  );
}