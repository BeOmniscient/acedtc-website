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
    <footer className="border-t border-line-on-dark bg-inkwell text-on-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight">ACEDTC</span>
              <span className="eyebrow text-accent">Consulting</span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-on-dark-2">
              We turn scattered marketing, CRM, and sales data into one clear picture
              of what actually drives your revenue, then build the systems that act on it.
            </p>
            <p className="eyebrow mb-2 text-on-dark-muted">Led by</p>
            <p className="text-sm font-medium text-on-dark">Esad Kajosevic</p>
            <p className="mt-0.5 text-xs text-on-dark-muted">
              MBA, Digital Transformation. UC Irvine Paul Merage School of Business.
            </p>
            <p className="mt-8 font-serif text-base italic text-accent">
              &ldquo;Execution drives strategy, not the other way around.&rdquo;
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="eyebrow mb-4 text-on-dark-muted">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-on-dark-2 transition-colors hover:text-on-dark">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="eyebrow mb-4 text-on-dark-muted">Company</h3>
            <ul className="space-y-2.5">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-on-dark-2 transition-colors hover:text-on-dark">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + CTA */}
          <div>
            <h3 className="eyebrow mb-4 text-on-dark-muted">Resources</h3>
            <ul className="mb-8 space-y-2.5">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-sm text-on-dark-2 transition-colors hover:text-on-dark">
                    {r.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/diagnostic"
              className="inline-flex items-center rounded-md bg-accent-solid px-4 py-2.5 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-ink"
            >
              Book a Growth Diagnostic →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line-on-dark pt-8 sm:flex-row">
          <p className="text-xs text-on-dark-muted">
            © {new Date().getFullYear()} ACEDTC. All rights reserved.
          </p>
          <div className="eyebrow flex items-center gap-3 text-on-dark-muted">
            <span>Strategy built</span>
            <span className="text-line-on-dark-strong">/</span>
            <span>Systems running</span>
            <span className="text-line-on-dark-strong">/</span>
            <span>Revenue measured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
