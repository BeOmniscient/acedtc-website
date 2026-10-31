import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* Shared editorial primitives for the Meridian Cobalt system.
   Tokens come from globals.css so every piece is light/dark native. */

export function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-accent-solid px-6 py-3 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-ink"
    >
      {children}
    </Link>
  );
}

export function GhostBtn({
  href,
  children,
  onDark = false,
}: {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-semibold transition-colors ${
        onDark
          ? "border-line-on-dark-strong text-on-dark hover:border-accent hover:text-accent"
          : "border-line-strong text-ink hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </Link>
  );
}

export function SectionHead({
  index,
  kicker,
  title,
  lede,
  onDark = false,
}: {
  index: string;
  kicker: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className={`grid gap-6 border-t pt-6 lg:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] lg:gap-12 ${onDark ? "border-line-on-dark" : "border-line"}`}>
      <div className={`eyebrow flex items-center gap-3 ${onDark ? "text-on-dark-muted" : "text-muted"}`}>
        <span className="tabular text-accent">{index}</span>
        <span>{kicker}</span>
      </div>
      <div>
        <h2 className={`max-w-3xl font-serif text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.6rem] ${onDark ? "text-on-dark" : "text-ink"}`}>
          {title}
        </h2>
        {lede && (
          <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${onDark ? "text-on-dark-2" : "text-ink-2"}`}>
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-bg pt-28 sm:pt-32 lg:pt-40">
      <div className="ledger-rule pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_75%,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <p className="eyebrow mb-6 flex items-center gap-3 text-muted">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-serif text-[2.4rem] font-medium leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lede && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">{lede}</p>}
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}

export function FinalCTA({
  title,
  body,
  primaryHref = "/diagnostic",
  primaryLabel = "Book a Growth Diagnostic →",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to Esad",
  note = "No commitment. No contract pitch. A direct, strategic conversation.",
}: {
  title: React.ReactNode;
  body: React.ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  note?: string;
}) {
  return (
    <section className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <ScrollReveal>
          <p className="eyebrow mb-4 text-accent">Ready to start</p>
          <h2 className="mb-4 font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
            {title}
          </h2>
          <p className="mb-8 leading-relaxed text-ink-2">{body}</p>
          <div className="mb-6 flex flex-col justify-center gap-3 sm:flex-row">
            <PrimaryBtn href={primaryHref}>{primaryLabel}</PrimaryBtn>
            <GhostBtn href={secondaryHref}>{secondaryLabel}</GhostBtn>
          </div>
          <p className="text-sm text-muted">{note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
