import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About ACEDTC | Esad Kajosevic — Executive Consulting & Implementation",
  description: "ACEDTC is led by Esad Kajosevic, a 30-year executive advisor with experience at Kia America, Hyundai, Prime Healthcare, and across B2B, automotive, healthcare, and construction sectors.",
};

const expertise = [
  {
    title: "Executive Coaching & Leadership Development",
    body: "One-on-one coaching for executives, senior leaders, and high-potential managers focused on performance, accountability, and decision-making. The goal is not insight alone — it is behavioral change that produces measurable business outcomes.",
    points: ["Leadership clarity and communication", "Performance accountability systems", "Decision-making under pressure", "Building high-performing, aligned teams", "Navigating organizational complexity"],
  },
  {
    title: "Organizational Behavior & Change Management",
    body: "Diagnosing organizational challenges and implementing structured change initiatives that drive real adoption. Esad has led cultural transformation efforts, cross-functional alignment initiatives, and leadership cadence structures at both enterprise and mid-market scale.",
    points: ["Cultural alignment and transformation", "Change management tied to business objectives", "Cross-functional communication systems", "Weekly, quarterly, and annual execution rhythms", "Accountability architecture across teams"],
  },
  {
    title: "Growth Strategy & Business Development",
    body: "A disciplined, KPI-driven approach to accelerating revenue and building scalable pipelines. Esad brings the rigor of a professional sales leader to every growth strategy engagement.",
    points: ["Business development strategy and pipeline architecture", "Market expansion and go-to-market planning", "Client acquisition and retention strategies", "Strategic partnerships and channel development", "Revenue forecasting and performance tracking"],
  },
  {
    title: "Marketing Strategy & Brand Positioning",
    body: "Marketing built around the business objective — not the channel. With experience across automotive, healthcare, and consulting, Esad develops targeted strategies that align marketing investment to revenue outcomes.",
    points: ["Digital marketing strategy including geo-fencing and CRM integration", "Brand positioning and message development", "Customer journey optimization", "Sales enablement and marketing alignment", "Event strategy and industry engagement"],
  },
  {
    title: "Operational Efficiency & Financial Performance",
    body: "A CFO-minded lens applied to operational improvement. Esad helps organizations optimize profitability, improve cash flow management, and build the measurement infrastructure that makes performance transparent at every level.",
    points: ["KPI development and executive dashboard design", "P&L analysis — cash vs. accrual, rolling 12-month", "Billing, collections, and cash flow optimization", "Margin improvement strategies", "Process improvement and scalability planning"],
  },
];

const industries = [
  {
    name: "Automotive & OEM / Dealer Operations",
    clients: "Kia America · Hyundai Motor Company · JM&A Group",
    body: "Deep experience across the automotive ecosystem — district-level performance management, F&I strategy, dealer profitability improvement, and sales process optimization at scale.",
    forClients: "ACEDTC speaks the language of automotive operations natively — from gross profit per unit to lead response protocols to multi-rooftop performance management.",
  },
  {
    name: "Construction & Infrastructure",
    clients: "Morgner Construction Management",
    body: "Advising construction and infrastructure firms on business development strategy, operational efficiency, and scaling revenue across public works and infrastructure sectors.",
    forClients: "ACEDTC understands the operational and business development realities of the construction sector and tailors growth strategy accordingly.",
  },
  {
    name: "Healthcare & Health Technology",
    clients: "Prime Healthcare · Medical Database",
    body: "Supporting organizations at the intersection of healthcare operations and business strategy — digital transformation, go-to-market execution, and internal systems that support growth at scale.",
    forClients: "Growth in healthcare requires strategic clarity and operational discipline. ACEDTC brings both, with understanding of the sector's communication and patient journey dynamics.",
  },
  {
    name: "Technology & Growth-Stage Companies",
    clients: "Emerging technology companies",
    body: "Working with emerging technology companies on product positioning, growth strategy, and the operational infrastructure needed to scale without breaking.",
    forClients: "ACEDTC brings enterprise-level execution thinking to growth-stage environments — helping organizations build the structure they need without bureaucracy they don't.",
  },
  {
    name: "B2B Professional Services",
    clients: "Consulting, financial services, professional services firms",
    body: "Helping professional services firms improve business development, client retention, sales process, and operational performance across multiple sectors.",
    forClients: "Professional services firms face a unique challenge: the people delivering the service are often also responsible for selling it. ACEDTC builds systems that account for this reality.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">About ACEDTC</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Built by an Operator. Designed for Execution.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              ACEDTC exists because most consulting relationships stop where the real work begins. We
              don&apos;t just diagnose the problem. We build what&apos;s needed to fix it — and we stay
              accountable to the results.
            </p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Bio text */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">The Founder</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-2">
                  Esad Kajosevic
                </h2>
                <p className="text-[#64748B] font-medium mb-6">Executive Advisor · Operator · Coach</p>

                <blockquote className="border-l-3 border-[#2563EB] pl-5 mb-8">
                  <p className="text-[#0A1628] text-xl font-semibold italic">
                    &ldquo;Execution drives strategy — not the other way around.&rdquo;
                  </p>
                </blockquote>

                <div className="space-y-5 text-[#64748B] leading-relaxed">
                  <p>
                    Esad Kajosevic has spent more than 30 years in the space between strategy and result — working with
                    enterprise organizations, regional businesses, and individual leaders who needed more than a plan.
                    They needed someone who could help them build, implement, and sustain the systems that make
                    performance repeatable.
                  </p>
                  <p>
                    His career spans automotive OEM operations, healthcare business development, construction and
                    infrastructure consulting, and B2B professional services. He has worked with organizations ranging
                    from Fortune-level OEMs to growth-stage businesses navigating their first structured scaling effort.
                    In every context, the work has been the same: identify what&apos;s actually driving the problem, build
                    the system that addresses it, and hold the process accountable until the outcome is real.
                  </p>
                  <p>
                    Esad holds an MBA in Digital Transformation from the University of California, Irvine — Paul Merage
                    School of Business. His academic foundation in data-driven leadership, digital strategy, and
                    organizational behavior complements the frontline execution experience he brings to every engagement.
                  </p>
                  <p>
                    He is known not as a consultant who hands you a deck and departs — but as an advisor who stays in
                    the work.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Credentials card */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="bg-[#F8F7F4] rounded-xl p-8 sticky top-24">
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-2">Experience</p>
                      <p className="text-3xl font-bold text-[#0A1628]">30+ Years</p>
                      <p className="text-[#64748B] text-sm">Executive leadership, consulting, and coaching</p>
                    </div>
                    <div className="border-t border-[#E2E8F0] pt-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-2">Education</p>
                      <p className="text-base font-semibold text-[#0A1628]">MBA — Digital Transformation</p>
                      <p className="text-[#64748B] text-sm">UC Irvine, Paul Merage School of Business</p>
                    </div>
                    <div className="border-t border-[#E2E8F0] pt-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Named Client Experience</p>
                      <div className="space-y-1.5">
                        {["Kia America", "Hyundai Motor Company", "JM&A Group", "Prime Healthcare", "Morgner Construction Management"].map(c => (
                          <p key={c} className="text-sm font-medium text-[#0A1628]">{c}</p>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-[#E2E8F0] pt-6">
                      <Link href="/contact" className="block w-full text-center px-4 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                        Book a Consultation with Esad →
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-[#F8F7F4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Core Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4 max-w-2xl">
              The Disciplines Behind Every ACEDTC Engagement
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mb-16 leading-relaxed">
              Esad&apos;s background spans six major disciplines. Most engagements require more than one.
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {expertise.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 60}>
                <div className="bg-white rounded-xl p-8 border border-[#E2E8F0]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-lg font-semibold text-[#0A1628] mb-3">{e.title}</h3>
                      <p className="text-[#64748B] text-sm leading-relaxed">{e.body}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Focus Areas</p>
                      <ul className="space-y-1.5">
                        {e.points.map(pt => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-[#64748B]">
                            <span className="text-[#2563EB] mt-0.5 flex-shrink-0">→</span>
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

      {/* INDUSTRIES */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-3">Industry Experience</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4 max-w-2xl">
              Cross-Industry Experience That Transfers
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mb-16 leading-relaxed">
              The best growth ideas in your industry often come from the playbook of a completely different one.
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 60}>
                <div className="border border-[#E2E8F0] rounded-xl p-8 hover:border-[#2563EB] transition-colors">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-base font-semibold text-[#0A1628] mb-1">{ind.name}</h3>
                      <p className="text-xs text-[#2563EB] font-medium">{ind.clients}</p>
                    </div>
                    <div>
                      <p className="text-[#64748B] text-sm leading-relaxed">{ind.body}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-2">What this means for you</p>
                      <p className="text-sm text-[#0A1628] leading-relaxed">{ind.forClients}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Leadership Philosophy</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                How Esad Approaches Every Engagement
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <p className="text-white text-2xl font-bold italic">
                  &ldquo;Execution drives strategy — not the other way around.&rdquo;
                </p>
              </div>
              <p className="text-white/60 leading-relaxed text-base">
                This is not a rhetorical position. It&apos;s a perspective earned over 30 years of watching
                well-designed strategies fail because no one built the system that was supposed to make them work.
              </p>
              <p className="text-white/60 leading-relaxed text-base mt-4">
                Most consulting engagements end with a deliverable — a strategy document, a roadmap, a set of
                recommendations. These are not outcomes. They are the beginning of the work. Outcomes happen
                when the system gets built, the team gets aligned, and the measurements confirm the change is real.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-6">Four Principles</p>
              <div className="space-y-4">
                {[
                  { n: "01", title: "Clear accountability at every level", body: "Every growth initiative needs an owner. Every milestone needs a deadline. Every result needs to be measured. Without explicit accountability, good plans become forgotten intentions." },
                  { n: "02", title: "Data-driven decision making", body: "Business decisions made without data are guesses. Better guesses than random chance, perhaps — but still guesses. Esad builds the measurement infrastructure that turns gut feeling into informed judgment." },
                  { n: "03", title: "Consistent communication rhythms", body: "Leadership cadence — weekly, quarterly, annual — is the mechanism by which strategy stays alive inside an organization. Esad helps clients build rhythms that keep priorities visible and execution consistent." },
                  { n: "04", title: "The right structure enables performance", body: "People perform better when they have clear roles, clear goals, the right tools, and a system that supports their work. Building that structure is one of the highest-leverage investments any organization can make." },
                ].map(p => (
                  <div key={p.n} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="flex gap-4">
                      <span className="text-xs font-mono text-[#2563EB] flex-shrink-0 mt-0.5">{p.n}</span>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] tracking-tight mb-4">
              Ready to Work With Someone Who&apos;s Done This Before?
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              Book a Growth Consultation. In 45 minutes, Esad will review your current situation, identify your
              biggest growth opportunities, and give you a clear starting point — at no cost and no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                Book a Consultation with Esad →
              </Link>
              <Link href="/diagnostic" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF] transition-colors">
                Download the Revenue Leakage Diagnostic
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
