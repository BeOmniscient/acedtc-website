import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services | ACEDTC — Business Growth & Implementation Consulting",
  description: "ACEDTC offers business growth strategy, sales process optimization, CRM & automation, digital marketing, analytics, and AI-assisted communication services.",
};

const services = [
  {
    num: "01",
    title: "Business Growth Strategy",
    body: "Diagnose your current business model, identify revenue bottlenecks, and build a 90-day action plan with clear priorities and measurable milestones. Every recommendation is specific to your business, your market, your team, and your current stage of growth.",
    points: ["Business growth audits", "Revenue bottleneck identification", "Sales and marketing alignment", "30/60/90-day action plans", "Competitive positioning", "Market expansion strategy"],
    href: "/services/business-growth",
    cta: "Learn About Growth Strategy",
  },
  {
    num: "02",
    title: "Sales Process Optimization",
    body: "Build a repeatable sales process that covers lead intake, qualification, follow-up cadence, pipeline stages, and closing strategy — with templates and systems your team can actually use and that leadership can actually measure.",
    points: ["Pipeline design and CRM configuration", "Lead intake workflows", "Multi-touch follow-up cadences", "Sales scripts and templates", "Appointment-setting workflows", "Conversion tracking"],
    href: "/services/sales-process",
    cta: "Learn About Sales Optimization",
  },
  {
    num: "03",
    title: "CRM & Automation",
    body: "Set up or clean up your CRM, automate your follow-up sequences, build client onboarding workflows, and create the internal systems that keep your pipeline moving — even when your team isn't in the office.",
    points: ["CRM setup and database cleanup", "Pipeline stage configuration", "Automated email and SMS follow-up", "Internal notifications and routing", "Client onboarding workflows", "Reactivation campaigns"],
    href: "/services/crm-automation",
    cta: "Learn About CRM & Automation",
  },
  {
    num: "04",
    title: "Digital Marketing & Media Strategy",
    body: "Plan and optimize paid media campaigns, retargeting, local targeting, and landing page funnels — with a strategy built around your actual business goals and connected to your CRM and reporting systems.",
    points: ["Paid search and social strategy", "Geofencing and local targeting", "Retargeting campaigns", "Landing pages and lead funnels", "Campaign testing frameworks", "Offer and messaging strategy"],
    href: "/services/digital-marketing",
    cta: "Learn About Marketing Strategy",
  },
  {
    num: "05",
    title: "Data, Analytics & Attribution",
    body: "Connect your marketing, CRM, and revenue data into dashboards that show you which campaigns, channels, and processes are actually producing results. Stop making investment decisions with incomplete information.",
    points: ["Marketing attribution modeling", "Lead source tracking", "ROI dashboards", "Campaign performance reporting", "Funnel conversion tracking", "Executive scorecards"],
    href: "/services/analytics",
    cta: "Learn About Analytics",
  },
  {
    num: "06",
    title: "AI-Assisted Communication Systems",
    body: "Implement modern response systems that make sure every lead gets answered quickly, qualified consistently, and followed up with automatically — without replacing the human relationships that drive your business.",
    points: ["Missed-call response systems", "Automated lead qualification", "Appointment booking workflows", "FAQ handling", "Call summaries and CRM logging", "Human escalation paths"],
    href: "/services/ai-communication",
    cta: "Learn About AI Communication",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">What We Do</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Services Built Around Revenue, Not Activity.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              Every ACEDTC service is designed to connect to a measurable business outcome. We don&apos;t
              optimize for deliverables. We optimize for results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                Book a Consultation →
              </Link>
              <Link href="/diagnostic" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold border border-white/30 text-white hover:border-white hover:bg-white/5 transition-colors">
                Download the Free Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 50}>
                <div className="border border-[#E2E8F0] rounded-xl p-8 hover:border-[#2563EB] transition-colors group">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-[#2563EB]">{s.num}</span>
                        <h2 className="text-xl font-bold text-[#0A1628]">{s.title}</h2>
                      </div>
                      <p className="text-[#64748B] leading-relaxed mb-6">{s.body}</p>
                      <Link
                        href={s.href}
                        className="inline-flex items-center text-sm font-semibold text-[#2563EB] gap-1 hover:gap-2 transition-all"
                      >
                        {s.cta} →
                      </Link>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-3">What&apos;s Included</p>
                      <ul className="space-y-2">
                        {s.points.map(pt => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-[#64748B]">
                            <span className="text-[#2563EB] flex-shrink-0 mt-0.5">→</span>
                            {pt}
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

      {/* HOW IT WORKS */}
      <section className="bg-[#F8F7F4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Implementation Support</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4 max-w-2xl">
              We Don&apos;t Just Recommend. We Build.
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mb-16 leading-relaxed">
              Every ACEDTC engagement includes implementation support. We don&apos;t hand you a roadmap and walk
              away. We help organize, build, and manage the implementation of every system we design.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Client Onboarding Systems", body: "Structured kickoff process with clear expectations, timelines, and ownership from day one." },
              { title: "Project Roadmaps", body: "Implementation timelines broken into phases with specific milestones and accountability." },
              { title: "SOP Creation & Training", body: "We document what we build and train your team so adoption actually happens." },
              { title: "Ongoing Review Cycles", body: "Monthly or quarterly performance reviews to optimize what&apos;s working and fix what isn&apos;t." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-[#E2E8F0] h-full">
                  <h3 className="text-sm font-semibold text-[#0A1628] mb-2">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Book a 45-minute Growth Consultation. We&apos;ll identify your highest-leverage starting point
              based on your specific business situation — at no cost and no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                Book a Free Growth Consultation →
              </Link>
              <Link href="/diagnostic" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold border border-white/30 text-white hover:border-white hover:bg-white/5 transition-colors">
                Download the Revenue Leakage Diagnostic
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
