"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { THEME_KEY, applyTheme, getStoredTheme, type ThemePreference } from "@/lib/theme";
import { cn } from "@/lib/utils";

const options: Array<{ key: ThemePreference; label: string; icon: typeof Sun }> = [
  { key: "light", label: "Light mode", icon: Sun },
  { key: "dark", label: "Dark mode", icon: Moon },
  { key: "system", label: "System mode", icon: Monitor },
];

export function ThemeToggle({ className }: { className?: string }) {
  const [pref, setPref] = useState<ThemePreference>("system");

  useEffect(() => {
    const stored = getStoredTheme();
    applyTheme(stored);
    const frame = window.requestAnimationFrame(() => setPref(stored));
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (getStoredTheme() === "system") applyTheme("system");
    };
    media.addEventListener("change", onChange);
    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", onChange);
    };
  }, []);

  const select = (key: ThemePreference) => {
    setPref(key);
    window.localStorage.setItem(THEME_KEY, key);
    applyTheme(key);
  };

  return (
    <div
      role="group"
      aria-label="Color mode"
      className={cn("flex items-center border border-line", className)}
    >
      {options.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          type="button"
          aria-pressed={pref === key}
          aria-label={label}
          title={label}
          onClick={() => select(key)}
          className={cn(
            "inline-flex size-9 items-center justify-center transition-colors duration-300",
            pref === key ? "bg-emerald text-ink" : "text-muted hover:bg-pure hover:text-ink-text",
          )}
        >
          <Icon aria-hidden className="size-4" />
        </button>
      ))}
    </div>
  );
}
