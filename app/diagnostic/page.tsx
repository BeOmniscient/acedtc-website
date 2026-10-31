import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { SectionHead, PrimaryBtn } from "@/components/ui";

export const metadata: Metadata = {
  title: "Free Revenue Leakage Diagnostic | ACEDTC",
  description:
    "Download ACEDTC's free Revenue Leakage Diagnostic, a practical scorecard that helps business owners identify where leads are being lost, follow-up is weak, and marketing ROI is unclear.",
};

const zones = [
  { n: "01", name: "Lead Capture", body: "Is every inquiry, web, phone, walk-in, after-hours, making it into a centralized, trackable system?" },
  { n: "02", name: "Speed to Lead", body: "How fast is your business responding to new inquiries? A 5-minute delay cuts conversion rates significantly." },
  { n: "03", name: "Sales Follow-Up", body: "Does follow-up happen consistently, or does it depend on whoever remembered to make the call?" },
  { n: "04", name: "CRM Hygiene", body: "Is your CRM being actively maintained, or is it a graveyard of stale contacts and empty pipeline stages?" },
  { n: "05", name: "Marketing Attribution", body: "Can you connect a specific campaign to a closed sale? Or are investment decisions based on assumptions?" },
  { n: "06", name: "Customer Communication", body: "Are prospects and clients receiving timely, consistent communication throughout the relationship?" },
  { n: "07", name: "Reporting & Accountability", body: "Does leadership have real-time visibility into leads, pipeline, marketing performance, and team activity?" },
];

const ranges = [
  { range: "0-70", label: "Significant Leakage", color: "var(--neg)", body: "Multiple critical gaps exist across your systems. Revenue is being lost at several points at once. The opportunities for improvement are large and implementable." },
  { range: "71-115", label: "Moderate Leakage", color: "#D97706", body: "You have some systems in place but gaps remain. Your biggest opportunities are in automation, attribution, and reporting. Most gaps can be closed within 30 to 60 days." },
  { range: "116-150", label: "Strong Foundation", color: "var(--accent)", body: "Solid systems in most areas. The opportunities are in the optimization layer: tightening attribution, refining follow-up, improving CRM hygiene, and better reporting." },
  { range: "151-175", label: "High-Performing", color: "var(--pos)", body: "Your systems are strong across the board. The opportunity is in continuous optimization: improving conversion rates, refining targeting, and expanding what already works." },
];

const previewBars = [
  { zone: "Lead Capture", pct: 65 },
  { zone: "Speed to Lead", pct: 30 },
  { zone: "Sales Follow-Up", pct: 45 },
  { zone: "CRM Hygiene", pct: 20 },
  { zone: "Marketing Attribution", pct: 35 },
];

const fieldClass = "block w-full rounded-lg px-3 py-2.5 text-sm text-ink bg-surface transition-colors";
const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink";

const faqs = [
  { q: "Is this actually free?", a: "Yes. No credit card. No trial. No catch. We want you to have it because it starts an honest conversation." },
  { q: "What do I do with the results?", a: "Score yourself across 7 categories. Your total maps to a revenue leakage profile and specific next steps. You can implement them yourself or discuss them with our team." },
  { q: "Will someone from ACEDTC contact me?", a: "We'll send you the diagnostic immediately. After that, you'll receive a short email sequence with more context on revenue leakage. If you'd like to discuss your results, you can book a growth diagnostic, which is also free." },
  { q: "How long does it take to complete?", a: "Most business owners complete it in 20 to 30 minutes. It's designed to be honest and practical, not exhaustive." },
];

export default function DiagnosticPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg pt-28 sm:pt-32 lg:pt-40">
        <div className="ledger-rule pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_75%,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow mb-6 flex items-center gap-3 text-muted">
                <span className="h-px w-8 bg-accent" />
                Free resource
              </p>
              <h1 className="font-serif text-[2.2rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Find out where your business is losing revenue, before you spend another dollar on marketing.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2">
                The Revenue Leakage Diagnostic is a free, 30-minute scorecard that shows exactly where leads fall
                through the cracks, follow-up is inconsistent, and marketing dollars go untracked.
              </p>
              <div className="mt-8">
                <PrimaryBtn href="#download">Download the Free Diagnostic →</PrimaryBtn>
              </div>
              <p className="mt-3 text-xs text-muted">No credit card. No sales call required.</p>
            </div>

            {/* Preview card */}
            <div className="hidden lg:block">
              <div className="rounded-xl border border-line bg-surface p-8 shadow-xl shadow-black/5">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-inkwell">
                    <span className="text-xs font-bold text-on-dark">A</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink">Revenue Leakage Diagnostic</p>
                    <p className="eyebrow text-muted">ACEDTC / Free scorecard</p>
                  </div>
                </div>
                <div className="mb-6 space-y-3">
                  {previewBars.map((b) => (
                    <div key={b.zone} className="flex items-center gap-3">
                      <div className="h-2 flex-1 rounded-full bg-surface-2">
                        <div className="h-2 rounded-full bg-accent-solid" style={{ width: `${b.pct}%` }} />
                      </div>
                      <span className="w-32 text-xs text-ink-2">{b.zone}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-neg/30 bg-neg-weak p-4">
                  <p className="tabular mb-1 text-sm font-semibold text-neg">Score: 42 / 175</p>
                  <p className="text-xs text-neg">Moderate revenue leakage. Significant opportunities to recover.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="07"
              kicker="Inside the diagnostic"
              title="The seven revenue leakage zones."
              lede="Every business we audit has gaps in at least some of these seven areas. Most have gaps in all of them. The diagnostic helps you score yourself honestly and see where to focus first."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {zones.slice(0, 6).map((z, i) => (
              <ScrollReveal key={z.n} delay={i * 50}>
                <div className="card-seam h-full bg-surface p-6">
                  <span className="tabular mb-2 block text-sm text-accent">{z.n}</span>
                  <h3 className="mb-2 text-base font-semibold text-ink">{z.name}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{z.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-4 flex items-start gap-4 rounded-xl bg-inkwell p-6">
              <span className="tabular mt-0.5 flex-shrink-0 text-sm text-accent">07</span>
              <div>
                <h3 className="mb-1 text-base font-semibold text-on-dark">{zones[6].name}</h3>
                <p className="text-sm leading-relaxed text-on-dark-2">{zones[6].body}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SCORE RANGES */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="→"
              kicker="Score interpretation"
              title="What your score means."
              lede="The diagnostic produces a composite score out of 175 points. Each range maps to a clear revenue leakage profile and set of recommended next steps."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ranges.map((s, i) => (
              <ScrollReveal key={s.range} delay={i * 70}>
                <div className="h-full rounded-xl border border-line bg-bg p-6" style={{ borderTop: `2px solid ${s.color}` }}>
                  <p className="tabular mb-1 text-2xl font-semibold" style={{ color: s.color }}>{s.range}</p>
                  <p className="mb-3 text-sm font-semibold text-ink">{s.label}</p>
                  <p className="text-sm leading-relaxed text-ink-2">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className="eyebrow mb-4 text-accent">Who this is for</p>
              <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight text-ink">
                This diagnostic was designed for you if...
              </h2>
              <ul className="space-y-3">
                {[
                  "You suspect your business is leaving money on the table but can't pinpoint where",
                  "Lead volume doesn't seem to match your revenue",
                  "You need to connect campaign performance to actual closed business",
                  "You're managing high lead volume with manual, inconsistent systems",
                  "You want a clear starting point before investing in new systems or campaigns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-2">
                    <span className="mt-0.5 flex-shrink-0 text-accent">→</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="rounded-xl border border-line bg-surface p-8">
                <p className="eyebrow mb-2 text-accent">Time commitment</p>
                <p className="tabular mb-1 text-4xl font-semibold text-ink">30 min</p>
                <p className="mb-6 text-sm text-ink-2">to complete the full diagnostic</p>
                <p className="eyebrow mb-2 text-accent">What you&apos;ll have</p>
                <ul className="space-y-2 text-sm text-ink-2">
                  {[
                    "A score across 7 revenue leakage categories",
                    "Clear identification of your highest-priority gaps",
                    "Specific next-step recommendations based on your score",
                    "A starting point for a real conversation with our team",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="font-bold text-accent">✓</span>
                      <span className="leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DOWNLOAD FORM */}
      <section id="download" className="bg-inkwell py-20 text-on-dark sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className="eyebrow mb-4 text-accent">Download the diagnostic</p>
              <h2 className="mb-4 font-serif text-3xl font-medium tracking-tight text-on-dark sm:text-4xl">
                Get the free Revenue Leakage Diagnostic.
              </h2>
              <p className="mb-4 leading-relaxed text-on-dark-2">
                Complete the form and we'll send the diagnostic to your inbox immediately.
              </p>
              <div className="space-y-2 text-sm text-on-dark-muted">
                <p>✓ No credit card required</p>
                <p>✓ No spam, just the diagnostic and a few helpful follow-up emails</p>
                <p>✓ Unsubscribe anytime</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="rounded-xl bg-bg p-8">
                <form className="space-y-4" action="/thank-you" method="GET">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First name <span className="text-neg">*</span></label>
                      <input type="text" name="first_name" required className={fieldClass} placeholder="Jane" />
                    </div>
                    <div>
                      <label className={labelClass}>Last name <span className="text-neg">*</span></label>
                      <input type="text" name="last_name" required className={fieldClass} placeholder="Smith" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Business email <span className="text-neg">*</span></label>
                    <input type="email" name="email" required className={fieldClass} placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label className={labelClass}>Company name <span className="text-neg">*</span></label>
                    <input type="text" name="company" required className={fieldClass} placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className={labelClass}>Industry</label>
                    <select name="industry" className={fieldClass}>
                      <option value="">Select your industry</option>
                      <option>Automotive</option>
                      <option>B2B Services</option>
                      <option>Construction / Trades</option>
                      <option>Healthcare / Wellness</option>
                      <option>Financial Services</option>
                      <option>Real Estate</option>
                      <option>Retail</option>
                      <option>Technology</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Biggest challenge</label>
                    <select name="challenge" className={fieldClass}>
                      <option value="">What are you most focused on?</option>
                      <option>Lead generation</option>
                      <option>Sales follow-up</option>
                      <option>CRM / systems</option>
                      <option>Marketing ROI</option>
                      <option>Reporting / visibility</option>
                      <option>All of the above</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full rounded-md bg-accent-solid px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-ink">
                    Send Me the Diagnostic →
                  </button>
                  <p className="text-center text-xs text-muted">
                    We respect your information. No spam. No third-party sharing.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="mb-8 font-serif text-2xl font-medium text-ink">Quick questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-line pb-6">
                  <h3 className="mb-2 text-sm font-semibold text-ink">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{faq.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
