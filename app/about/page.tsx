import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { PageHero, SectionHead, FinalCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "About ACEDTC | Esad Kajosevic, Executive Consulting & Implementation",
  description:
    "ACEDTC is led by Esad Kajosevic, a 30-year executive advisor with experience at Kia America, Medical Database, Gnosis Diagnostic, and across B2B, automotive, healthcare, and construction.",
};

const expertise = [
  {
    title: "Executive Coaching & Leadership Development",
    body: "One-on-one coaching for executives, senior leaders, and high-potential managers focused on performance, accountability, and decision-making. The goal is not insight alone. It is behavioral change that produces measurable business outcomes.",
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
    body: "Marketing built around the business objective, not the channel. With experience across automotive, healthcare, and consulting, Esad develops targeted strategies that align marketing investment to revenue outcomes.",
    points: ["Digital marketing strategy including geo-fencing and CRM integration", "Brand positioning and message development", "Customer journey optimization", "Sales enablement and marketing alignment", "Event strategy and industry engagement"],
  },
  {
    title: "Operational Efficiency & Financial Performance",
    body: "A CFO-minded lens applied to operational improvement. Esad helps organizations optimize profitability, improve cash flow management, and build the measurement infrastructure that makes performance transparent at every level.",
    points: ["KPI development and executive dashboard design", "P&L analysis across cash, accrual, and rolling 12-month views", "Billing, collections, and cash flow optimization", "Margin improvement strategies", "Process improvement and scalability planning"],
  },
];

const industries = [
  {
    name: "Automotive & OEM / Dealer Operations",
    clients: "Several automotive dealership groups, OEMs, and third-party administrators",
    body: "Deep experience across the automotive ecosystem: district-level performance management, F&I strategy, dealer profitability improvement, and sales process optimization at scale.",
    forClients: "ACEDTC speaks the language of automotive operations natively, from gross profit per unit to lead response protocols to multi-rooftop performance management.",
  },
  {
    name: "Construction & Infrastructure",
    clients: "Morgner Construction Management",
    body: "Advising construction and infrastructure firms on business development strategy, operational efficiency, and scaling revenue across public works and infrastructure sectors.",
    forClients: "ACEDTC understands the operational and business development realities of the construction sector and tailors growth strategy accordingly.",
  },
  {
    name: "Healthcare & Health Technology",
    clients: "Medical Database, Gnosis Diagnostic",
    body: "Supporting organizations at the intersection of healthcare operations and business strategy: digital transformation, go-to-market execution, and internal systems that support growth at scale.",
    forClients: "Growth in healthcare requires strategic clarity and operational discipline. ACEDTC brings both, with an understanding of the sector's communication and patient journey dynamics.",
  },
  {
    name: "Technology & Growth-Stage Companies",
    clients: "Emerging technology companies",
    body: "Working with emerging technology companies on product positioning, growth strategy, and the operational infrastructure needed to scale without breaking.",
    forClients: "ACEDTC brings enterprise-level execution thinking to growth-stage environments, helping organizations build the structure they need without the bureaucracy they don't.",
  },
  {
    name: "B2B Professional Services",
    clients: "Consulting, financial services, professional services firms",
    body: "Helping professional services firms improve business development, client retention, sales process, and operational performance across multiple sectors.",
    forClients: "Professional services firms face a unique challenge: the people delivering the service are often also responsible for selling it. ACEDTC builds systems that account for this reality.",
  },
];

const principles = [
  { n: "01", title: "Clear accountability at every level", body: "Every growth initiative needs an owner. Every milestone needs a deadline. Every result needs to be measured. Without explicit accountability, good plans become forgotten intentions." },
  { n: "02", title: "Data-driven decision making", body: "Business decisions made without data are guesses. Better guesses than random chance, perhaps, but still guesses. Esad builds the measurement infrastructure that turns gut feeling into informed judgment." },
  { n: "03", title: "Consistent communication rhythms", body: "Leadership cadence, weekly, quarterly, and annual, is the mechanism by which strategy stays alive inside an organization. Esad helps clients build rhythms that keep priorities visible and execution consistent." },
  { n: "04", title: "The right structure enables performance", body: "People perform better when they have clear roles, clear goals, the right tools, and a system that supports their work. Building that structure is one of the highest-leverage investments any organization can make." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ACEDTC"
        title="Built by an operator. Designed for execution."
        lede="ACEDTC exists because most consulting relationships stop where the real work begins. We don't just diagnose the problem. We build what's needed to fix it, and we stay accountable to the results."
      />

      {/* FOUNDER */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="mb-6 flex items-center gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/esad.jpeg"
                    alt="Esad Kajosevic, founder of ACEDTC"
                    width={112}
                    height={112}
                    className="h-24 w-24 flex-shrink-0 rounded-xl object-cover ring-1 ring-line sm:h-28 sm:w-28"
                  />
                  <div>
                    <p className="eyebrow mb-2 text-accent">The founder</p>
                    <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">Esad Kajosevic</h2>
                    <p className="mt-1 font-medium text-muted">Executive Advisor / Operator / Coach</p>
                  </div>
                </div>

                <blockquote className="mb-8 border-l-2 border-accent pl-5">
                  <p className="font-serif text-xl italic text-ink">
                    &ldquo;Execution drives strategy, not the other way around.&rdquo;
                  </p>
                </blockquote>

                <div className="space-y-5 leading-relaxed text-ink-2">
                  <p>
                    Esad Kajosevic has spent more than 30 years in the space between strategy and result, working with
                    enterprise organizations, regional businesses, and individual leaders who needed more than a plan.
                    They needed someone who could help them build, implement, and sustain the systems that make
                    performance repeatable.
                  </p>
                  <p>
                    His career spans automotive OEM operations, healthcare business development, construction and
                    infrastructure consulting, and B2B professional services. He has worked with organizations ranging
                    from Fortune-level OEMs to growth-stage businesses navigating their first structured scaling effort.
                    In every context, the work has been the same: identify what is actually driving the problem, build
                    the system that addresses it, and hold the process accountable until the outcome is real.
                  </p>
                  <p>
                    Esad holds an MBA in Digital Transformation from the University of California, Irvine, Paul Merage
                    School of Business. His academic foundation in data-driven leadership, digital strategy, and
                    organizational behavior complements the frontline execution experience he brings to every engagement.
                  </p>
                  <p>
                    He is known not as a consultant who hands you a deck and departs, but as an advisor who stays in
                    the work.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="sticky top-24 rounded-xl border border-line bg-surface p-8">
                  <div className="space-y-6">
                    <div>
                      <p className="eyebrow mb-2 text-accent">Experience</p>
                      <p className="tabular text-3xl font-semibold text-ink">30+ Years</p>
                      <p className="text-sm text-ink-2">Executive leadership, consulting, and coaching</p>
                    </div>
                    <div className="border-t border-line pt-6">
                      <p className="eyebrow mb-2 text-accent">Education</p>
                      <p className="text-base font-semibold text-ink">MBA, Digital Transformation</p>
                      <p className="text-sm text-ink-2">UC Irvine, Paul Merage School of Business</p>
                    </div>
                    <div className="border-t border-line pt-6">
                      <p className="eyebrow mb-3 text-accent">Named client experience</p>
                      <div className="space-y-1.5">
                        {["Kia America", "Medical Database", "JM&A Group", "Gnosis Diagnostic", "Morgner Construction Management"].map((c) => (
                          <p key={c} className="text-sm font-medium text-ink">{c}</p>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-line pt-6">
                      <Link href="/diagnostic" className="block w-full rounded-md bg-accent-solid px-4 py-3 text-center text-sm font-semibold text-on-accent transition-colors hover:bg-accent-ink">
                        Book a Growth Diagnostic →
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
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="05"
              kicker="Core expertise"
              title="The disciplines behind every engagement."
              lede="Esad's background spans five major disciplines. Most engagements require more than one."
            />
          </ScrollReveal>
          <div className="mt-12 space-y-4">
            {expertise.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 50}>
                <div className="rounded-xl border border-line bg-bg p-7 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                      <h3 className="mb-3 text-lg font-semibold text-ink">{e.title}</h3>
                      <p className="text-sm leading-relaxed text-ink-2">{e.body}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-3 text-muted">Focus areas</p>
                      <ul className="space-y-1.5">
                        {e.points.map((pt) => (
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

      {/* INDUSTRIES */}
      <section className="bg-bg py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHead
              index="→"
              kicker="Industry experience"
              title="Cross-industry experience that transfers."
              lede="The best growth ideas in your industry often come from the playbook of a completely different one."
            />
          </ScrollReveal>
          <div className="mt-12 space-y-4">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 50}>
                <div className="card-seam rounded-xl border border-line bg-surface p-7 sm:p-8">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div>
                      <h3 className="mb-1 text-base font-semibold text-ink">{ind.name}</h3>
                      <p className="text-xs font-medium text-accent">{ind.clients}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-2">{ind.body}</p>
                    <div>
                      <p className="eyebrow mb-2 text-muted">What this means for you</p>
                      <p className="text-sm leading-relaxed text-ink">{ind.forClients}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-inkwell py-20 text-on-dark sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className="eyebrow mb-4 text-accent">Leadership philosophy</p>
              <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight text-on-dark sm:text-4xl">
                How Esad approaches every engagement.
              </h2>
              <div className="mb-8 rounded-xl border border-line-on-dark bg-surface/40 p-6">
                <p className="font-serif text-2xl italic text-on-dark">
                  &ldquo;Execution drives strategy, not the other way around.&rdquo;
                </p>
              </div>
              <p className="leading-relaxed text-on-dark-2">
                This is not a rhetorical position. It is a perspective earned over 30 years of watching well-designed
                strategies fail because no one built the system that was supposed to make them work.
              </p>
              <p className="mt-4 leading-relaxed text-on-dark-2">
                Most consulting engagements end with a deliverable: a strategy document, a roadmap, a set of
                recommendations. These are not outcomes. They are the beginning of the work. Outcomes happen when the
                system gets built, the team gets aligned, and the measurements confirm the change is real.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="eyebrow mb-6 text-accent">Four principles</p>
              <div className="space-y-4">
                {principles.map((p) => (
                  <div key={p.n} className="rounded-xl border border-line-on-dark bg-surface/40 p-5">
                    <div className="flex gap-4">
                      <span className="tabular mt-0.5 flex-shrink-0 text-sm text-accent">{p.n}</span>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-on-dark">{p.title}</h3>
                        <p className="text-sm leading-relaxed text-on-dark-2">{p.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Ready to work with someone who has done this before?"
        body="Book a growth diagnostic. Esad will review your current situation, identify your biggest opportunities, and give you a clear starting point, at no cost and no obligation."
      />
    </>
  );
}
