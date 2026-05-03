import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Marketing Attribution, Analytics & Revenue Reporting | ACEDTC",
  description: "ACEDTC builds attribution systems, analytics dashboards, and revenue reporting that give business leaders clear visibility into what's working and where to invest.",
};

export default function AnalyticsPage() {
  return (
    <ServicePageLayout
      label="Data, Analytics & Attribution"
      title="Stop Making Important Decisions With Incomplete Data."
      subtitle="Your business is generating data every day — from your website, your campaigns, your CRM, and your sales team. The problem is that most of it is siloed, incomplete, or being read the wrong way. ACEDTC connects those data sources into a clear, accurate picture of what is actually driving your revenue."
      ctaLabel="Request a Reporting Review →"
      whoFor={[
        "Business owners who need a clearer view of where revenue is coming from",
        "Marketing leaders who can't accurately attribute ROI to specific campaigns",
        "Executives who want real-time dashboards instead of monthly manual reports",
        "Operators managing multiple locations, verticals, or revenue lines",
        "Companies whose marketing and CRM data have never been connected",
      ]}
      problems={[
        { title: "We run campaigns but can't tie them to actual revenue.", body: "Last-click attribution models, missing UTM parameters, and disconnected CRM records mean most businesses are making channel-level investment decisions with fundamentally incomplete information." },
        { title: "Leadership wants a monthly report and it takes three days to pull manually.", body: "Manual reporting is not reporting. It's historical reconstruction. We build automated dashboards that give leadership real-time access to the metrics that matter." },
        { title: "We have data everywhere but no unified picture.", body: "Google Analytics, your CRM, your ad platforms, your email system, and your sales data are all telling different parts of the same story. We connect them." },
        { title: "We don't know which leads are actually converting to revenue.", body: "Lead volume is the wrong metric. Revenue per lead source — by channel, by campaign, by geographic area — is what drives smart investment decisions. We build the tracking that shows you this." },
      ]}
      whatWeDo="ACEDTC designs and implements a connected data infrastructure that pulls your marketing, sales, and operational data into unified dashboards and attribution reports. We establish proper tracking at every stage of the customer journey and configure reporting that your team can access and act on without needing a data analyst in the room. This includes auditing current tracking and identifying gaps, setting up proper UTM parameters and campaign tracking, connecting CRM and marketing platform data, building lead source attribution models, configuring executive-level dashboards, creating location-level or team-level performance breakdowns, and establishing weekly and monthly reporting cadences."
      included={[
        "Current analytics and tracking audit",
        "UTM framework and campaign naming conventions",
        "Marketing attribution model design",
        "CRM and ad platform data connection",
        "Lead source reporting by channel, campaign, and geography",
        "Pipeline performance dashboards",
        "Conversion rate tracking (by stage, channel, and source)",
        "Executive scorecard configuration",
        "Sales team and location performance reporting",
        "Monthly data review structure and cadence",
        "Custom KPI framework aligned to business goals",
      ]}
      useCases={[
        { industry: "Multi-Location Business", body: "A business operating across multiple locations was running marketing that pooled performance data, making it impossible to know which location was performing, which campaigns were driving which location's traffic, or where to increase investment. ACEDTC built location-level attribution and a dashboard that broke performance down to the level where decisions could actually be made." },
        { industry: "B2B Service Firm — Investment Reallocation", body: "A B2B services firm was running paid search and paid social simultaneously. Paid social generated more leads. Paid search generated fewer leads but nearly all of them closed. The firm was about to cut paid search budget. ACEDTC built proper attribution before that decision was made — revealing the revenue-per-lead disparity and preventing a costly reallocation mistake." },
      ]}
      outcomes={[
        "Real-time visibility into which marketing channels are producing revenue",
        "Attribution accuracy that gives you confidence in investment decisions",
        "Automated reporting that eliminates manual data assembly",
        "Executive dashboards that leadership can check anytime",
        "A single source of truth for marketing, sales, and operational performance",
      ]}
      related={[
        { name: "Digital Marketing & Media Strategy", href: "/services/digital-marketing" },
        { name: "CRM & Automation", href: "/services/crm-automation" },
        { name: "Business Growth Strategy", href: "/services/business-growth" },
      ]}
      finalCtaTitle="Know What's Working. Invest With Confidence."
      finalCtaBody="Request a Reporting & Attribution Review and we'll evaluate your current analytics setup, identify what's missing, and build the reporting infrastructure your leadership team needs."
    />
  );
}
