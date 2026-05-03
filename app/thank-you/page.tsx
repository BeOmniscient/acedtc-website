import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | ACEDTC Revenue Leakage Diagnostic",
  description: "Your Revenue Leakage Diagnostic is on its way. Here's what to do next.",
};

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-[#0A1628] pt-32 pb-20 sm:pt-40 sm:pb-28 min-h-screen flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center w-full">
          {/* Checkmark icon */}
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">You&apos;re All Set</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Your Revenue Leakage Diagnostic Is On Its Way.
          </h1>
          <p className="text-white/60 text-xl leading-relaxed mb-12">
            Check your inbox — the PDF will be there within the next few minutes.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
            {[
              { n: "1", title: "Read the overview first", body: "The first two pages explain the 7 Revenue Leakage Zones and why they matter. Read those before you score yourself." },
              { n: "2", title: "Score yourself honestly", body: "A score that reflects your actual situation is the one that will help you most. Resist the instinct to give yourself higher marks than you've earned." },
              { n: "3", title: "Note your lowest zones", body: "Those are your starting point — the areas where recoverable revenue is most likely hiding." },
            ].map(step => (
              <div key={step.n} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center mb-3">
                  {step.n}
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{step.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          {/* Optional CTA */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
            <p className="text-white font-semibold text-lg mb-2">Want to review your results with us?</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              If your diagnostic reveals significant leakage — or if you simply want a second set of eyes —
              book a free 45-minute Growth Systems Review. We&apos;ll walk through your scores together and give
              you a concrete, prioritized recommendation. No commitment. No sales pitch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
            >
              Book a Free Growth Systems Review →
            </Link>
          </div>

          <p className="text-white/30 text-sm">
            In the meantime, keep an eye on your inbox — we&apos;ll send a few short notes over the next week
            that explain each revenue leakage zone in more detail.
          </p>
        </div>
      </section>
    </>
  );
}
