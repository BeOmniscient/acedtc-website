import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Book a Growth Consultation | ACEDTC",
  description: "Book a free 45-minute Growth Consultation with ACEDTC. We'll review your business, identify your biggest opportunities, and give you a clear starting point — no commitment required.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Talk Directly to Esad</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Book a Growth Consultation.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              In 45 minutes, we&apos;ll review your current business situation, identify your biggest revenue
              opportunities, and give you a clear, honest starting point — at no cost and no obligation.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Request a Consultation</h2>
                <p className="text-[#64748B] mb-8">Tell us a bit about your business and what you&apos;re working on. We&apos;ll confirm within one business day.</p>

                <form className="space-y-5" action="#" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4] placeholder-[#94a3b8] transition-colors"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4] placeholder-[#94a3b8] transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="block w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4] placeholder-[#94a3b8] transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4] placeholder-[#94a3b8] transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="block w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4] placeholder-[#94a3b8] transition-colors"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                      Industry
                    </label>
                    <select
                      name="industry"
                      className="block w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4] transition-colors"
                    >
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
                    <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                      What&apos;s your biggest challenge right now?
                    </label>
                    <select
                      name="challenge"
                      className="block w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4] transition-colors"
                    >
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
                    <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                      Tell us more about your situation
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="block w-full px-4 py-3 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4] placeholder-[#94a3b8] transition-colors resize-none"
                      placeholder="What's going on in your business? What would a successful outcome look like?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-sm"
                  >
                    Request My Free Growth Consultation →
                  </button>

                  <p className="text-xs text-[#94a3b8] text-center">
                    No commitment. No long-term contract pitch. We&apos;ll confirm within one business day.
                  </p>
                </form>
              </ScrollReveal>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="bg-[#F8F7F4] rounded-xl p-7 mb-6">
                  <h3 className="text-sm font-semibold text-[#0A1628] mb-4">What to expect in the consultation:</h3>
                  <ul className="space-y-3">
                    {[
                      "A direct review of your current lead flow and sales process",
                      "Honest assessment of your biggest revenue opportunities",
                      "A clear recommendation for where to start",
                      "No generic pitch — a real conversation about your business",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#64748B]">
                        <span className="text-[#2563EB] font-bold flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#0A1628] rounded-xl p-7 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Led by</p>
                  <p className="text-white font-semibold text-base mb-0.5">Esad Kajosevic</p>
                  <p className="text-white/50 text-xs mb-4">MBA — Digital Transformation, UC Irvine Paul Merage School of Business</p>
                  <p className="text-white/60 text-sm leading-relaxed italic">
                    &ldquo;Execution drives strategy — not the other way around.&rdquo;
                  </p>
                </div>

                <div className="border border-[#E2E8F0] rounded-xl p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-4">
                    Not ready for a call?
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                    Download the Revenue Leakage Diagnostic — a free scorecard that identifies exactly where
                    your business is losing revenue in under 30 minutes.
                  </p>
                  <a
                    href="/diagnostic"
                    className="text-sm font-semibold text-[#2563EB] hover:underline"
                  >
                    Get the Free Diagnostic →
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
