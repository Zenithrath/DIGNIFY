"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Loader2, RotateCcw } from "lucide-react";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type FormErrors = Partial<Record<FieldName, string>>;

type FieldName =
  | "name"
  | "email"
  | "company"
  | "service"
  | "budget"
  | "timeline"
  | "description"
  | "reference";

type Status = { kind: "idle" } | { kind: "submitting" } | { kind: "success"; reference: string } | { kind: "error" };

const serviceOptions = [...services.map((s) => s.title), "Something else"];
const budgetOptions = ["Under $1,000", "$1,000 – $3,000", "$3,000 – $5,000", "$5,000 – $10,000", "$10,000+", "Not sure yet"];
const timelineOptions = ["ASAP", "1–3 months", "3–6 months", "Flexible", "Not sure yet"];

const initialValues: Record<FieldName, string> = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  description: "",
  reference: "",
};

function validate(values: Record<FieldName, string>): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Your name is required.";
  if (!values.email.trim()) {
    errors.email = "An email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.service) errors.service = "Choose the service you need.";
  if (!values.budget) errors.budget = "Choose a budget range — 'Not sure yet' is fine.";
  if (!values.timeline) errors.timeline = "Choose a timeline.";
  if (!values.description.trim()) {
    errors.description = "Tell us about the project.";
  } else if (values.description.trim().length < 20) {
    errors.description = "A little more detail helps us respond usefully (min. 20 characters).";
  }
  if (values.reference.trim() && !/^https?:\/\/\S+$/.test(values.reference.trim())) {
    errors.reference = "Reference link must start with http:// or https://";
  }
  return errors;
}

const fieldBase =
  "w-full border border-line bg-pure px-4 py-3 text-sm text-ink-text placeholder:text-muted transition-colors focus:border-ink";

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} role="alert" className="meta-label mt-2 text-emerald-deep">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const setValue = (name: FieldName) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstKey = Object.keys(nextErrors)[0];
    if (firstKey) {
      document.getElementById(firstKey)?.focus();
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { reference?: string; errors?: FormErrors };
      if (!response.ok || !data.reference) {
        setStatus({ kind: "error" });
        return;
      }
      setStatus({ kind: "success", reference: data.reference });
    } catch {
      setStatus({ kind: "error" });
    }
  };

  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status.kind === "success") successRef.current?.focus();
  }, [status]);

  if (status.kind === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="border border-line bg-pure p-8 sm:p-12">
        <div className="flex items-center gap-3">
          <span aria-hidden className="flex size-8 items-center justify-center bg-emerald text-ink">
            <Check className="size-4" />
          </span>
          <p className="meta-label text-emerald-deep">SUBMISSION RECEIVED</p>
        </div>
        <p className="display mt-8 text-3xl sm:text-4xl">Message logged. Reference {status.reference}.</p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted">
          This endpoint is currently an integration stub — your message has been validated and
          acknowledged, but delivery to an inbox requires the studio&apos;s email service to be
          connected. For immediate contact, use the email address below.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2.5 bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-emerald-deep"
          >
            {site.email}
            <ArrowRight aria-hidden className="size-3.5" />
          </a>
          <button
            type="button"
            onClick={() => {
              setValues(initialValues);
              setStatus({ kind: "idle" });
            }}
            className="inline-flex items-center gap-2.5 border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-text transition-colors hover:bg-ink hover:text-paper"
          >
            <RotateCcw aria-hidden className="size-3.5" />
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-line bg-pure p-8 sm:p-12">
      <div className="grid grid-cols-12 gap-x-4 gap-y-8">
        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="name" className="meta-label block text-muted">
            NAME *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={setValue("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldBase, "mt-3", errors.name && "border-emerald-deep")}
          />
          {errors.name ? <FieldError id="name-error" message={errors.name} /> : null}
        </div>

        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="email" className="meta-label block text-muted">
            EMAIL *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={setValue("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldBase, "mt-3", errors.email && "border-emerald-deep")}
          />
          {errors.email ? <FieldError id="email-error" message={errors.email} /> : null}
        </div>

        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="company" className="meta-label block text-muted">
            COMPANY
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or organization (optional)"
            value={values.company}
            onChange={setValue("company")}
            className={cn(fieldBase, "mt-3")}
          />
        </div>

        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="service" className="meta-label block text-muted">
            SERVICE NEEDED *
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={setValue("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={cn(fieldBase, "mt-3", !values.service && "text-muted", errors.service && "border-emerald-deep")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? <FieldError id="service-error" message={errors.service} /> : null}
        </div>

        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="budget" className="meta-label block text-muted">
            BUDGET *
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={setValue("budget")}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            className={cn(fieldBase, "mt-3", !values.budget && "text-muted", errors.budget && "border-emerald-deep")}
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budget ? <FieldError id="budget-error" message={errors.budget} /> : null}
        </div>

        <div className="col-span-12 sm:col-span-6">
          <label htmlFor="timeline" className="meta-label block text-muted">
            TIMELINE *
          </label>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={setValue("timeline")}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
            className={cn(fieldBase, "mt-3", !values.timeline && "text-muted", errors.timeline && "border-emerald-deep")}
          >
            <option value="" disabled>
              Select a timeline
            </option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.timeline ? <FieldError id="timeline-error" message={errors.timeline} /> : null}
        </div>

        <div className="col-span-12">
          <label htmlFor="description" className="meta-label block text-muted">
            PROJECT DESCRIPTION *
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            placeholder="What are you building, what does success look like, and what is holding you back?"
            value={values.description}
            onChange={setValue("description")}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "description-error" : undefined}
            className={cn(fieldBase, "mt-3 resize-y", errors.description && "border-emerald-deep")}
          />
          {errors.description ? <FieldError id="description-error" message={errors.description} /> : null}
        </div>

        <div className="col-span-12">
          <label htmlFor="reference" className="meta-label block text-muted">
            REFERENCE LINK
          </label>
          <input
            id="reference"
            name="reference"
            type="url"
            placeholder="https:// — a site, spec, or file you want us to look at"
            value={values.reference}
            onChange={setValue("reference")}
            aria-invalid={Boolean(errors.reference)}
            aria-describedby={errors.reference ? "reference-error" : undefined}
            className={cn(fieldBase, "mt-3", errors.reference && "border-emerald-deep")}
          />
          {errors.reference ? <FieldError id="reference-error" message={errors.reference} /> : null}
        </div>
      </div>

      <div className="mt-10">
        {status.kind === "error" ? (
          <p role="alert" className="meta-label mb-6 border border-emerald-deep bg-cream px-4 py-3 text-emerald-deep">
            SUBMISSION FAILED — CHECK YOUR CONNECTION AND TRY AGAIN.
          </p>
        ) : null}
        <button
          type="submit"
          disabled={status.kind === "submitting"}
          className="inline-flex items-center gap-2.5 bg-emerald px-7 py-4 font-mono text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:bg-emerald-deep hover:text-paper disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status.kind === "submitting" ? (
            <Loader2 aria-hidden className="size-4 animate-spin" />
          ) : (
            <ArrowRight aria-hidden className="size-4" />
          )}
          {status.kind === "submitting" ? "Sending…" : "Send the brief"}
        </button>
        <p className="meta-label mt-4 text-muted">
          FIELDS MARKED * ARE REQUIRED. DIRECT LINE: {site.email}
        </p>
      </div>
    </form>
  );
}