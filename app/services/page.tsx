import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { PageHero, SectionHead, PrimaryBtn, GhostBtn, FinalCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services | ACEDTC Business Growth & Implementation Consulting",
  description:
    "ACEDTC offers business growth strategy, sales process optimization, CRM & automation, digital marketing, analytics & attribution, and AI-assisted communication, each tied to measurable revenue.",
};

const services = [
  {
    num: "01",
    title: "Business Growth Strategy",
    body: "Diagnose your current business model, identify revenue bottlenecks, and build a 90-day action plan with clear priorities and measurable milestones. Every recommendation is specific to your business, your market, your team, and your current stage of growth.",
    points: ["Business growth audits", "Revenue bottleneck identification", "Sales and marketing alignment", "30/60/90-day action plans", "Competitive positioning", "Market expansion strategy"],
    href: "/services/business-growth",
    cta: "Business Growth Strategy",
  },
  {
    num: "02",
    title: "Sales Process Optimization",
    body: "Build a repeatable sales process covering lead intake, qualification, follow-up cadence, pipeline stages, and closing strategy. It comes with templates and systems your team can actually use and leadership can actually measure.",
    points: ["Pipeline design and CRM configuration", "Lead intake workflows", "Multi-touch follow-up cadences", "Sales scripts and templates", "Appointment-setting workflows", "Conversion tracking"],
    href: "/services/sales-process",
    cta: "Sales Process Optimization",
  },
  {
    num: "03",
    title: "CRM & Automation",
    body: "Set up or clean up your CRM, automate your follow-up sequences, build client onboarding workflows, and create the internal systems that keep your pipeline moving even when your team is out of the office.",
    points: ["CRM setup and database cleanup", "Pipeline stage configuration", "Automated email and SMS follow-up", "Internal notifications and routing", "Client onboarding workflows", "Reactivation campaigns"],
    href: "/services/crm-automation",
    cta: "CRM & Automation",
  },
  {
    num: "04",
    title: "Digital Marketing & Media Strategy",
    body: "Plan and optimize paid media, retargeting, local targeting, and landing page funnels, with a strategy built around your actual business goals and wired into your CRM and reporting systems.",
    points: ["Paid search and social strategy", "Geofencing and local targeting", "Retargeting campaigns", "Landing pages and lead funnels", "Campaign testing frameworks", "Offer and messaging strategy"],
    href: "/services/digital-marketing",
    cta: "Marketing Strategy",
  },
  {
    num: "05",
    title: "Data, Analytics & Attribution",
    body: "Connect your marketing, CRM, and revenue data into dashboards that show which campaigns, channels, and processes are actually producing results. Stop making investment decisions with incomplete information.",
    points: ["Marketing attribution modeling", "Lead source tracking", "ROI dashboards", "Campaign performance reporting", "Funnel conversion tracking", "Executive scorecards"],
    href: "/services/analytics",
    cta: "Analytics & Attribution",
  },
  {
    num: "06",
    title: "AI-Assisted Communication Systems",
    body: "Implement response systems that make sure every lead gets answered quickly, qualified consistently, and followed up with automatically, without replacing the human relationships that drive your business.",
    points: ["Missed-call response systems", "Automated lead qualification", "Appointment booking workflows", "FAQ handling", "Call summaries and CRM logging", "Human escalation paths"],
    href: "/services/ai-communication",
    cta: "AI Communication",
  },
];

const implementation = [
  { title: "Client Onboarding Systems", body: "A structured kickoff with clear expectations, timelines, and ownership from day one." },
  { title: "Project Roadmaps", body: "Implementation timelines broken into phases with specific milestones and accountability." },
  { title: "SOP Creation & Training", body: "We document what we build and train your team so adoption actually happens." },
  { title: "Ongoing Review Cycles", body: "Monthly or quarterly performance reviews to optimize what is working and fix what is not." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Services built around revenue, not activity."
        lede="Every ACEDTC service connects to a measurable business outcome. We don't optimize for deliverables. We optimize for results."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <PrimaryBtn href="/diagnostic">Book a Growth Diagnostic →</PrimaryBtn>
          <GhostBtn href="/contact">Talk to Esad</GhostBtn>
        </div>
      </PageHero>

      {/* SERVICES LIST */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead index="06" kicker="The full stack" title="Six services, one connected growth infrastructure." />
          </ScrollReveal>
          <div className="mt-12 space-y-4">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 50}>
                <div className="card-seam rounded-xl border border-line bg-surface p-7 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="tabular text-sm text-accent">{s.num}</span>
                        <h2 className="text-xl font-semibold text-ink">{s.title}</h2>
                      </div>
                      <p className="mb-6 leading-relaxed text-ink-2">{s.body}</p>
                      <Link href={s.href} className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all hover:gap-2">
                        {s.cta} →
                      </Link>
                    </div>
                    <div>
                      <p className="eyebrow mb-3 text-muted">What&apos;s included</p>
                      <ul className="space-y-2">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-ink-2">
                            <span className="mt-0.5 flex-shrink-0 text-accent">→</span>
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section className="bg-inkwell py-20 text-on-dark sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="07"
              kicker="Implementation support"
              title="We don't just recommend. We build."
              lede="Every ACEDTC engagement includes implementation. We don't hand you a roadmap and walk away. We organize, build, and manage the systems we design."
              onDark
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line-on-dark bg-line-on-dark sm:grid-cols-2 lg:grid-cols-4">
            {implementation.map((item) => (
              <ScrollReveal key={item.title}>
                <div className="h-full bg-inkwell p-6">
                  <h3 className="mb-2 text-sm font-semibold text-on-dark">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-on-dark-2">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title="Not sure where to start?"
        body="Book a growth diagnostic. We'll identify your highest-leverage starting point based on your specific situation, at no cost and no obligation."
      />
    </>
  );
}
