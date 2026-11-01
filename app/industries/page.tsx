import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { PageHero, SectionHead, FinalCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries Served | ACEDTC Automotive, Healthcare, Construction & More",
  description:
    "ACEDTC brings cross-industry experience across automotive, healthcare, construction, B2B services, and technology, with named client experience at Kia America, Medical Database, Gnosis Diagnostic, and Morgner Construction.",
};

const industries: {
  name: string;
  clients: string;
  body: string;
  challenges: string[];
  image?: string;
}[] = [
  {
    name: "Automotive & OEM / Dealer Operations",
    image: "/industry-automotive.png",
    clients: "Several automotive dealership groups, OEMs, and third-party administrators",
    body: "Deep experience across the automotive ecosystem: at the OEM level, the district level, and the individual dealership level. We understand how dealer groups manage performance, how F&I functions within the sales process, how CRM is used and underused in automotive retail, and how digital marketing connects, or fails to connect, to showroom traffic and closed units.",
    challenges: ["Lead response time and digital lead management", "CRM adoption and pipeline discipline across multiple rooftops", "F&I performance and sales process consistency", "Marketing attribution, connecting ad spend to sold units", "District and regional performance reporting"],
  },
  {
    name: "Healthcare & Health Technology",
    image: "/industry-healthcare.png",
    clients: "Medical Database, Gnosis Diagnostic",
    body: "Healthcare organizations face a unique combination of growth complexity: regulated communication requirements, patient journey dynamics that differ from traditional B2B sales, and the operational challenge of scaling clinical capacity alongside administrative performance. ACEDTC brings digital transformation strategy, business development planning, and operational improvement to healthcare organizations at multiple growth stages.",
    challenges: ["Patient acquisition and intake optimization", "Digital marketing in a compliance-aware environment", "CRM and communication system implementation", "Operational efficiency and scheduling performance", "Go-to-market strategy for new service lines or locations"],
  },
  {
    name: "Construction & Infrastructure",
    image: "/industry-construction.png",
    clients: "Morgner Construction Management",
    body: "Construction businesses operate in a business development environment defined by long sales cycles, relationship-driven pipelines, project-based revenue, and the constant challenge of maintaining margin as labor and material costs fluctuate. ACEDTC advises construction and infrastructure firms on growth strategy, business development structure, operational efficiency, and financial performance systems.",
    challenges: ["Business development pipeline structure and CRM", "Proposal and bid process efficiency", "Revenue forecasting and backlog management", "Operational margin improvement", "Leadership development and accountability systems"],
  },
  {
    name: "B2B Professional Services",
    clients: "Consulting, financial services, legal, engineering, staffing",
    body: "Professional services firms share a structural challenge: the same people who deliver the service are often responsible for selling it. Business development doesn't happen on its own, and the systems that support it are often underdeveloped. ACEDTC helps professional services firms build the sales infrastructure, client communication systems, and reporting visibility that produce consistent, scalable revenue growth.",
    challenges: ["Business development cadence and pipeline management", "Client retention and expansion strategy", "Marketing and positioning strategy", "KPI development and performance dashboards", "Leadership alignment and accountability rhythms"],
  },
  {
    name: "Technology & Growth-Stage Companies",
    clients: "Emerging technology companies across sectors",
    body: "Growth-stage technology companies often face the same challenge: they outgrow their processes before they build replacements. The same scrappiness that drove early traction becomes a constraint when the organization needs repeatability, predictability, and scale. ACEDTC works with growth-stage companies to build the operational and go-to-market infrastructure that lets them grow without breaking.",
    challenges: ["Sales process design and CRM implementation", "Go-to-market strategy and messaging positioning", "Marketing attribution and performance reporting", "Leadership development and team accountability", "Operational systems and scaling strategy"],
  },
  {
    name: "Local & Regional Service Businesses",
    clients: "Home services, retail, local professional services",
    body: "Local and regional businesses are often running marketing and sales through a mix of word-of-mouth, digital ads, and manual follow-up, with no clear picture of what is working and no system to make sure every lead gets handled. ACEDTC builds the digital infrastructure that gives local businesses the same capabilities as much larger competitors.",
    challenges: ["Lead capture and management across multiple channels", "Speed-to-lead and automated follow-up", "Local SEO and digital marketing strategy", "CRM adoption and customer communication", "ROI visibility for marketing spend"],
  },
];

const names = ["Kia America", "Medical Database", "JM&A Group", "Gnosis Diagnostic", "Morgner Construction Management", "B2B Service Firms"];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Cross-industry experience that transfers."
        lede="ACEDTC doesn't apply generic frameworks to every client. The industry experience behind every engagement means we understand the specific dynamics, vocabulary, and challenges of your sector, and we bring solutions tested in environments like yours."
      />

      {/* INDUSTRIES LIST */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead index="06" kicker="Sectors we serve" title="Six fields, one operating discipline." />
          </ScrollReveal>
          <div className="mt-12 space-y-4">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 50}>
                <div className="card-seam overflow-hidden rounded-xl border border-line bg-surface">
                  {ind.image && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ind.image} alt="" aria-hidden="true" className="aspect-[21/9] w-full border-b border-line object-cover" />
                    </>
                  )}
                  <div className="grid grid-cols-1 gap-8 p-7 sm:p-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <h2 className="mb-1 text-xl font-semibold text-ink">{ind.name}</h2>
                      <p className="mb-4 text-xs font-semibold text-accent">{ind.clients}</p>
                      <p className="text-sm leading-relaxed text-ink-2">{ind.body}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-3 text-muted">Challenges we address</p>
                      <ul className="space-y-2">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-ink-2">
                            <span className="mt-0.5 flex-shrink-0 text-accent">→</span>
                            <span className="leading-relaxed">{c}</span>
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
      <section className="bg-inkwell py-20 text-on-dark sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className="eyebrow mb-4 text-accent">Why industry experience matters</p>
              <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight text-on-dark sm:text-4xl">
                The best ideas in your industry often come from someone who has worked outside it.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-on-dark-2">
                Cross-industry experience means ACEDTC brings pattern recognition that most single-industry consultants
                never develop. We've seen what works in automotive dealer operations and applied it to healthcare intake
                systems. We've taken accountability structures from construction management and built them into B2B sales
                processes.
              </p>
              <p className="leading-relaxed text-on-dark-2">
                Every engagement is informed by decades of cross-sector work, which means the solutions we bring are
                rarely what the industry already knows. They are what the industry could learn from everyone else.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line-on-dark bg-line-on-dark">
                {names.map((name) => (
                  <div key={name} className="bg-inkwell p-5">
                    <p className="text-sm font-medium text-on-dark-2">{name}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Don't see your industry? Let's talk anyway."
        body="The systems we build, lead management, CRM automation, marketing attribution, sales process design, apply to virtually every business that sells a product or service. Book a diagnostic and we'll tell you directly whether we're the right fit."
      />
    </>
  );
}
