import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Digital Marketing Strategy & Media Planning | ACEDTC",
  description: "ACEDTC helps businesses plan, optimize, and measure digital marketing campaigns — including paid search, paid social, local targeting, geofencing, retargeting, and landing page strategy.",
};

export default function DigitalMarketingPage() {
  return (
    <ServicePageLayout
      label="Digital Marketing & Media Strategy"
      title="Marketing That's Built Around Revenue, Not Impressions."
      subtitle="Running ads is easy. Running ads that produce measurable, attributable revenue is the work. ACEDTC helps businesses build a media strategy connected to their sales process, their CRM, and their bottom line."
      ctaLabel="Book a Marketing Consultation →"
      whoFor={[
        "Business owners spending money on digital advertising without clarity on what's working",
        "Marketing leaders inheriting campaigns that lack strategy or structure",
        "Companies whose agencies report on clicks and impressions but not on revenue",
        "Organizations launching new services, locations, or markets",
        "Businesses that need a lead capture and nurture system behind their media spend",
      ]}
      problems={[
        { title: "We're spending on ads but we can't tell if they're working.", body: "Clicks are not customers. We build the tracking and attribution infrastructure that connects your ad spend to your actual revenue." },
        { title: "Our agency reports on vanity metrics.", body: "Impressions, clicks, and reach tell you very little about business performance. We reframe measurement around cost per lead, cost per appointment, and cost per closed sale." },
        { title: "We're getting leads but they're not the right kind.", body: "Quality matters more than quantity. We help you refine targeting, messaging, and offer strategy to attract leads more likely to convert." },
        { title: "We have no retargeting strategy.", body: "The majority of website visitors don't convert on their first visit. A strong retargeting strategy keeps your brand in front of the right people until they're ready. Most businesses don't have one." },
      ]}
      whatWeDo="ACEDTC approaches digital marketing strategy from the perspective of the full customer journey — not just the top of the funnel. We evaluate your current media spend, audience targeting, creative strategy, landing page performance, lead capture systems, and post-click experience. From that evaluation, we build a media strategy that includes the right channels, the right targeting approach, the right offer structure, and the right measurement framework to connect spend to revenue. We work across paid search, paid social, programmatic advertising, display retargeting, geofencing, native advertising, connected TV, and landing page strategy."
      included={[
        "Current campaign audit and performance review",
        "Audience targeting strategy",
        "Channel selection and budget allocation recommendations",
        "Offer and messaging strategy",
        "Landing page recommendations and funnel design",
        "Lead capture form and CRM integration strategy",
        "Retargeting sequence design",
        "Geofencing strategy (where applicable)",
        "Tracking and attribution setup guidance",
        "Campaign testing framework (creative, audience, offer)",
        "Reporting dashboard configuration",
        "Monthly performance review structure",
      ]}
      useCases={[
        { industry: "Healthcare Practice", body: "A wellness practice was running paid social campaigns with a reasonable budget but generating low-quality leads that rarely converted to booked appointments. ACEDTC evaluated their targeting, creative messaging, and landing page — identified that the offer was unclear and the landing page had no appointment booking capability — and rebuilt the campaign funnel. New leads entered directly into the CRM with automated appointment booking. Lead quality improved and cost per booked appointment dropped significantly." },
        { industry: "Local Service Business", body: "A local service business needed to dominate their geographic area without wasting budget on impressions outside their service radius. ACEDTC designed a geofencing and local paid search strategy combined with retargeting sequences for website visitors and a landing page built specifically for their primary service offer. The result was a tighter geographic campaign with better cost efficiency and trackable attribution." },
      ]}
      outcomes={[
        "Marketing spend connected to measurable revenue outcomes",
        "Better lead quality through refined targeting and messaging",
        "A complete funnel from ad impression to CRM contact",
        "Retargeting coverage that keeps your brand in front of warm prospects",
        "Clear monthly reporting on what's working and what isn't",
      ]}
      related={[
        { name: "Data, Analytics & Attribution", href: "/services/analytics" },
        { name: "Sales Process Optimization", href: "/services/sales-process" },
        { name: "CRM & Automation", href: "/services/crm-automation" },
      ]}
      finalCtaTitle="Stop Guessing Which Marketing Is Working."
      finalCtaBody="Book a Media Strategy Consultation and we'll review your current campaigns, identify attribution gaps, and build a strategy that connects your spend to your revenue."
    />
  );
}
