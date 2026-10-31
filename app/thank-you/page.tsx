import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | ACEDTC Revenue Leakage Diagnostic",
  description: "Your Revenue Leakage Diagnostic is on its way. Here's what to do next.",
};

const steps = [
  { n: "1", title: "Read the overview first", body: "The first two pages explain the 7 Revenue Leakage Zones and why they matter. Read those before you score yourself." },
  { n: "2", title: "Score yourself honestly", body: "A score that reflects your actual situation is the one that will help you most. Resist the instinct to give yourself higher marks than you've earned." },
  { n: "3", title: "Note your lowest zones", body: "Those are your starting point, the areas where recoverable revenue is most likely hiding." },
];

export default function ThankYouPage() {
  return (
    <section className="flex min-h-screen items-center bg-inkwell pb-20 pt-32 text-on-dark sm:pt-40">
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-pos-weak">
          <svg className="h-8 w-8 text-pos" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <p className="eyebrow mb-4 text-accent">You&apos;re all set</p>
        <h1 className="mb-6 font-serif text-4xl font-medium tracking-tight text-on-dark sm:text-5xl">
          Your Revenue Leakage Diagnostic is on its way.
        </h1>
        <p className="mb-12 text-xl leading-relaxed text-on-dark-2">
          Check your inbox. The PDF will be there within the next few minutes.
        </p>

        <div className="mb-12 grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="rounded-xl border border-line-on-dark bg-surface/40 p-5">
              <span className="tabular mb-3 block text-2xl font-semibold text-accent">{step.n}</span>
              <h3 className="mb-1.5 text-sm font-semibold text-on-dark">{step.title}</h3>
              <p className="text-xs leading-relaxed text-on-dark-2">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 rounded-xl border border-line-on-dark bg-surface/40 p-8">
          <p className="mb-2 font-serif text-lg text-on-dark">Want to review your results with us?</p>
          <p className="mb-6 text-sm leading-relaxed text-on-dark-2">
            If your diagnostic reveals significant leakage, or you simply want a second set of eyes, book a free
            45-minute growth diagnostic. We'll walk through your scores together and give you a concrete, prioritized
            recommendation. No commitment. No sales pitch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-accent-solid px-6 py-3 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-ink"
          >
            Book a Growth Diagnostic →
          </Link>
        </div>

        <p className="text-sm text-on-dark-muted">
          In the meantime, keep an eye on your inbox. We'll send a few short notes over the next week that explain each
          revenue leakage zone in more detail.
        </p>
      </div>
    </section>
  );
}
