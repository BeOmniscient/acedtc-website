import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Business Growth Strategy Consulting | ACEDTC",
  description: "ACEDTC helps business owners and executives identify revenue bottlenecks, align sales and marketing, and build actionable 90-day growth plans.",
};

export default function BusinessGrowthPage() {
  return (
    <ServicePageLayout
      label="Business Growth Strategy"
      title="A Growth Strategy Your Business Can Actually Execute."
      subtitle="Most businesses don't fail because they lack ambition. They stall because strategy never gets translated into a clear plan, clear ownership, and a system for measuring progress. ACEDTC changes that."
      ctaLabel="Book a Growth Strategy Consultation →"
      whoFor={[
        "Business owners and CEOs who feel like growth has plateaued without a clear reason",
        "Leadership teams that have tried multiple tactics but lack a connected strategy",
        "Businesses preparing to scale and needing infrastructure before adding volume",
        "Companies that have outgrown their original sales and marketing approach",
        "Organizations with good products or services but inconsistent lead generation and conversion",
      ]}
      problems={[
        { title: "We're busy but not growing.", body: "High activity doesn't always produce high revenue. We identify where effort is being spent and whether it's aligned with your most valuable growth opportunities." },
        { title: "We don't know which direction to focus.", body: "Too many options, not enough prioritization. We cut through the noise and identify the three to five moves that will produce the most impact in the next 90 days." },
        { title: "Our sales and marketing aren't aligned.", body: "When sales blames marketing for bad leads and marketing blames sales for not closing, revenue suffers. We fix the alignment problem at the process level." },
        { title: "We're planning to grow but don't have the infrastructure for it.", body: "Scaling a broken system just breaks it faster. We help you build the right foundation before you add volume." },
      ]}
      whatWeDo="ACEDTC begins every growth strategy engagement with a structured business diagnostic. We review how your business generates revenue today, including lead sources, sales conversion rates, marketing performance, team capacity, technology stack, and operational constraints. From that diagnostic, we identify where the biggest revenue gaps exist, which growth channels have the most near-term potential, what process or system changes would have the greatest immediate impact, and what a realistic 30/60/90-day action plan looks like. Every recommendation is specific to your business, your market, your team, and your current stage of growth."
      included={[
        "Structured business diagnostic (revenue model, sales process, marketing channels, operations)",
        "Revenue bottleneck identification and opportunity mapping",
        "Sales and marketing alignment review",
        "Competitive positioning analysis",
        "30/60/90-day action plan with specific milestones",
        "Recommended technology and systems roadmap",
        "Priority growth channel analysis",
        "Executive summary and implementation guide",
        "Strategy review session with leadership team",
      ]}
      useCases={[
        { industry: "Regional B2B Service Firm", body: "A regional B2B services company was generating leads through referrals and a small amount of paid media but couldn't determine which efforts were producing revenue. ACEDTC ran a full business diagnostic, identified that their CRM was unused and their follow-up was entirely manual, and built a 90-day plan to systematize lead intake, automate follow-up, and connect marketing attribution. Within two quarters they had a clear picture of which channels were working." },
        { industry: "Healthcare Practice Expanding Locations", body: "A healthcare business expanding to multiple locations needed to understand whether their current marketing model would scale. ACEDTC evaluated their patient acquisition strategy, identified that their response time to new inquiries was averaging 36 hours, a significant conversion killer in their space, and built a 90-day plan to implement automated intake, reduce response time to under five minutes, and build location-level reporting." },
        { industry: "Automotive Retail Organization", body: "A multi-rooftop automotive business was running significant digital advertising spend but had no attribution infrastructure. Leadership couldn't determine which campaigns were driving floor traffic or conversions. ACEDTC developed a growth strategy that connected their CRM, digital ad campaigns, and reporting, giving them a channel-level view of ROI for the first time." },
      ]}
      outcomes={[
        "A clear, prioritized growth roadmap your team can act on",
        "Identification of specific revenue bottlenecks costing you money now",
        "A sales and marketing strategy aligned to real business goals",
        "Confidence in which direction to invest time and budget",
        "A foundation for measurable, sustainable growth",
      ]}
      related={[
        { name: "Sales Process Optimization", href: "/services/sales-process" },
        { name: "CRM & Automation", href: "/services/crm-automation" },
        { name: "Data, Analytics & Attribution", href: "/services/analytics" },
      ]}
      finalCtaTitle="Start With a Diagnosis. Not a Pitch."
      finalCtaBody="Book a Growth Consultation and we'll spend 45 minutes reviewing your current business, identifying your biggest revenue opportunities, and giving you a clear starting point, at no cost and no obligation."
    />
  );
}
