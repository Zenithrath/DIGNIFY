"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { BrandLockup } from "@/components/layout/brand";

const INTRO_DURATION = 400;
const REVEAL_DURATION = 4000;
const DESKTOP_GRID = { columns: 58, rows: 34 };
const MOBILE_GRID = { columns: 36, rows: 50 };

type Phase = "intro" | "reveal" | "done";

type TileStyle = CSSProperties & {
  "--pixel-delay": string;
};

export function HeroTileLoader() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [isMobile, setIsMobile] = useState(false);
  const grid = isMobile ? MOBILE_GRID : DESKTOP_GRID;

  const tiles = useMemo(() => {
    const longestPath = grid.columns + grid.rows - 2;

    return Array.from({ length: grid.columns * grid.rows }, (_, index) => {
      const row = Math.floor(index / grid.columns);
      const column = index % grid.columns;
      const diagonalDistance = grid.columns - 1 - column + row;
      const ripple = ((row * 7 + column * 11) % 5) * 0.008;

      return {
        id: index,
        style: {
          "--pixel-delay": `${(
            (diagonalDistance / longestPath) * 1.28 + ripple
          ).toFixed(3)}s`,
        } as TileStyle,
      };
    });
  }, [grid.columns, grid.rows]);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 640px)");
    const syncViewport = () => setIsMobile(query.matches);
    const frame = window.requestAnimationFrame(syncViewport);

    query.addEventListener("change", syncViewport);
    return () => {
      window.cancelAnimationFrame(frame);
      query.removeEventListener("change", syncViewport);
    };
  }, []);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setPhase("reveal"), INTRO_DURATION);
    const doneTimer = window.setTimeout(
      () => setPhase("done"),
      INTRO_DURATION + REVEAL_DURATION,
    );

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="dignify-loader"
      data-phase={phase}
      aria-hidden="true"
    >
      <div
        className="dignify-loader__grid"
        style={{
          gridTemplateColumns: `repeat(${grid.columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${grid.rows}, minmax(0, 1fr))`,
        }}
      >
        {tiles.map((tile) => (
          <span
            key={tile.id}
            className={`dignify-loader__tile${phase === "reveal" ? " dignify-loader__tile--reveal" : ""}`}
            style={tile.style}
          />
        ))}
      </div>

      <div className="dignify-loader__identity" data-phase={phase}>
        <BrandLockup tone="paper" className="h-10 w-auto sm:h-14" />
        <p className="dignify-loader__descriptor">Digital studio / 2026</p>
      </div>
    </div>
  );
}
