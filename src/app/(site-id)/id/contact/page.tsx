import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { site } from "@/content/site";
import { seo } from "@/content/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: seo.contactId.title,
  description: seo.contactId.description,
  alternates: {
    canonical: "/id/contact",
    languages: { en: "/contact", id: "/id/contact", "x-default": "/contact" },
  },
  openGraph: {
    title: `${seo.contactId.title} | Dignify`,
    description: seo.contactId.description,
    url: "/id/contact",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Kontak Dignify" }],
  },
};

export default async function IndonesianContactPage() {
  const location = site.locationId;

  return (
    <div lang="id">
      <section aria-labelledby="id-contact-heading" className="bg-ink py-24 text-paper sm:py-32">
        <Container>
          <Reveal>
            <p className="meta-label text-emerald">/ KONTAK</p>
            <h1 id="id-contact-heading" className="display mt-6 max-w-5xl text-[clamp(2.75rem,7vw,7rem)]">
              Ceritakan apa yang mau kamu bangun.
            </h1>
          </Reveal>
          <div className="mt-12 grid grid-cols-12 gap-x-4">
            <Reveal delay={0.08} className="col-span-12 md:col-span-6 lg:col-span-4">
              <p className="text-base leading-relaxed text-muted-dark">
                Semakin jelas struktur yang kamu kasih, semakin berguna balasan pertama kami. Kalau
                kamu masih bingung dengan scope-nya, kirim saja apa adanya, justru di obrolan
                pertama itu scopenya jadi makin jelas.
              </p>
            </Reveal>
            <Reveal delay={0.16} className="col-span-12 mt-10 md:col-span-5 md:col-start-8 md:mt-0">
              <dl className="border-t border-line-dark">
                <div className="flex justify-between border-b border-line-dark py-3">
                  <dt className="meta-label text-muted-dark">EMAIL</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="meta-label text-paper transition-colors hover:text-emerald"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between border-b border-line-dark py-3">
                  <dt className="meta-label text-muted-dark">WHATSAPP</dt>
                  <dd>
                    <a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="meta-label text-paper transition-colors hover:text-emerald"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between border-b border-line-dark py-3">
                  <dt className="meta-label text-muted-dark">MODE</dt>
                  <dd className="meta-label text-paper">{location}</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="meta-label text-muted-dark">KEBIJAKAN</dt>
                  <dd className="meta-label text-paper">TANPA SPAM, TANPA DAFTAR PITCH</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="id-form-heading" className="bg-paper py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="grid grid-cols-12 gap-x-4 gap-y-12">
              <div className="col-span-12 lg:col-span-8">
                <h2 id="id-form-heading" className="sr-only">
                  Formulir pertanyaan proyek
                </h2>
                <ContactForm lang="id" />
              </div>
              <div className="col-span-12 lg:col-span-3 lg:col-start-10">
                <div className="border border-line p-8">
                  <p className="meta-label text-muted">YANG TERJADI SETELAHNYA</p>
                  <ul className="mt-6 space-y-5">
                    {[
                      ["01", "Kami baca", "Brief kamu masuk langsung ke inbox kami, dicatat dengan nomor referensi."],
                      ["02", "Kami balas", "Jawaban polos: bisa bantu atau tidak, dan kami butuh apa."],
                      ["03", "Kami ngobrol", "Konsultasi gratis untuk memetakan proyek sebelum ada penawaran apa pun."],
                    ].map(([index, title, detail]) => (
                      <li key={index}>
                        <p className="meta-label text-emerald-deep">/{index} / {title.toUpperCase()}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="meta-label mt-8 border-t border-line pt-6 text-muted">
                    TANPA TEKANAN, TANPA SPAM, TANPA DAFTAR PITCH.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}