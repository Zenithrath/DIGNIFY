"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { BrandLockup } from "@/components/layout/brand";

const TILE_COLUMNS = 8;
const TILE_ROWS = 6;
const TILE_COUNT = TILE_COLUMNS * TILE_ROWS;
const LOADING_DURATION = 1700;
const TILE_EXIT_DURATION = 780;

type TileStyle = CSSProperties & {
  "--tile-delay": string;
  "--tile-exit": string;
  "--tile-color": string;
};

function getTileStyle(index: number): TileStyle {
  const row = Math.floor(index / TILE_COLUMNS);
  const column = index % TILE_COLUMNS;
  const stagger = row * 0.035 + column * 0.028 + ((row + column) % 3) * 0.035;

  return {
    "--tile-delay": `${stagger}s`,
    "--tile-exit": row % 2 === 0 ? "-112%" : "112%",
    "--tile-color": index % 23 === 0 ? "var(--gold)" : index % 17 === 0 ? "var(--emerald)" : "var(--ink)",
  };
}

export function HeroTileLoader() {
  const [progress, setProgress] = useState(0);
  const [opening, setOpening] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    let frame = 0;
    let openingTimer = 0;
    let removeTimer = 0;
    const startedAt = performance.now();

    const updateProgress = (now: number) => {
      const elapsed = now - startedAt;
      const nextProgress = Math.min(100, Math.round((elapsed / LOADING_DURATION) * 100));
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frame = requestAnimationFrame(updateProgress);
        return;
      }

      openingTimer = window.setTimeout(() => setOpening(true), 120);
      removeTimer = window.setTimeout(() => setMounted(false), 120 + TILE_EXIT_DURATION + 80);
    };

    frame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(openingTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="dignify-loader" data-opening={opening || undefined} aria-hidden="true">
      <div className="dignify-loader__content">
        <BrandLockup tone="paper" className="h-10 w-auto sm:h-12" />
        <div className="dignify-loader__meta">
          <span>Digital studio / 2026</span>
          <span>{String(progress).padStart(3, "0")}%</span>
        </div>
        <div className="dignify-loader__progress" role="presentation">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="dignify-loader__tiles">
        {Array.from({ length: TILE_COUNT }, (_, index) => (
          <span key={index} className="dignify-loader__tile" style={getTileStyle(index)} />
        ))}
      </div>
    </div>
  );
}
