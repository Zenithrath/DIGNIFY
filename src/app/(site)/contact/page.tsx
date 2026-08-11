import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/content/site";
import { seo } from "@/content/seo";
import { fetchStudioSettingsFromDb } from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  alternates: {
    canonical: "/contact",
    languages: { en: "/contact", id: "/id", "x-default": "/contact" },
  },
  openGraph: {
    title: `${seo.contact.title} | Dignify`,
    description: seo.contact.description,
    url: "/contact",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact Dignify" }],
  },
};

export default async function ContactPage() {
  const studioSettings = await fetchStudioSettingsFromDb().catch(() => null);
  const email = studioSettings?.email ?? site.email;
  const location = studioSettings?.location ?? site.location;

  return (
    <>
      <section aria-labelledby="contact-heading" className="bg-ink py-24 text-paper sm:py-32">
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ CONTACT</p>
            <h1 id="contact-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              Tell us what you&apos;re building.
            </h1>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-x-4">
            <Reveal delay={0.08} className="col-span-12 md:col-span-6 lg:col-span-4">
              <p className="text-base leading-relaxed text-muted-dark">
                The more structure you give us, the more useful our first reply will be. If you
                are unsure about scope, send it anyway. The first conversation is where we make the
                scope clearer.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="col-span-12 mt-10 md:col-span-5 md:col-start-8 md:mt-0">
              <dl className="border-t border-line-dark">
                <div className="flex justify-between border-b border-line-dark py-3">
                  <dt className="meta-label text-muted-dark">EMAIL</dt>
                  <dd>
                    <a
                      href={`mailto:${email}`}
                      className="meta-label text-paper transition-colors hover:text-emerald"
                    >
                      {email}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between border-b border-line-dark py-3">
                  <dt className="meta-label text-muted-dark">MODE</dt>
                  <dd className="meta-label text-paper">{location}</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="meta-label text-muted-dark">POLICY</dt>
                  <dd className="meta-label text-paper">NO SPAM, NO PITCH LISTS</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="form-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 gap-x-4 gap-y-12">
              <div className="col-span-12 lg:col-span-8">
                <h2 id="form-heading" className="sr-only">
                  Project enquiry form
                </h2>
                <ContactForm />
              </div>
              <div className="col-span-12 lg:col-span-3 lg:col-start-10">
                <div className="border border-line p-8">
                  <p className="meta-label text-muted">WHAT HAPPENS NEXT</p>
                  <ul className="mt-6 space-y-5">
                    {[
                      ["01", "We read it", "Your brief lands directly in our inbox, logged with a reference number."],
                      ["02", "We reply", "A plain answer: whether we can help, and what we would need."],
                      ["03", "We talk", "A free consultation to scope the project before anything is proposed."],
                    ].map(([index, title, detail]) => (
                      <li key={index}>
                        <p className="meta-label text-emerald-deep">/{index} / {title.toUpperCase()}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="meta-label mt-8 border-t border-line pt-6 text-muted">
                    NO PRESSURE, NO SPAM, NO PITCH LISTS.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
