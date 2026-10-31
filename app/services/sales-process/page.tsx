import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sales Process Optimization Consulting | ACEDTC",
  description: "ACEDTC helps businesses build repeatable sales processes, structured pipelines, and consistent follow-up systems that convert more leads into closed revenue.",
};

export default function SalesProcessPage() {
  return (
    <ServicePageLayout
      heroImage="/svc-sales-process.png"
      label="Sales Process Optimization"
      title="Build a Sales Process Your Team Can Follow, and Your Business Can Measure."
      subtitle="A great sales team without a defined process is like a great driver without a road. ACEDTC helps you design the process, build the tools, and create the systems that make selling more consistent, more measurable, and more effective."
      ctaLabel="Book a Sales Consultation →"
      whoFor={[
        "Business owners who are the primary salesperson and want to build a process that can scale beyond them",
        "Sales leaders managing a team with inconsistent close rates and unclear pipeline visibility",
        "Companies with good lead volume but weak conversion rates",
        "Organizations experiencing high drop-off between initial contact and closed sale",
        "Businesses where follow-up depends on individual memory rather than a structured system",
      ]}
      problems={[
        { title: "Leads come in but don't always get followed up.", body: "Without a defined intake workflow and automated follow-up, leads fall through the cracks, especially over weekends, after hours, and during busy periods." },
        { title: "Our pipeline looks full but revenue doesn't match.", body: "A pipeline filled with stale opportunities is not a pipeline. It's a wishlist. We clean up the process so that pipeline stage actually means something." },
        { title: "Different salespeople do things completely differently.", body: "Inconsistent approach means inconsistent results. We build a standardized process that gives your team structure without removing their personality." },
        { title: "We lose deals during the follow-up phase.", body: "Most sales are lost not because the prospect said no, but because no one followed up a third, fourth, or fifth time. We build the system that does." },
      ]}
      whatWeDo="ACEDTC evaluates your current sales process from the moment a lead comes in to the moment a deal is won or lost. We look at how leads are captured, how they're assigned, how quickly they receive a response, how follow-up is structured, what tools the team is using, and what data is being tracked. From that evaluation, we design and implement a structured lead intake workflow, defined pipeline stages with clear exit criteria, a multi-touch follow-up cadence, qualification criteria and scoring, sales scripts and email templates, appointment booking systems, missed-lead recovery workflows, CRM pipeline configuration, and reporting to track conversion at each stage."
      included={[
        "Current sales process audit and gap analysis",
        "Lead intake workflow design and implementation",
        "Pipeline stage definition and CRM configuration",
        "Multi-touch follow-up cadence (calls, email, SMS)",
        "Sales scripts and communication templates",
        "Qualification framework and lead scoring",
        "Appointment booking workflow setup",
        "Missed-lead recovery automation",
        "Sales cycle analysis and conversion benchmarking",
        "Reporting configuration for pipeline performance",
        "Team training and SOP documentation",
      ]}
      useCases={[
        { industry: "Home Services Company", body: "A residential home services business was spending heavily on digital leads but closing less than 15% of them. ACEDTC found that the average response time to new leads was four hours, follow-up stopped after one call, and there was no system for leads that didn't answer. We built a 5-touch follow-up sequence, implemented automated SMS and email outreach, and reduced average response time to under three minutes. Close rate improved significantly within 60 days." },
        { industry: "B2B Professional Services Firm", body: "A consulting and services firm had a capable team but no consistent sales process. Different team members approached prospects differently, proposals went out with no structured follow-up, and the CRM showed minimal usage. ACEDTC built a defined intake-to-close process, configured the CRM with clear pipeline stages, created email templates and a proposal follow-up cadence, and trained the team. The firm gained pipeline visibility for the first time." },
      ]}
      outcomes={[
        "Every lead captured and entered into a trackable system",
        "Consistent follow-up that doesn't depend on individual memory",
        "Shorter average sales cycles through faster response and structured cadence",
        "Higher close rates through better qualification and follow-up",
        "Clear pipeline data that leadership can rely on for forecasting",
      ]}
      related={[
        { name: "CRM & Automation", href: "/services/crm-automation" },
        { name: "Business Growth Strategy", href: "/services/business-growth" },
        { name: "AI-Assisted Communication", href: "/services/ai-communication" },
      ]}
      finalCtaTitle="Your Next Sale Shouldn't Depend on Who Remembered to Follow Up."
      finalCtaBody="Book a Sales Process Consultation and we'll evaluate your current process, identify the gaps costing you revenue, and build a system that closes more of the leads you're already generating."
    />
  );
}
