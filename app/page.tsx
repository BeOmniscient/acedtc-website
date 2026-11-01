import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Primitives ──────────────────────────────────────────── */

function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-md bg-accent-solid px-6 py-3 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-ink"
    >
      {children}
    </Link>
  );
}

function GhostBtn({ href, children, onDark = false }: { href: string; children: React.ReactNode; onDark?: boolean }) {
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

function SectionHead({
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
        <h2 className={`max-w-3xl font-serif text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${onDark ? "text-on-dark" : "text-ink"}`}>
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

/* ── Data ────────────────────────────────────────────────── */

const channels = [
  { label: "Website", fig: "41%" },
  { label: "Google Ads", fig: "22%" },
  { label: "Meta", fig: "11%" },
  { label: "Referral", fig: "9%" },
  { label: "Email", fig: "8%" },
  { label: "Inbound calls", fig: "6%" },
  { label: "Events", fig: "3%" },
];

const clients = ["Kia America", "Medical Database", "JM&A Group", "Gnosis Diagnostic", "Morgner Construction"];

const problems = [
  { k: "Untracked", title: "Revenue has no source", body: "Money goes out, leads come in, and no one can say which campaigns actually produced closed revenue." },
  { k: "Siloed", title: "The tools don't talk", body: "Website, CRM, ad accounts, and reporting each hold a piece of the truth and none of them agree." },
  { k: "Decayed", title: "The CRM is a graveyard", body: "Records are sparse, stages get ignored, and the system meant to drive pipeline just stores dead contacts." },
  { k: "Delayed", title: "Follow-up is a coin flip", body: "Without a defined cadence, deals stall between inquiry and response and the fastest competitor wins them." },
  { k: "Manual", title: "Reporting is monthly, at best", body: "Numbers are stitched together by hand after the month closes, long after a decision could have changed the result." },
  { k: "Blind", title: "Decisions run on instinct", body: "Leadership steers on gut because the data that should guide the call is incomplete or impossible to trust." },
];

const approach = [
  { n: "01", title: "Diagnose the real problem", body: "We start with how your business actually makes money and where it leaks. No generic framework, a real read of your specific situation." },
  { n: "02", title: "Build the system, not a slide", body: "We connect the CRM, automate follow-up, structure the pipeline, and wire the reporting. Strategy without a working system is just a document." },
  { n: "03", title: "Measure until it is real", body: "Attribution, pipeline reporting, and executive dashboards confirm the work is producing revenue, and we stay in it to keep tuning." },
];

const services = [
  { num: "01", title: "Business Growth Strategy", body: "Diagnose the model, find the revenue bottleneck, and leave with a 90-day plan that has owners and dates.", href: "/services/business-growth" },
  { num: "02", title: "Sales Process Optimization", body: "A repeatable process across intake, qualification, follow-up cadence, and conversion tracking.", href: "/services/sales-process" },
  { num: "03", title: "CRM & Automation", body: "Structured pipelines, automated follow-up, and onboarding workflows built into your CRM.", href: "/services/crm-automation" },
  { num: "04", title: "Digital Marketing & Media", body: "Paid media, retargeting, local targeting, and funnels tied to tracked revenue, not vanity metrics.", href: "/services/digital-marketing" },
  { num: "05", title: "Data, Analytics & Attribution", body: "Your marketing, CRM, and revenue data joined into dashboards that show what is actually working.", href: "/services/analytics" },
  { num: "06", title: "AI-Assisted Communication", body: "Respond to every lead in seconds, qualify automatically, and follow up consistently without losing the human.", href: "/services/ai-communication" },
  { num: "07", title: "Implementation & Project Management", body: "We do not hand over a roadmap and leave. We manage the build from kickoff to go-live to optimization.", href: "/services" },
];

const before = [
  "Leads arrive, but follow-up depends on who remembers",
  "Marketing runs, but ROI is a guess",
  "The CRM is incomplete and barely trusted",
  "Response time is measured in hours or days",
  "Reporting is manual and lands after the month ends",
  "Tools are disconnected and contradict each other",
];
const after = [
  "Every lead enters an automated intake and follow-up path",
  "Every campaign ties to tracked conversions and revenue",
  "The CRM is current and drives pipeline decisions",
  "Response time is measured in minutes, or seconds",
  "Dashboards show pipeline and performance in real time",
  "Systems are integrated and feed each other one truth",
];

const steps = [
  { n: "1", title: "Diagnose", body: "We map how revenue is generated and where it is lost today." },
  { n: "2", title: "Design", body: "A custom implementation plan built around your team and goals." },
  { n: "3", title: "Implement", body: "CRM, automation, dashboards, and funnels built and deployed." },
  { n: "4", title: "Measure", body: "Attribution and pipeline reporting give leadership real visibility." },
  { n: "5", title: "Optimize", body: "We stay engaged to review and compound the gains over time." },
];

const industries = [
  "B2B Professional Services", "Automotive Retail & Services", "Healthcare & Wellness", "Construction & Trades",
  "Real Estate", "Financial Services", "Retail & E-commerce", "Local & Regional Services",
];

const stats = [
  { value: "30+", label: "Years in the field" },
  { value: "5+", label: "Industries served" },
  { value: "MBA", label: "Digital Transformation" },
  { value: "UCI", label: "Paul Merage School" },
];

const discover = [
  "Where leads are going untracked",
  "How fast your business actually responds",
  "Whether follow-up is happening consistently",
  "Whether your CRM works for you or against you",
  "Which marketing dollars are producing revenue",
  "Whether reporting gives leadership the right picture",
];

/* ── Page ────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg pt-28 sm:pt-32 lg:pt-40">
        <div className="ledger-rule pointer-events-none absolute inset-0 opacity-[0.5] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <p className="eyebrow mb-6 flex items-center gap-3 text-muted">
            <span className="h-px w-8 bg-accent" />
            Revenue clarity, built and measured
          </p>
          <h1 className="max-w-4xl font-serif text-[2.6rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            See exactly what drives your revenue.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            Your business generates data every day across your website, your campaigns, your CRM, and your sales team.
            Most of it is siloed or read the wrong way. ACEDTC joins it into one clear line of sight, then builds the
            systems that act on it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <PrimaryBtn href="/diagnostic">Book a Growth Diagnostic →</PrimaryBtn>
            <GhostBtn href="/contact">Talk to Esad</GhostBtn>
          </div>

          {/* The reconciled ledger line */}
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
            <div className="bg-surface p-6 sm:p-8">
              <p className="eyebrow mb-5 text-muted">Seven noisy channels</p>
              <ul className="space-y-0">
                {channels.map((c, i) => (
                  <li
                    key={c.label}
                    className={`flex items-center justify-between py-2 text-sm text-ink-2 ${i !== channels.length - 1 ? "border-b border-line" : ""}`}
                  >
                    <span>{c.label}</span>
                    <span className="tabular text-muted">{c.fig}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center bg-inkwell p-6 text-on-dark sm:p-8">
              <p className="eyebrow mb-3 text-accent">One reconciled number</p>
              <p className="tabular text-4xl font-semibold leading-none text-on-dark sm:text-5xl">$1.00</p>
              <p className="mt-3 text-sm leading-relaxed text-on-dark-2">
                Every marketing dollar traced to the revenue it produced. That single reconciled line is the whole job.
              </p>
            </div>
          </div>

          {/* Client row */}
          <div className="mt-12 border-t border-line pt-6">
            <p className="eyebrow mb-4 text-muted">Industry experience across</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {clients.map((n) => (
                <span key={n} className="text-sm font-medium text-ink-2">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEAM BAND */}
      <section className="relative isolate overflow-hidden bg-inkwell">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-signal.png" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-inkwell via-inkwell/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="eyebrow mb-4 text-accent">The reconciled line</p>
          <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight tracking-tight text-on-dark sm:text-4xl">
            Dozens of noisy channels. One number you can trust.
          </h2>
          <p className="mt-4 max-w-lg leading-relaxed text-on-dark-2">
            Every signal your business generates, resolved into a single clear line of sight on what actually drives revenue.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="01"
              kicker="The real problem"
              title="You don't have a traffic problem. You have a visibility problem."
              lede="Most businesses generate enough leads to grow. Revenue gets lost in the gaps between capturing a lead, following up, closing the sale, and proving which of it worked."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 50}>
                <div className="card-seam flex h-full flex-col bg-surface p-6">
                  <span className="eyebrow mb-3 text-accent">{p.k}</span>
                  <h3 className="mb-2 text-base font-semibold text-ink">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-8">
            <p className="max-w-2xl font-serif text-xl italic text-ink">
              None of these are small. Each gap is real revenue that never reached your bottom line.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="02"
              kicker="What sets us apart"
              title="We don't just advise. We build it, and we measure it."
              lede="ACEDTC sits at the intersection of strategy, technology, and execution, and stays through all three."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {approach.map((a, i) => (
              <ScrollReveal key={a.n} delay={i * 90}>
                <div className="h-full border-t-2 border-accent pt-6">
                  <span className="tabular mb-4 block text-sm text-accent">{a.n}</span>
                  <h3 className="mb-3 text-lg font-semibold text-ink">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{a.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DATA FIGURES */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="→"
              kicker="How we picture it"
              title="Attribution in, funnel down, revenue out."
              lede="Illustrative views of the systems we build. Your real numbers replace these the moment the tracking goes live."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[
              { src: "/data-attribution.png", cap: "Every channel traced and merged into one revenue node." },
              { src: "/data-funnel.png", cap: "Each stage of the funnel, measured end to end." },
            ].map((f) => (
              <ScrollReveal key={f.src}>
                <figure className="overflow-hidden rounded-xl border border-line bg-inkwell">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.src} alt="" aria-hidden="true" className="aspect-video w-full object-cover" />
                  <figcaption className="border-t border-line-on-dark px-5 py-4 text-sm text-on-dark-2">{f.cap}</figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-inkwell py-20 text-on-dark sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="03"
              kicker="Services"
              title="Seven places we stop revenue from leaking."
              lede="Each works on its own or together as one connected growth infrastructure."
              onDark
            />
          </ScrollReveal>
          <div className="mt-10 overflow-hidden rounded-xl border border-line-on-dark">
            {services.map((s) => (
              <ScrollReveal key={s.num}>
                <Link
                  href={s.href}
                  className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-line-on-dark bg-surface/40 px-5 py-5 transition-colors last:border-b-0 hover:bg-surface sm:gap-6 sm:px-7"
                >
                  <span className="tabular text-sm text-accent">{s.num}</span>
                  <div>
                    <h3 className="text-base font-semibold text-on-dark transition-colors group-hover:text-accent sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-on-dark-2">{s.body}</p>
                  </div>
                  <span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="04"
              kicker="The transformation"
              title="What changes when the systems are right."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-xl border border-line bg-surface p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neg-weak text-sm font-bold text-neg">✕</span>
                  <h3 className="text-lg font-semibold text-ink">Before ACEDTC</h3>
                </div>
                <ul className="space-y-3.5">
                  {before.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neg" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="h-full rounded-xl border border-accent/40 bg-accent-weak p-7">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-pos-weak text-sm font-bold text-pos">✓</span>
                  <h3 className="text-lg font-semibold text-ink">After ACEDTC</h3>
                </div>
                <ul className="space-y-3.5">
                  {after.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-pos" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="05"
              kicker="How we work"
              title="A simple process. A result that lasts."
              lede="Every engagement follows the same methodology, so you always know where you are and what comes next."
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 70}>
                <div className="h-full border-t border-line-strong pt-5">
                  <span className="tabular mb-3 block text-2xl font-semibold text-accent">{s.n}</span>
                  <h3 className="mb-2 text-base font-semibold text-ink">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-2">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="06"
              kicker="Industries"
              title="Built for leaders serious about growth."
              lede="The common thread: owners who want their systems to match the ambition of their goals."
            />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <ScrollReveal key={ind}>
                <div className="bg-surface px-5 py-5 text-sm font-medium text-ink">{ind}</div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <Link href="/industries" className="mt-6 inline-flex text-sm font-semibold text-accent hover:underline">
              See how we work across industries →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-inkwell py-20 text-on-dark sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className="eyebrow mb-5 text-accent">The experience behind every engagement</p>
              <h2 className="mb-6 font-serif text-3xl font-medium leading-tight tracking-tight text-on-dark sm:text-4xl">
                You are not hiring a template. You are hiring an operator.
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-on-dark-2">
                ACEDTC was built by Esad Kajosevic, an executive advisor and operator with over 30 years helping
                organizations unlock growth, improve operational performance, and lead through change.
              </p>
              <p className="mb-8 leading-relaxed text-on-dark-2">
                His approach is direct: diagnose the real problem, build the right system, measure the result, and stay
                in the work until the outcome is real.
              </p>
              <blockquote className="mb-8 border-l-2 border-accent pl-5">
                <p className="font-serif text-xl italic text-on-dark">
                  &ldquo;Execution drives strategy, not the other way around.&rdquo;
                </p>
                <footer className="mt-2 text-sm text-on-dark-muted">Esad Kajosevic, Founder</footer>
              </blockquote>
              <Link href="/about" className="text-sm font-semibold text-accent hover:text-accent-ink">
                More about ACEDTC →
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-xl border border-line-on-dark bg-surface/40 p-5">
                    <p className="tabular mb-1 text-3xl font-semibold text-on-dark">{item.value}</p>
                    <p className="text-xs text-on-dark-muted">{item.label}</p>
                  </div>
                ))}
                <div className="col-span-2 rounded-xl border border-line-on-dark bg-surface/40 p-5">
                  <p className="eyebrow mb-3 text-on-dark-muted">Named client experience</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {clients.map((c) => (
                      <span key={c} className="text-sm font-medium text-on-dark-2">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DIAGNOSTIC BAND */}
      <section className="bg-accent-solid py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <p className="eyebrow mb-4 text-white/70">Free resource</p>
              <h2 className="mb-4 font-serif text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
                Find out where your revenue is leaking.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white/85">
                The Revenue Leakage Diagnostic is a free, 30-minute scorecard that shows exactly where leads fall through,
                follow-up breaks down, and marketing spend goes untracked.
              </p>
              <Link
                href="/diagnostic"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-accent-solid shadow-sm transition-colors hover:bg-white/90"
              >
                Book a Growth Diagnostic →
              </Link>
              <p className="mt-3 text-xs text-white/70">No credit card. No sales call required.</p>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="rounded-xl border border-white/20 bg-white/10 p-6">
                <p className="mb-4 text-sm font-semibold text-white">What you will find:</p>
                <ul className="space-y-3">
                  {discover.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <p className="eyebrow mb-4 text-accent">Ready to start</p>
            <h2 className="mb-4 font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl">
              Book a growth diagnostic.
            </h2>
            <p className="mb-8 leading-relaxed text-ink-2">
              In a focused conversation we review your lead flow, sales process, marketing performance, and systems,
              and give you one clear place to start.
            </p>
            <div className="mb-6 flex flex-col justify-center gap-3 sm:flex-row">
              <PrimaryBtn href="/diagnostic">Book a Growth Diagnostic →</PrimaryBtn>
              <GhostBtn href="/contact">Talk to Esad first</GhostBtn>
            </div>
            <p className="text-sm text-muted">No commitment. No contract pitch. A direct, strategic conversation.</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
