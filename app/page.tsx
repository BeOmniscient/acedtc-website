import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Helpers ─────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">
      {children}
    </p>
  );
}

function PrimaryBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-sm">
      {children}
    </Link>
  );
}

function SecondaryBtn({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link href={href} className={`inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold border transition-colors ${dark ? "border-white/30 text-white hover:border-white hover:bg-white/5" : "border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF]"}`}>
      {children}
    </Link>
  );
}

/* ── Data ────────────────────────────────────────────────── */

const problems = [
  { icon: "⚠️", title: "Leads fall through the cracks", body: "No centralized system. No automated follow-up. Opportunities vanish between inquiry and response." },
  { icon: "⏱", title: "Sales follow-up is inconsistent", body: "Your team means well, but without a defined process, deals get delayed or lost entirely." },
  { icon: "❓", title: "Marketing ROI is unclear", body: "Money goes out. Leads come in. But no one can tie which campaigns are producing revenue." },
  { icon: "🔗", title: "Tools are disconnected", body: "Your website, CRM, email platform, ad accounts, and reporting tools don't talk to each other." },
  { icon: "🗄", title: "CRM data is incomplete", body: "Contact records are sparse. Pipeline stages are ignored. The CRM is a graveyard instead of a revenue engine." },
  { icon: "⚡", title: "Response time is too slow", body: "A lead that waits more than 5 minutes is half as likely to convert. Most businesses take hours — or days." },
];

const services = [
  { num: "01", title: "Business Growth Strategy", body: "Diagnose your business model, identify revenue bottlenecks, and build a 90-day action plan with clear priorities.", href: "/services/business-growth" },
  { num: "02", title: "Sales Process Optimization", body: "Build a repeatable sales process covering lead intake, qualification, follow-up cadence, and conversion tracking.", href: "/services/sales-process" },
  { num: "03", title: "CRM & Automation", body: "Implement or improve your CRM with structured pipelines, automated follow-up, and client onboarding workflows.", href: "/services/crm-automation" },
  { num: "04", title: "Digital Marketing & Media Strategy", body: "Plan paid media, retargeting, local targeting, and landing page funnels — tied to real revenue outcomes.", href: "/services/digital-marketing" },
  { num: "05", title: "Data, Analytics & Attribution", body: "Connect your marketing, CRM, and revenue data into dashboards that show exactly what is producing results.", href: "/services/analytics" },
  { num: "06", title: "AI-Assisted Communication", body: "Respond to every lead within seconds, qualify automatically, and follow up consistently — without losing the human touch.", href: "/services/ai-communication" },
  { num: "07", title: "Implementation & Project Management", body: "We don't hand you a roadmap and walk away. We help manage implementation from kickoff to go-live to ongoing optimization.", href: "/services" },
];

const steps = [
  { n: "1", title: "Diagnose", body: "We review how your business generates revenue and where it's currently being lost." },
  { n: "2", title: "Design", body: "We build a custom implementation plan specific to your business, team, and goals." },
  { n: "3", title: "Implement", body: "CRM, automation workflows, reporting dashboards, and marketing funnels — built and deployed." },
  { n: "4", title: "Measure", body: "Attribution, pipeline reporting, and executive dashboards give you real visibility." },
  { n: "5", title: "Optimize", body: "We stay engaged to review performance and make iterative improvements that compound." },
];

const industries = [
  "B2B Professional Services", "Automotive Retail & Services", "Healthcare & Wellness",
  "Construction & Trades", "Real Estate", "Financial Services",
  "Retail & E-commerce", "Local & Regional Service Businesses",
];

/* ── Page ────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-grid relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/80 via-transparent to-[#0A1628]/50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#93c5fd] mb-5">
              Consulting &amp; Implementation
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Your Business Deserves Systems That Actually Work.
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              ACEDTC is a consulting and implementation partner for businesses that need better leads,
              stronger sales processes, connected technology, clearer data, and growth they can measure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PrimaryBtn href="/contact">Book a Growth Consultation →</PrimaryBtn>
              <SecondaryBtn href="/diagnostic" dark>Download the Revenue Leakage Diagnostic</SecondaryBtn>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-3">Industry experience across</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["Kia America", "Hyundai Motor Company", "JM&A Group", "Prime Healthcare", "Morgner Construction"].map(n => (
                  <span key={n} className="text-sm font-medium text-white/50">{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
          <span className="text-xs tracking-wider">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>The Real Problem</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4 max-w-2xl">
              You Don&apos;t Have a Traffic Problem. You Have a Systems Problem.
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mb-16 leading-relaxed">
              Most businesses generate enough leads to grow. Revenue gets lost in the gaps between
              capturing a lead, following up, closing the sale, and measuring the result.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 70}>
                <div className="card-lift bg-[#F8F7F4] rounded-xl p-6 h-full">
                  <span className="text-2xl mb-3 block">{p.icon}</span>
                  <h3 className="text-base font-semibold text-[#0A1628] mb-2">{p.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-10">
            <p className="text-[#0A1628] font-medium">
              These are not small problems. Each gap represents real revenue that never made it to your bottom line.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="bg-[#F8F7F4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>What Sets Us Apart</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4 max-w-2xl">
              We Don&apos;t Just Advise. We Build What You Actually Need.
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mb-16 leading-relaxed">
              ACEDTC sits at the intersection of strategy, technology, and execution.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Strategy with Substance", body: "We start by understanding how your business actually generates revenue — and where it's currently being lost. No generic frameworks. A real diagnosis of your specific situation." },
              { icon: "⚙️", title: "Systems That Get Built", body: "We connect your CRM, automate your follow-up, structure your pipeline, and configure your reporting. Strategy without implementation is just a document." },
              { icon: "📊", title: "Measurement That Matters", body: "After implementation, we set up dashboards, attribution models, and performance reviews that confirm the work is producing results — and we stay engaged to optimize." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 h-full shadow-sm border border-[#E2E8F0]">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-lg font-semibold text-[#0A1628] mb-3">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 max-w-2xl">
              Seven Areas Where We Help Businesses Stop Leaking Revenue
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mb-16 leading-relaxed">
              Our services are designed to work individually or together as a complete growth infrastructure.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {services.slice(0, 6).map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 60}>
                <Link href={s.href} className="service-card-dark block bg-white/5 border border-white/10 rounded-xl p-6 h-full group">
                  <span className="text-xs font-mono text-[#2563EB] mb-3 block">{s.num}</span>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#93c5fd] transition-colors">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
                  <span className="mt-4 inline-flex items-center text-xs text-[#2563EB] font-medium gap-1 group-hover:gap-2 transition-all">
                    Learn more →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <Link href="/services" className="service-card-dark flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-6 group">
              <div>
                <span className="text-xs font-mono text-[#2563EB] mb-2 block">07</span>
                <h3 className="text-base font-semibold text-white group-hover:text-[#93c5fd] transition-colors">{services[6].title}</h3>
                <p className="text-white/50 text-sm mt-1 max-w-xl">{services[6].body}</p>
              </div>
              <span className="hidden sm:flex items-center text-[#2563EB] text-sm font-medium gap-1 group-hover:gap-3 transition-all flex-shrink-0 ml-8">
                View all services →
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>The Transformation</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-16 max-w-2xl">
              What Changes When You Build the Right Systems
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-[#F8F7F4] rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-500 text-sm font-bold">✕</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1628]">Before ACEDTC</h3>
                </div>
                <ul className="space-y-4">
                  {["Leads come in but don't always get followed up", "Marketing runs but ROI is unclear", "CRM is incomplete or barely used", "Sales follow-up depends on whoever remembers", "Response time is measured in hours or days", "Reporting is manual and monthly at best", "Tools are disconnected and siloed", "Business decisions are based on gut"].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-xs font-bold">✕</span>
                      </span>
                      <span className="text-[#64748B] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="bg-[#0A1628] rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 text-sm font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">After ACEDTC</h3>
                </div>
                <ul className="space-y-4">
                  {["Every lead enters an automated intake and follow-up system", "Every campaign tied to tracked conversions and revenue", "CRM is structured, current, and driving pipeline decisions", "Automated sequences handle follow-up with human touchpoints", "Response time measured in minutes — or seconds", "Dashboards give real-time visibility into pipeline and performance", "Systems are integrated and feeding each other", "Business decisions are based on data"].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-400 text-xs font-bold">✓</span>
                      </span>
                      <span className="text-white/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F8F7F4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4 max-w-2xl">
              A Simple Process. A Lasting Result.
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mb-16 leading-relaxed">
              Every engagement follows a structured methodology so you always know where you are, what&apos;s happening next, and what success looks like.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 80}>
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white text-sm font-bold flex items-center justify-center mb-4">
                  {s.n}
                </div>
                <h3 className="text-base font-semibold text-[#0A1628] mb-2">{s.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{s.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionLabel>Industries</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4 max-w-2xl">
              Built for Businesses That Are Serious About Growth
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mb-12 leading-relaxed">
              The common thread: leaders who want their systems to match the ambition of their growth goals.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-8">
              {industries.map(ind => (
                <span key={ind} className="px-4 py-2 rounded-full border border-[#E2E8F0] text-sm font-medium text-[#0A1628] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors cursor-default">
                  {ind}
                </span>
              ))}
            </div>
            <Link href="/industries" className="text-sm font-semibold text-[#2563EB] hover:underline">
              See how we work across industries →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FOUNDER / TRUST */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">The Experience Behind Every Engagement</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                You&apos;re Not Hiring a Template. You&apos;re Hiring an Operator.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-4">
                ACEDTC was built by Esad Kajosevic — an executive advisor and operator with over 30 years of experience
                helping organizations unlock growth, improve operational performance, and lead through change.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                His approach is direct: diagnose the real problem, build the right system, measure the result, and stay
                in the work until the outcome is real.
              </p>
              <blockquote className="border-l-2 border-[#2563EB] pl-5 mb-8">
                <p className="text-white text-lg font-medium italic">
                  &ldquo;Execution drives strategy — not the other way around.&rdquo;
                </p>
                <footer className="mt-2 text-white/40 text-sm">— Esad Kajosevic, Founder</footer>
              </blockquote>
              <Link href="/about" className="text-sm font-semibold text-[#2563EB] hover:text-[#93c5fd] transition-colors">
                Learn more about ACEDTC →
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years of Experience", value: "30+" },
                  { label: "Industries Served", value: "5+" },
                  { label: "Education", value: "MBA — Digital Transformation" },
                  { label: "Institution", value: "UC Irvine, Paul Merage" },
                ].map(item => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                    <p className="text-white/40 text-xs">{item.label}</p>
                  </div>
                ))}
                <div className="col-span-2 bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-3">Named Client Experience</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {["Kia America", "Hyundai Motor Company", "JM&A Group", "Prime Healthcare", "Morgner Construction"].map(c => (
                      <span key={c} className="text-sm font-medium text-white/60">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET CTA */}
      <section className="bg-[#2563EB] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 mb-3">Free Resource</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Find Out Where Your Business Is Losing Revenue.
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                The Revenue Leakage Diagnostic is a free, 30-minute scorecard that helps business owners identify
                exactly where leads are falling through the cracks, follow-up is inconsistent, and marketing dollars
                are going untracked.
              </p>
              <Link href="/diagnostic" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-white text-[#2563EB] hover:bg-blue-50 transition-colors shadow-sm">
                Download the Free Diagnostic →
              </Link>
              <p className="mt-3 text-blue-200 text-xs">No credit card. No sales call required.</p>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <p className="text-white font-semibold mb-4 text-sm">What you&apos;ll discover:</p>
                <ul className="space-y-3">
                  {["Where leads are going untracked", "How fast (or slow) your business is responding", "Whether follow-up is actually happening consistently", "Whether your CRM is working for or against you", "Which marketing dollars are producing results", "Whether reporting is giving leadership the right information"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-blue-100">
                      <span className="text-green-300 font-bold flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <SectionLabel>Ready to Start</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-3">
              Book a Growth Consultation.
            </h2>
            <p className="text-xl text-[#64748B] mb-6 font-normal">
              Let&apos;s diagnose what&apos;s holding your business back.
            </p>
            <p className="text-[#64748B] text-base leading-relaxed mb-8">
              In a 45-minute conversation, we&apos;ll review your current lead flow, sales process, marketing
              performance, and systems — and give you a clear starting point for where to focus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <PrimaryBtn href="/contact">Book Your Free Growth Consultation →</PrimaryBtn>
              <SecondaryBtn href="/diagnostic">Download the Diagnostic First</SecondaryBtn>
            </div>
            <p className="text-[#64748B] text-sm">
              No commitment required. No long-term contract pitch. Just a direct, strategic conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
