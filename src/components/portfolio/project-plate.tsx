import { cn } from "@/lib/utils";

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const variants = [
  {
    bg: "var(--color-ink)",
    fg: "var(--color-paper)",
    sub: "var(--color-muted-dark)",
    accent: "var(--color-emerald)",
    numberPos: [48, 330] as const,
    labelPos: [48, 404] as const,
    cut: [[0, 0], [260, 0], [180, 500], [0, 500]] as const,
  },
  {
    bg: "var(--color-pure)",
    fg: "var(--color-ink-text)",
    sub: "var(--color-muted)",
    accent: "var(--color-emerald)",
    numberPos: [320, 180] as const,
    labelPos: [48, 404] as const,
    cut: [[800, 500], [800, 240], [560, 500]] as const,
  },
  {
    bg: "var(--color-surface)",
    fg: "var(--color-text-soft)",
    sub: "var(--color-muted-dark)",
    accent: "var(--color-emerald)",
    numberPos: [48, 180] as const,
    labelPos: [48, 404] as const,
    cut: [[0, 0], [800, 0], [800, 120]] as const,
  },
] as const;

function GridLines({ step, max, span, fg }: { step: number; max: number; span: number; fg: string }) {
  return (
    <g stroke={fg} strokeOpacity={0.14} strokeWidth={1} vectorEffect="non-scaling-stroke">
      {Array.from({ length: Math.floor(max / step) - 1 }, (_, i) => (i + 1) * step).map((x) => (
        <line key={`v${x}`} x1={x} y1={0} x2={x} y2={span} />
      ))}
      {Array.from({ length: Math.floor(span / step) - 1 }, (_, i) => (i + 1) * step).map((y) => (
        <line key={`h${y}`} x1={0} y1={y} x2={max} y2={y} />
      ))}
    </g>
  );
}

export function ProjectPlate({
  slug,
  index,
  category,
  year,
  className,
}: {
  slug: string;
  index: string;
  category: string;
  year: number;
  className?: string;
}) {
  const hash = hashString(slug);
  const variant = variants[hash % variants.length];
  const frame = (hash >> 3) % 60 + 24;

  const number = String(hash % 97).padStart(2, "0");
  const [nx, ny] = variant.numberPos;
  const [lx, ly] = variant.labelPos;

  return (
    <svg
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${category} — abstract system plate ${index}`}
      className={cn("block h-full w-full", className)}
    >
      <rect width={800} height={500} fill={variant.bg} />
      <GridLines step={frame} max={800} span={500} fg={variant.fg} />
      <rect
        x={24}
        y={24}
        width={752}
        height={452}
        fill="none"
        stroke={variant.fg}
        strokeOpacity={0.55}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
      <polygon points={variant.cut.map((p) => p.join(",")).join(" ")} fill={variant.fg} opacity={0.06} />
      <text
        x={nx}
        y={ny}
        fill={variant.fg}
        fontSize={220}
        fontFamily="var(--font-display)"
        letterSpacing="0.02em"
      >
        {number}
      </text>
      <rect x={nx} y={ny + 24} width={42} height={6} fill={variant.accent} />
      <text x={lx} y={ly} fill={variant.sub} fontSize={13} fontFamily="var(--font-mono)" letterSpacing="0.18em">
        SYS / {index} · {category.toUpperCase()} / {year}
      </text>
      <circle cx={766} cy={26} r={3} fill={variant.accent} />
      <line
        x1={752}
        y1={476}
        x2={776}
        y2={476}
        stroke={variant.fg}
        strokeOpacity={0.5}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={764}
        y1={464}
        x2={764}
        y2={488}
        stroke={variant.fg}
        strokeOpacity={0.5}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
