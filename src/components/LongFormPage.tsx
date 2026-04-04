import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type LongFormSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  sections: LongFormSection[];
  relatedLinks?: { label: string; href: string }[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function LongFormPage({
  eyebrow,
  title,
  lead,
  sections,
  relatedLinks,
  ctaHref = "/#contact",
  ctaLabel = "Get in touch",
}: Props) {
  return (
    <div className="min-h-screen bg-[#080809] px-2.5 pb-2.5 pt-2.5 sm:px-4 sm:pb-4 sm:pt-4 md:px-5 md:pb-5 md:pt-5">
      <div className="relative mx-auto max-w-[1400px] overflow-x-clip rounded-[1.75rem] border border-white/[0.07] bg-[#111113] shadow-shell sm:rounded-[2rem]">
        <Navbar />
        <main
          id="main-content"
          className="border-t border-white/[0.06] bg-[#111113] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        >
          <article className="mx-auto max-w-3xl lg:max-w-[40rem]">
            <span className="label-caps text-accent">{eyebrow}</span>
            <h1 className="luxury-title mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {title}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-text-secondary sm:text-xl">
              {lead}
            </p>

            {sections.map((section, i) => (
              <section
                key={section.heading}
                className={
                  i === 0
                    ? "mt-10"
                    : "mt-12 border-t border-white/[0.06] pt-12"
                }
              >
                <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-text-muted">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 list-disc space-y-2.5 pl-5 text-base leading-relaxed text-text-muted marker:text-accent/70">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {relatedLinks && relatedLinks.length > 0 && (
              <div className="mt-14 rounded-[1.25rem] border border-white/[0.06] bg-[#17171a] p-6 sm:p-8">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Related
                </h2>
                <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {relatedLinks.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className="text-sm font-medium text-accent hover:text-accent/85 underline-offset-2 hover:underline"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={ctaHref}
              className="mt-12 inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-accent/25 hover:text-white touch-manipulation"
            >
              {ctaLabel}
            </a>
          </article>
        </main>
        <Footer />
      </div>
    </div>
  );
}
