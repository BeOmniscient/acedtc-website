import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Industries Served | ACEDTC — Automotive, Healthcare, Construction & More",
  description: "ACEDTC brings cross-industry experience across automotive, healthcare, construction, B2B services, and technology — with named client experience at Kia America, Hyundai, Prime Healthcare, and Morgner Construction.",
};

const industries = [
  {
    name: "Automotive & OEM / Dealer Operations",
    clients: "Kia America · Hyundai Motor Company · JM&A Group",
    body: "Deep experience across the automotive ecosystem — at the OEM level, the district level, and the individual dealership level. We understand how dealer groups manage performance, how F&I functions within the sales process, how CRM is used and underused in automotive retail, and how digital marketing connects — or fails to connect — to showroom traffic and closed units.",
    challenges: ["Lead response time and digital lead management", "CRM adoption and pipeline discipline across multiple rooftops", "F&I performance and sales process consistency", "Marketing attribution — connecting ad spend to sold units", "District and regional performance reporting"],
    color: "border-blue-200",
  },
  {
    name: "Healthcare & Health Technology",
    clients: "Prime Healthcare · Medical Database",
    body: "Healthcare organizations face a unique combination of growth complexity: regulated communication requirements, patient journey dynamics that differ from traditional B2B sales, and the operational challenge of scaling clinical capacity alongside administrative performance. ACEDTC brings digital transformation strategy, business development planning, and operational improvement to healthcare organizations at multiple growth stages.",
    challenges: ["Patient acquisition and intake optimization", "Digital marketing in a compliance-aware environment", "CRM and communication system implementation", "Operational efficiency and scheduling performance", "Go-to-market strategy for new service lines or locations"],
    color: "border-green-200",
  },
  {
    name: "Construction & Infrastructure",
    clients: "Morgner Construction Management",
    body: "Construction businesses operate in a business development environment defined by long sales cycles, relationship-driven pipelines, project-based revenue, and the constant challenge of maintaining margin as labor and material costs fluctuate. ACEDTC advises construction and infrastructure firms on growth strategy, business development structure, operational efficiency, and financial performance systems.",
    challenges: ["Business development pipeline structure and CRM", "Proposal and bid process efficiency", "Revenue forecasting and backlog management", "Operational margin improvement", "Leadership development and accountability systems"],
    color: "border-amber-200",
  },
  {
    name: "B2B Professional Services",
    clients: "Consulting, financial services, legal, engineering, staffing",
    body: "Professional services firms share a structural challenge: the same people who deliver the service are often responsible for selling it. Business development doesn't happen on its own, and the systems that support it are often underdeveloped. ACEDTC helps professional services firms build the sales infrastructure, client communication systems, and reporting visibility that produce consistent, scalable revenue growth.",
    challenges: ["Business development cadence and pipeline management", "Client retention and expansion strategy", "Marketing and positioning strategy", "KPI development and performance dashboards", "Leadership alignment and accountability rhythms"],
    color: "border-purple-200",
  },
  {
    name: "Technology & Growth-Stage Companies",
    clients: "Emerging technology companies across sectors",
    body: "Growth-stage technology companies often face the same challenge: they outgrow their processes before they build replacements. The same scrappiness that drove early traction becomes a constraint when the organization needs repeatability, predictability, and scale. ACEDTC works with growth-stage companies to build the operational and go-to-market infrastructure that allows them to grow without breaking.",
    challenges: ["Sales process design and CRM implementation", "Go-to-market strategy and messaging positioning", "Marketing attribution and performance reporting", "Leadership development and team accountability", "Operational systems and scaling strategy"],
    color: "border-[#2563EB]/30",
  },
  {
    name: "Local & Regional Service Businesses",
    clients: "Home services, retail, local professional services",
    body: "Local and regional businesses are often running marketing and sales through a combination of word-of-mouth, digital ads, and manual follow-up — with no clear picture of what's working and no system to make sure every lead gets handled. ACEDTC builds the digital infrastructure that gives local businesses the same capabilities as much larger competitors.",
    challenges: ["Lead capture and management across multiple channels", "Speed-to-lead and automated follow-up", "Local SEO and digital marketing strategy", "CRM adoption and customer communication", "ROI visibility for marketing spend"],
    color: "border-rose-200",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0A1628] pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Industries</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Cross-Industry Experience That Transfers.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              ACEDTC doesn&apos;t apply generic consulting frameworks to every client. The industry
              experience behind every engagement means we understand the specific dynamics,
              vocabulary, and challenges of your sector — and we bring solutions that have been
              tested in environments like yours.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES LIST */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 50}>
                <div className={`border-l-4 ${ind.color} bg-[#F8F7F4] rounded-xl p-8`}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h2 className="text-xl font-bold text-[#0A1628] mb-1">{ind.name}</h2>
                      <p className="text-xs text-[#2563EB] font-semibold mb-4">{ind.clients}</p>
                      <p className="text-[#64748B] leading-relaxed text-sm">{ind.body}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#64748B] mb-3">
                        Common Challenges We Address
                      </p>
                      <ul className="space-y-2">
                        {ind.challenges.map(c => (
                          <li key={c} className="flex items-start gap-2 text-sm text-[#64748B]">
                            <span className="text-[#2563EB] flex-shrink-0 mt-0.5">→</span>
                            {c}
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

      {/* WHY IT MATTERS */}
      <section className="bg-[#0A1628] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2563EB] mb-4">Why Industry Experience Matters</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                The Best Ideas in Your Industry Often Come From Someone Who&apos;s Worked Outside It.
              </h2>
              <p className="text-white/60 leading-relaxed text-lg mb-6">
                Cross-industry experience means ACEDTC brings pattern recognition that most single-industry
                consultants never develop. We&apos;ve seen what works in automotive dealer operations and applied
                it to healthcare intake systems. We&apos;ve taken accountability structures from construction
                management and built them into B2B sales processes.
              </p>
              <p className="text-white/60 leading-relaxed">
                Every engagement is informed by decades of cross-sector work — which means the solutions
                we bring are rarely what the industry already knows. They&apos;re what the industry could
                learn from everyone else.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {["Kia America", "Hyundai Motor Company", "JM&A Group", "Prime Healthcare", "Morgner Construction Management", "B2B Service Firms"].map(name => (
                  <div key={name} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-white/70 text-sm font-medium">{name}</p>
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
              Don&apos;t See Your Industry? Let&apos;s Talk Anyway.
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              The systems we build — lead management, CRM automation, marketing attribution, sales process
              design — apply across virtually every business that sells a product or service. Book a
              consultation and we&apos;ll tell you directly whether we&apos;re the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors">
                Book a Free Consultation →
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
