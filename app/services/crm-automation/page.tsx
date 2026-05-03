import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "CRM Setup, Cleanup & Automation Implementation | ACEDTC",
  description: "ACEDTC helps businesses set up, clean up, and fully utilize their CRM. We build automation workflows that save time, reduce missed opportunities, and keep your pipeline moving.",
};

export default function CRMAutomationPage() {
  return (
    <ServicePageLayout
      label="CRM & Automation"
      title="Your CRM Should Drive Revenue. Not Collect Dust."
      subtitle="Most businesses have a CRM. Far fewer businesses actually use it the way it was designed to be used. ACEDTC configures, organizes, and automates your CRM so it becomes the engine behind your sales and client management — not another tool your team ignores."
      ctaLabel="Request a CRM Audit →"
      whoFor={[
        "Businesses that have a CRM but aren't getting value from it",
        "Organizations running manual follow-up when automation should be doing the work",
        "Companies whose CRM data is incomplete, outdated, or inconsistently used",
        "Teams managing client relationships through email threads, spreadsheets, and verbal agreements",
        "Businesses looking to implement a CRM for the first time and do it right",
      ]}
      problems={[
        { title: "Our CRM has thousands of contacts but we don't know who's hot and who's cold.", body: "Untagged, unsegmented contact databases are useless for sales and marketing. We build the structure that makes your CRM actionable." },
        { title: "Follow-up is manual and inconsistent.", body: "When follow-up depends on someone remembering to do it, things get missed. Automation ensures the right message goes to the right person at the right time — every time." },
        { title: "We're paying for a CRM but using it like a contact list.", body: "A properly configured CRM should be driving pipeline, managing relationships, triggering follow-up, and generating reports. If yours isn't doing that, it's being underused." },
        { title: "Client onboarding is chaotic.", body: "Every new client should experience the same organized onboarding sequence. Without a CRM workflow, onboarding depends on whoever happens to be handling it that week." },
      ]}
      whatWeDo="ACEDTC approaches CRM not as a software configuration project but as a revenue infrastructure project. We work with what you have — or help you select the right platform if you're starting fresh — and build a system designed around how your specific business sells, onboards, and retains clients. We configure every component of the system: pipeline stages, contact tags, automation workflows, email sequences, SMS campaigns, internal notifications, calendar integrations, and reporting dashboards. Then we document the system and train your team so adoption actually happens."
      included={[
        "Pipeline stage design and CRM configuration",
        "Contact field setup and database cleanup",
        "Lead source tagging and segmentation",
        "Integration with website forms, landing pages, and ad accounts",
        "Multi-touch follow-up sequences (email + SMS)",
        "Internal team notifications and lead assignment",
        "Appointment booking and confirmation sequences",
        "No-show recovery workflows",
        "Client onboarding automation",
        "Reactivation campaigns for cold leads",
        "Review request workflows",
        "Pipeline performance dashboards",
        "Team training and CRM usage SOPs",
      ]}
      useCases={[
        { industry: "CRM Cleanup & Activation — Professional Services", body: "A professional services firm had been using their CRM for two years but had 80% of contacts marked as 'new lead' with no pipeline stage, no tags, and no follow-up history. ACEDTC cleaned the database, built a proper segmentation structure, configured automation workflows for both new leads and dormant contacts, and trained the team. Within 30 days the firm reactivated 14 previously cold leads from their existing database." },
        { industry: "First CRM Implementation — Healthcare", body: "A growing healthcare practice had been managing patient and prospect communication through email and a spreadsheet. ACEDTC designed and implemented a CRM system from scratch — including intake workflows, appointment sequences, post-visit follow-up, review requests, and a reporting dashboard for leadership. The practice moved from reactive communication to a fully automated client journey in six weeks." },
        { industry: "Multi-Location Dealer Group — Automotive", body: "A multi-location dealer group needed CRM workflows that handled high daily lead volume, differentiated between buyer types, and tracked which campaigns each lead came from. ACEDTC built a complete workflow system that included automated speed-to-lead responses, salesperson assignment, multi-day follow-up cadences, and pipeline reporting per location." },
      ]}
      outcomes={[
        "A CRM that your team actually uses and trusts",
        "Automated follow-up that never misses a lead",
        "Visibility into pipeline health, lead sources, and conversion rates",
        "Reduced manual work for your sales and operations team",
        "A client onboarding experience that is consistent every time",
      ]}
      related={[
        { name: "Sales Process Optimization", href: "/services/sales-process" },
        { name: "AI-Assisted Communication", href: "/services/ai-communication" },
        { name: "Data, Analytics & Attribution", href: "/services/analytics" },
      ]}
      finalCtaTitle="Your CRM Should Be Working Harder Than Your Sales Team."
      finalCtaBody="Request a CRM Audit and we'll evaluate your current system, identify the gaps, and show you what a properly configured CRM can do for your business."
    />
  );
}
