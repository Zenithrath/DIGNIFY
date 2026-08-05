import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  solid: "bg-ink text-paper hover:bg-emerald-deep hover:text-paper",
  emerald: "bg-emerald text-ink hover:bg-emerald-deep hover:text-paper",
  outline: "border border-ink-text text-ink-text hover:bg-ink hover:text-paper",
  outlineLight: "border border-paper text-paper hover:bg-emerald hover:text-ink",
  ghost: "text-ink-text hover:text-emerald-deep",
  ghostLight: "text-paper hover:text-emerald",
} as const;

const sizes = {
  md: "px-5 py-3 text-xs",
  lg: "px-7 py-4 text-sm",
} as const;

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
};

export function Button({
  href,
  variant = "solid",
  size = "md",
  arrow = false,
  className,
  children,
  onClick,
  type,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "group/btn inline-flex items-center gap-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300",
    variants[variant],
    sizes[size],
    disabled && "cursor-not-allowed opacity-50",
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          aria-hidden
          className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
