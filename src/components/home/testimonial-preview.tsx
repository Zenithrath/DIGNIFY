import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { testimonialsState } from "@/content/testimonials";

export function TestimonialPreview() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-cream py-24 sm:py-32">
      <Container>
        <SectionHeader index="07" label="TESTIMONIALS" title="Word from clients — when it exists." id="testimonials-heading" />
        <Reveal className="mt-14">
          <div className="grid grid-cols-12 gap-x-4 border border-line bg-pure">
            <div className="col-span-12 flex flex-col justify-between gap-8 p-8 sm:p-12 lg:col-span-8">
              <div>
                <div className="flex items-center gap-3">
                  <span aria-hidden className="size-2 bg-gold" />
                  <p className="meta-label text-muted">STATUS — NO PUBLIC TESTIMONIALS YET</p>
                </div>
                <p className="mt-8 max-w-2xl text-2xl leading-snug sm:text-3xl">
                  Dignify is a young studio. We will not manufacture praise to fill a page — when
                  real client feedback exists, it will be published here with permission.
                </p>
              </div>
              <Link
                href="/testimonials"
                className="group inline-flex w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-text"
              >
                <span className="link-underline">See the full policy</span>
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="col-span-12 border-t border-line bg-ink p-8 text-paper sm:p-12 lg:col-span-4 lg:border-l lg:border-t-0">
              <p className="meta-label text-gold">WHAT WE WILL SHOW</p>
              <ul className="mt-6 space-y-4">
                {testimonialsState.whatWeWillShow.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-dark">
                    <span aria-hidden className="mt-[7px] size-1.5 shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="meta-label mt-10 text-muted-dark">POLICY / HONESTY FIRST</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}