import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { SectionHead, PrimaryBtn, GhostBtn } from "@/components/ui";

interface ServicePageProps {
  label: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  ctaHref?: string;
  ctaLabel?: string;
  whoFor: string[];
  problems: { title: string; body: string }[];
  whatWeDo: string;
  included: string[];
  useCases: { industry: string; body: string }[];
  outcomes: string[];
  related: { name: string; href: string }[];
  finalCtaTitle: string;
  finalCtaBody: string;
}

export default function ServicePageLayout({
  label,
  title,
  subtitle,
  heroImage,
  ctaHref = "/diagnostic",
  ctaLabel = "Book a Growth Diagnostic →",
  whoFor,
  problems,
  whatWeDo,
  included,
  useCases,
  outcomes,
  related,
  finalCtaTitle,
  finalCtaBody,
}: ServicePageProps) {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg pt-28 sm:pt-32 lg:pt-40">
        <div className="ledger-rule pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_75%,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <p className="eyebrow mb-6 flex items-center gap-3 text-muted">
            <span className="h-px w-8 bg-accent" />
            {label}
          </p>
          <h1 className="max-w-4xl font-serif text-[2.3rem] font-medium leading-[1.07] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">{subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryBtn href={ctaHref}>{ctaLabel}</PrimaryBtn>
            <GhostBtn href="/contact">Talk to Esad</GhostBtn>
          </div>
          {heroImage && (
            <div className="mt-14 overflow-hidden rounded-xl border border-line bg-inkwell">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={heroImage} alt="" aria-hidden="true" className="aspect-[21/9] w-full object-cover" />
            </div>
          )}
        </div>
      </section>

      {/* WHO / PROBLEMS */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className="eyebrow mb-5 text-accent">Who this is for</p>
              <ul className="space-y-3">
                {whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="eyebrow mb-5 text-accent">Problems this solves</p>
              <div className="space-y-4">
                {problems.map((p) => (
                  <div key={p.title} className="rounded-lg border border-line bg-surface p-4">
                    <p className="mb-1 font-serif text-base italic text-ink">&ldquo;{p.title}&rdquo;</p>
                    <p className="text-sm leading-relaxed text-ink-2">{p.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO + INCLUDED */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className="eyebrow mb-5 text-accent">What ACEDTC does</p>
              <p className="text-base leading-relaxed text-ink-2">{whatWeDo}</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="eyebrow mb-5 text-accent">What&apos;s included</p>
              <ul className="space-y-2.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-2">
                    <span className="mt-0.5 flex-shrink-0 font-bold text-accent">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead index="→" kicker="Example use cases" title="What this looks like in practice." />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-2">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.industry} delay={i * 70}>
                <div className="card-seam h-full bg-surface p-7">
                  <p className="eyebrow mb-3 text-accent">{uc.industry}</p>
                  <p className="text-sm leading-relaxed text-ink-2">{uc.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 rounded-xl bg-inkwell p-8">
              <p className="eyebrow mb-5 text-accent">Expected outcomes</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-3 text-sm text-on-dark-2">
                    <span className="mt-0.5 flex-shrink-0 font-bold text-pos">✓</span>
                    <span className="leading-relaxed">{o}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="eyebrow mb-4 text-muted">Related services</p>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="rounded-full border border-line bg-bg px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {r.name} →
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-inkwell py-16 text-on-dark sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <h2 className="mb-4 font-serif text-2xl font-medium tracking-tight text-on-dark sm:text-3xl">{finalCtaTitle}</h2>
            <p className="mb-8 leading-relaxed text-on-dark-2">{finalCtaBody}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryBtn href="/diagnostic">Book a Growth Diagnostic →</PrimaryBtn>
              <GhostBtn href="/contact" onDark>Talk to Esad</GhostBtn>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
