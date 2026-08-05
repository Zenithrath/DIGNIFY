"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("Invalid password. Try again.");
        setPassword("");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="border border-line-dark bg-surface/60">
        <div className="flex items-center justify-between border-b border-line-dark px-5 py-3">
          <p className="meta-label text-muted-dark">AUTH / GATE</p>
          <span aria-hidden className="size-1.5 bg-emerald" />
        </div>
        <div className="px-5 py-8 sm:px-8">
          <label htmlFor="admin-password" className="meta-label text-muted-dark">
            PASSWORD
          </label>
          <div className="relative mt-3">
            <input
              id="admin-password"
              name="password"
              type={show ? "text" : "password"}
              autoComplete="current-password"
              autoFocus
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={cn(
                "w-full border border-line-dark bg-ink px-4 py-3.5 pr-12 font-mono text-sm tracking-widest text-paper outline-none transition-colors",
                "placeholder:text-muted-dark/50 focus:border-emerald",
                error && "border-red-500/60",
              )}
              placeholder="••••••••"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "login-error" : undefined}
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              aria-label={show ? "Hide password" : "Show password"}
              className="absolute right-0 top-0 flex size-11 items-center justify-center border-l border-line-dark text-muted-dark transition-colors hover:text-emerald"
            >
              {show ? <EyeOff aria-hidden className="size-4" /> : <Eye aria-hidden className="size-4" />}
            </button>
          </div>
          {error ? (
            <p id="login-error" role="alert" className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-red-400">
              / ERROR — {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={submitting}
            className="group/btn mt-7 inline-flex w-full items-center justify-center gap-2.5 bg-emerald px-7 py-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-emerald-deep hover:text-paper disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span>{submitting ? "Authenticating…" : "Access Dashboard"}</span>
            <ArrowRight
              aria-hidden
              className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-line-dark px-5 py-3">
          <p className="meta-label text-muted-dark">RESTRICTED</p>
          <p className="meta-label text-muted-dark">V01</p>
        </div>
      </div>
    </form>
  );
}
