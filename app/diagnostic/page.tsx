import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Free Revenue Leakage Diagnostic | ACEDTC",
  description: "Download ACEDTC's free Revenue Leakage Diagnostic — a practical scorecard that helps business owners identify where leads are being lost, follow-up is weak, and marketing ROI is unclear.",
};

const zones = [
  { n: "01", name: "Lead Capture", body: "Is every inquiry — web, phone, walk-in, after-hours — making it into a centralized, trackable system?" },
  { n: "02", name: "Speed to Lead", body: "How fast is your business responding to new inquiries? A 5-minute delay cuts conversion rates significantly." },
  { n: "03", name: "Sales Follow-Up", body: "Does follow-up happen consistently, or does it depend on whoever remembered to make the call?" },
  { n: "04", name: "CRM Hygiene", body: "Is your CRM being actively maintained — or is it a graveyard of stale contacts and empty pipeline stages?" },
  { n: "05", name: "Marketing Attribution", body: "Can you connect a specific campaign to a closed sale? Or are investment decisions based on assumptions?" },
  { n: "06", name: "Customer Communication", body: "Are prospects and clients receiving timely, consistent communication throughout the relationship?" },
  { n: "07", name: "Reporting & Accountability", body: "Does leadership have real-time visibility into leads, pipeline, marketing performance, and team activity?" },
];

export default function DiagnosticPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Free Resource</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Find Out Where Your Business Is Losing Revenue — Before You Spend Another Dollar on Marketing.
              </h1>
              <p className="text-white/60 text-xl leading-relaxed mb-8">
                The Revenue Leakage Diagnostic is a free, 30-minute scorecard that helps business owners
                identify exactly where leads are falling through the cracks, follow-up is inconsistent,
                and marketing dollars are going untracked.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#download" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                  Download the Free Diagnostic →
                </a>
              </div>
              <p className="mt-3 text-white/40 text-xs">No credit card. No sales call required.</p>
            </div>

            {/* Preview card */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#0A1628] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">A</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A1628]">Revenue Leakage Diagnostic</p>
                    <p className="text-xs text-[#64748B]">ACEDTC · Free Scorecard</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {["Lead Capture", "Speed to Lead", "Sales Follow-Up", "CRM Hygiene", "Marketing Attribution"].map((zone, i) => (
                    <div key={zone} className="flex items-center gap-3">
                      <div className="h-2 rounded-full bg-[#E2E8F0] flex-1">
                        <div
                          className="h-2 rounded-full bg-[#2563EB]"
                          style={{ width: `${[65, 30, 45, 20, 35][i]}%` }}
                        />
                      </div>
                      <span className="text-xs text-[#64748B] w-32">{zone}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-700 mb-1">Score: 42 / 175</p>
                  <p className="text-xs text-red-600">Moderate revenue leakage. Significant opportunities to recover.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Inside the Diagnostic</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4 max-w-2xl">
              The 7 Revenue Leakage Zones
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mb-16 leading-relaxed">
              Every business we audit has gaps in at least some of these seven areas. Most have gaps in
              all of them. The diagnostic helps you score yourself honestly — and see where to focus first.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {zones.slice(0, 6).map((z, i) => (
              <ScrollReveal key={z.n} delay={i * 60}>
                <div className="card-lift bg-[#F8F7F4] rounded-xl p-6 h-full">
                  <span className="text-xs font-mono text-[#2563EB] mb-2 block">{z.n}</span>
                  <h3 className="text-base font-semibold text-[#0A1628] mb-2">{z.name}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{z.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-[#0A1628] rounded-xl p-6 flex items-start gap-4">
              <span className="text-xs font-mono text-[#2563EB] flex-shrink-0 mt-0.5">07</span>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">{zones[6].name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{zones[6].body}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SCORE RANGES */}
      <section className="bg-[#F8F7F4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Score Interpretation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4 max-w-2xl">
              What Your Score Means
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mb-16 leading-relaxed">
              The diagnostic produces a composite score out of 175 points. Each range maps to a clear
              revenue leakage profile and set of recommended next steps.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { range: "0 – 70", label: "Significant Leakage", color: "border-red-300 bg-red-50", textColor: "text-red-700", body: "Multiple critical gaps exist across your systems. Revenue is being lost at several points simultaneously. The opportunities for improvement are large and implementable." },
              { range: "71 – 115", label: "Moderate Leakage", color: "border-amber-300 bg-amber-50", textColor: "text-amber-700", body: "You have some systems in place but gaps remain. Your biggest opportunities are in automation, attribution, and reporting. Most gaps can be closed within 30–60 days." },
              { range: "116 – 150", label: "Strong Foundation", color: "border-blue-300 bg-blue-50", textColor: "text-blue-700", body: "Solid systems in most areas. The opportunities are in the optimization layer — tightening attribution, refining follow-up, improving CRM hygiene, and better reporting." },
              { range: "151 – 175", label: "High-Performing", color: "border-green-300 bg-green-50", textColor: "text-green-700", body: "Your systems are strong across the board. The opportunity is in continuous optimization — improving conversion rates, refining targeting, and expanding what's already working." },
            ].map((s, i) => (
              <ScrollReveal key={s.range} delay={i * 80}>
                <div className={`border-2 ${s.color} rounded-xl p-6 h-full`}>
                  <p className={`text-2xl font-bold ${s.textColor} mb-1`}>{s.range}</p>
                  <p className={`text-sm font-semibold ${s.textColor} mb-3`}>{s.label}</p>
                  <p className="text-[#64748B] text-sm leading-relaxed">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Who This Is For</p>
              <h2 className="text-3xl font-bold text-[#0A1628] tracking-tight mb-6">
                This Diagnostic Was Designed For You If...
              </h2>
              <ul className="space-y-3">
                {[
                  "You suspect your business is leaving money on the table but can't pinpoint where",
                  "Lead volume doesn't seem to match your revenue",
                  "You need to connect campaign performance to actual closed business",
                  "You're managing high lead volume with manual, inconsistent systems",
                  "You want a clear starting point before investing in new systems or campaigns",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-[#64748B] text-sm">
                    <span className="text-[#2563EB] font-bold flex-shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bg-[#F8F7F4] rounded-xl p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-2">Time commitment</p>
                <p className="text-4xl font-bold text-[#0A1628] mb-1">30 min</p>
                <p className="text-[#64748B] text-sm mb-6">to complete the full diagnostic</p>

                <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-2">What you&apos;ll have</p>
                <ul className="space-y-2 text-sm text-[#64748B]">
                  <li className="flex gap-2"><span className="text-[#2563EB] font-bold">✓</span> A score across 7 revenue leakage categories</li>
                  <li className="flex gap-2"><span className="text-[#2563EB] font-bold">✓</span> Clear identification of your highest-priority gaps</li>
                  <li className="flex gap-2"><span className="text-[#2563EB] font-bold">✓</span> Specific next-step recommendations based on your score</li>
                  <li className="flex gap-2"><span className="text-[#2563EB] font-bold">✓</span> A starting point for a real conversation with our team</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DOWNLOAD FORM */}
      <section id="download" className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Download the Diagnostic</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Get the Free Revenue Leakage Diagnostic
              </h2>
              <p className="text-white/60 leading-relaxed mb-4">
                Complete the form and we&apos;ll send the diagnostic to your inbox immediately.
              </p>
              <div className="space-y-2 text-sm text-white/50">
                <p>✓ No credit card required</p>
                <p>✓ No spam — just the diagnostic and a few helpful follow-up emails</p>
                <p>✓ Unsubscribe anytime</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-white rounded-xl p-8">
                <form className="space-y-4" action="/thank-you" method="GET">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="first_name" required className="block w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4]" placeholder="Jane" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="last_name" required className="block w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4]" placeholder="Smith" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" name="email" required className="block w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4]" placeholder="jane@company.com" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="company" required className="block w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4]" placeholder="Acme Corp" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">Industry</label>
                    <select name="industry" className="block w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4]">
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
                    <label className="block text-xs font-semibold text-[#0A1628] uppercase tracking-wide mb-1.5">Biggest Challenge</label>
                    <select name="challenge" className="block w-full px-3 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#0A1628] bg-[#F8F7F4]">
                      <option value="">What are you most focused on?</option>
                      <option>Lead generation</option>
                      <option>Sales follow-up</option>
                      <option>CRM / systems</option>
                      <option>Marketing ROI</option>
                      <option>Reporting / visibility</option>
                      <option>All of the above</option>
                    </select>
                  </div>

                  <button type="submit" className="w-full px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                    Send Me the Diagnostic →
                  </button>

                  <p className="text-xs text-[#94a3b8] text-center">
                    We respect your information. No spam. No third-party sharing.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8">Quick Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Is this actually free?", a: "Yes. No credit card. No trial. No catch. We want you to have it because it starts an honest conversation." },
                { q: "What do I do with the results?", a: "Score yourself across 7 categories. Your total score maps to a revenue leakage profile and specific recommended next steps. You can implement the recommendations yourself or discuss them with our team." },
                { q: "Will someone from ACEDTC contact me?", a: "We'll send you the diagnostic immediately. After that, you'll receive a short email sequence with additional context on revenue leakage. If you'd like to discuss your results, you can book a Growth Systems Review — which is also free." },
                { q: "How long does the diagnostic take to complete?", a: "Most business owners complete it in 20–30 minutes. It's designed to be honest and practical, not exhaustive." },
              ].map(faq => (
                <div key={faq.q} className="border-b border-[#E2E8F0] pb-6">
                  <h3 className="text-sm font-semibold text-[#0A1628] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
