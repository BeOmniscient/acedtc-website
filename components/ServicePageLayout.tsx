import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface ServicePageProps {
  label: string;
  title: string;
  subtitle: string;
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
  ctaHref = "/contact",
  ctaLabel = "Book a Consultation →",
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
      <section className="bg-[#0A1628] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">{label}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">{title}</h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ctaHref} className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                {ctaLabel}
              </Link>
              <Link href="/diagnostic" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold border border-white/30 text-white hover:border-white hover:bg-white/5 transition-colors">
                Download the Free Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO / PROBLEMS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Who It's For */}
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Who This Is For</p>
              <ul className="space-y-3">
                {whoFor.map(item => (
                  <li key={item} className="flex items-start gap-3 text-[#64748B]">
                    <span className="w-5 h-5 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#2563EB] text-xs font-bold">→</span>
                    </span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Problems */}
            <ScrollReveal delay={100}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Problems This Solves</p>
              <div className="space-y-5">
                {problems.map(p => (
                  <div key={p.title} className="bg-[#F8F7F4] rounded-lg p-4">
                    <p className="text-sm font-semibold text-[#0A1628] mb-1 italic">&ldquo;{p.title}&rdquo;</p>
                    <p className="text-sm text-[#64748B] leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHAT WE DO + INCLUDED */}
      <section className="bg-[#F8F7F4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">What ACEDTC Does</p>
              <p className="text-[#64748B] leading-relaxed text-base">{whatWeDo}</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">What&apos;s Included</p>
              <ul className="space-y-2.5">
                {included.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#64748B]">
                    <span className="text-[#2563EB] flex-shrink-0 mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Example Use Cases</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] tracking-tight mb-12 max-w-xl">
              What This Looks Like in Practice
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc.industry} delay={i * 80}>
                <div className="border border-[#E2E8F0] rounded-xl p-7 h-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">{uc.industry}</p>
                  <p className="text-[#64748B] text-sm leading-relaxed">{uc.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Outcomes */}
          <ScrollReveal>
            <div className="bg-[#0A1628] rounded-xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Expected Outcomes</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {outcomes.map(o => (
                  <div key={o} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-green-400 flex-shrink-0 font-bold mt-0.5">✓</span>
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-[#F8F7F4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">Related Services</p>
            <div className="flex flex-wrap gap-3">
              {related.map(r => (
                <Link key={r.href} href={r.href} className="px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm font-medium text-[#0A1628] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">
                  {r.name} →
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">{finalCtaTitle}</h2>
            <p className="text-white/60 leading-relaxed mb-8">{finalCtaBody}</p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
              Book a Free Consultation →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
