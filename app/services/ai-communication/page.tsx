import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI-Assisted Lead Response & Customer Communication | ACEDTC",
  description: "ACEDTC implements AI-assisted communication systems that help businesses respond faster, qualify leads consistently, and follow up automatically, without losing the human touch.",
};

export default function AICommunicationPage() {
  return (
    <ServicePageLayout
      heroImage="/svc-ai-communication.png"
      label="AI-Assisted Communication"
      title="Every Lead Deserves a Fast, Consistent, Intelligent Response."
      subtitle="A lead that waits more than five minutes is significantly less likely to convert. Most businesses are responding in hours, or not at all. ACEDTC implements modern response systems that make sure every lead gets answered, qualified, and followed up with, at the speed and consistency that modern buyers expect."
      ctaLabel="Schedule a Communication Review →"
      whoFor={[
        "Businesses with high lead volume that can't respond to every inquiry immediately",
        "Companies losing leads to faster-responding competitors",
        "Organizations where after-hours leads are going unanswered",
        "Businesses where front-desk or receptionist capacity is a bottleneck",
        "Service companies where speed to lead is directly tied to win rate",
      ]}
      problems={[
        { title: "We miss leads after hours and on weekends.", body: "When a prospect reaches out outside business hours, they receive silence. By morning, they've already called someone else. Modern response systems change that, without requiring your team to be on call 24/7." },
        { title: "Our response time is inconsistent.", body: "When response depends on whoever happens to be at their desk, it will always be inconsistent. A system handles every inquiry at the same speed, every time." },
        { title: "We're losing leads to faster-responding competitors.", body: "Response time is a competitive advantage most businesses ignore. The business that answers first wins a disproportionate share of leads in any market." },
        { title: "Our front desk is a bottleneck.", body: "High lead volume means your front-desk team spends time on intake and FAQ rather than on the high-value interactions that actually drive revenue. Automation handles the volume so your team handles the relationships." },
      ]}
      whatWeDo="ACEDTC designs and implements communication response systems that acknowledge every new inquiry within seconds, gather qualifying information through structured conversational follow-up, route high-intent leads to your team immediately, book appointments automatically when the prospect is ready, follow up multiple times for leads that don't respond, handle frequently asked questions, and summarize conversations and log activity directly in your CRM. These systems are designed to behave like a highly capable, always-available front-desk coordinator, one that never misses a message and hands the right conversations to the right people at the right time."
      included={[
        "Communication workflow design and mapping",
        "Missed-call response system setup",
        "Website lead intake sequences",
        "FAQ response system",
        "Lead qualification workflow",
        "Appointment booking integration",
        "Lead routing and internal notification setup",
        "CRM logging and tagging configuration",
        "Conversation summary and handoff workflow",
        "Human escalation path design",
        "Team training on handoff protocols",
        "Performance monitoring and response rate reporting",
      ]}
      useCases={[
        { industry: "Missed-Call Response, Any Industry", body: "When a prospect calls and reaches voicemail, an automatic SMS goes out within seconds: 'Hi, this is [Business Name], we just missed your call. Can I help you with something?' The prospect replies. The conversation begins. The lead is captured, and your team is notified the moment the conversation reaches a point that requires them." },
        { industry: "After-Hours Lead Capture, Healthcare Practice", body: "A healthcare practice was generating after-hours web leads that sat until 9am the next business day. By that time, a significant percentage had already booked with a competitor. ACEDTC implemented an after-hours response workflow that acknowledged inquiries within seconds, asked two qualifying questions, and presented available appointment slots. Morning arrival meant a list of scheduled appointments, not a list of cold leads to chase." },
        { industry: "Lead Reactivation, Service Business", body: "For leads that went cold three to twelve months ago, automated reactivation sequences reach out with a relevant message and offer. Some percentage will re-engage, and those conversations go directly to your team at exactly the moment the prospect is warm again." },
      ]}
      outcomes={[
        "Response time to new leads measured in seconds, not hours",
        "After-hours leads captured and qualified automatically",
        "Higher appointment booking rates from the same lead volume",
        "Fewer missed leads and less manual follow-up burden on your team",
        "A complete log of all lead conversations in your CRM",
      ]}
      related={[
        { name: "Sales Process Optimization", href: "/services/sales-process" },
        { name: "CRM & Automation", href: "/services/crm-automation" },
        { name: "Digital Marketing & Media Strategy", href: "/services/digital-marketing" },
      ]}
      finalCtaTitle="Your Next Lead Is Coming In Right Now. Will It Get Answered?"
      finalCtaBody="Schedule a Communication Systems Review and we'll map your current response process, identify where leads are being lost, and design a system that makes sure every inquiry gets the response it deserves."
    />
  );
}
