import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book a Growth Diagnostic | ACEDTC",
  description:
    "Book a free 45-minute growth diagnostic with ACEDTC. We'll review your business, identify your biggest opportunities, and give you a clear starting point. No commitment required.",
};

const fieldClass =
  "block w-full rounded-lg px-4 py-3 text-sm text-ink bg-surface transition-colors";
const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk directly to Esad"
        title="Book a growth diagnostic."
        lede="In 45 minutes we'll review your current situation, identify your biggest revenue opportunities, and give you a clear, honest starting point, at no cost and no obligation."
      />

      <section className="bg-bg py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="mb-2 font-serif text-2xl font-medium text-ink">Request your diagnostic</h2>
                <p className="mb-8 text-ink-2">
                  Tell us a bit about your business and what you're working on. We'll confirm within one business day.
                </p>

                <form className="space-y-5" action="#" method="POST">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Company name <span className="text-neg">*</span></label>
                      <input type="text" name="company" required className={fieldClass} placeholder="Acme Corp" />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input type="tel" name="phone" className={fieldClass} placeholder="(555) 000-0000" />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Industry</label>
                    <select name="industry" className={fieldClass}>
                      <option value="">Select your industry</option>
                      <option>Automotive Retail & Services</option>
                      <option>B2B Professional Services</option>
                      <option>Construction & Trades</option>
                      <option>Financial Services</option>
                      <option>Healthcare & Wellness</option>
                      <option>Real Estate</option>
                      <option>Retail & E-commerce</option>
                      <option>Technology</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>What&apos;s your biggest challenge right now?</label>
                    <select name="challenge" className={fieldClass}>
                      <option value="">Select your primary challenge</option>
                      <option>Lead generation and pipeline</option>
                      <option>Sales follow-up and conversion</option>
                      <option>CRM / systems setup</option>
                      <option>Marketing ROI and attribution</option>
                      <option>Reporting and visibility</option>
                      <option>Operational efficiency</option>
                      <option>Growth strategy and direction</option>
                      <option>All of the above</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Tell us more about your situation</label>
                    <textarea
                      name="message"
                      rows={4}
                      className={`${fieldClass} resize-none`}
                      placeholder="What's going on in your business? What would a successful outcome look like?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-accent-solid px-6 py-3.5 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-ink"
                  >
                    Request My Growth Diagnostic →
                  </button>

                  <p className="text-center text-xs text-muted">
                    No commitment. No contract pitch. We'll confirm within one business day.
                  </p>
                </form>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="mb-6 rounded-xl border border-line bg-surface p-7">
                  <h3 className="mb-4 text-sm font-semibold text-ink">What to expect:</h3>
                  <ul className="space-y-3">
                    {[
                      "A direct review of your current lead flow and sales process",
                      "An honest assessment of your biggest revenue opportunities",
                      "A clear recommendation for where to start",
                      "No generic pitch, a real conversation about your business",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ink-2">
                        <span className="mt-0.5 flex-shrink-0 font-bold text-accent">✓</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 rounded-xl bg-inkwell p-7">
                  <p className="eyebrow mb-3 text-accent">Led by</p>
                  <p className="mb-0.5 text-base font-semibold text-on-dark">Esad Kajosevic</p>
                  <p className="mb-4 text-xs text-on-dark-muted">
                    MBA, Digital Transformation. UC Irvine Paul Merage School of Business.
                  </p>
                  <p className="font-serif text-sm italic leading-relaxed text-on-dark-2">
                    &ldquo;Execution drives strategy, not the other way around.&rdquo;
                  </p>
                </div>

                <div className="rounded-xl border border-line p-7">
                  <p className="eyebrow mb-4 text-muted">Not ready for a call?</p>
                  <p className="mb-4 text-sm leading-relaxed text-ink-2">
                    Download the Revenue Leakage Diagnostic, a free scorecard that identifies exactly where your business
                    is losing revenue in under 30 minutes.
                  </p>
                  <a href="/diagnostic" className="text-sm font-semibold text-accent hover:underline">
                    Get the free diagnostic →
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
