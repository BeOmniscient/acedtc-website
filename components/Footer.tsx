import Link from "next/link";

const services = [
  { name: "Business Growth Strategy", href: "/services/business-growth" },
  { name: "Sales Process Optimization", href: "/services/sales-process" },
  { name: "CRM & Automation", href: "/services/crm-automation" },
  { name: "Digital Marketing & Media", href: "/services/digital-marketing" },
  { name: "Data, Analytics & Attribution", href: "/services/analytics" },
  { name: "AI-Assisted Communication", href: "/services/ai-communication" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Industries", href: "/industries" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const resources = [
  { name: "Revenue Leakage Diagnostic", href: "/diagnostic" },
  { name: "Book a Consultation", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold tracking-tight">ACEDTC</span>
              <span className="text-xs font-medium tracking-widest uppercase text-[#2563EB]">
                Consulting
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              A consulting and implementation partner for businesses that need better lead
              systems, stronger sales processes, connected technology, clearer data, and
              measurable growth.
            </p>
            <p className="text-white/40 text-xs font-medium tracking-wide uppercase mb-2">
              Led by
            </p>
            <p className="text-white/80 text-sm font-medium">Esad Kajosevic</p>
            <p className="text-white/50 text-xs mt-0.5">
              MBA — Digital Transformation, UC Irvine Paul Merage School of Business
            </p>
            <div className="mt-8">
              <p className="text-[#2563EB] text-sm font-semibold italic">
                &ldquo;Execution drives strategy — not the other way around.&rdquo;
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + CTA */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 mb-8">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2.5 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
            >
              Book a Consultation →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} ACEDTC. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <span>Strategy Built.</span>
            <span className="text-white/10">·</span>
            <span>Systems Running.</span>
            <span className="text-white/10">·</span>
            <span>Revenue Measured.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
