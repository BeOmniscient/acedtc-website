"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const services = [
  { name: "Business Growth Strategy", href: "/services/business-growth" },
  { name: "Sales Process Optimization", href: "/services/sales-process" },
  { name: "CRM & Automation", href: "/services/crm-automation" },
  { name: "Digital Marketing & Media", href: "/services/digital-marketing" },
  { name: "Data, Analytics & Attribution", href: "/services/analytics" },
  { name: "AI-Assisted Communication", href: "/services/ai-communication" },
];

const CTA_LABEL = "Book a Growth Diagnostic";
const CTA_HREF = "/diagnostic";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2" onClick={closeMobile}>
            <span className="text-lg font-bold tracking-tight text-ink">ACEDTC</span>
            <span className="eyebrow hidden text-accent sm:block">Consulting</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-7 lg:flex">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium text-ink-2 transition-colors hover:text-accent"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="nav-dropdown absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-lg border border-line bg-bg py-2 shadow-xl shadow-black/5">
                  <div className="mb-1 border-b border-line px-4 pb-2 pt-1">
                    <Link
                      href="/services"
                      className="eyebrow text-accent hover:underline"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services →
                    </Link>
                  </div>
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2.5 text-sm text-ink-2 transition-colors hover:bg-surface hover:text-accent"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: "Industries", href: "/industries" },
              { label: "About", href: "/about" },
              { label: "Diagnostic", href: "/diagnostic" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-2 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}

            <ThemeToggle />

            <Link
              href={CTA_HREF}
              className="inline-flex items-center rounded-md bg-accent-solid px-4 py-2 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-ink"
            >
              {CTA_LABEL}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="rounded-md p-2 text-ink"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-line bg-bg lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            <p className="eyebrow px-3 py-2 text-accent">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={closeMobile}
                className="block rounded-md px-3 py-2.5 text-sm text-ink-2 transition-colors hover:bg-surface hover:text-accent"
              >
                {s.name}
              </Link>
            ))}
            <div className="mt-2 border-t border-line pt-2">
              {[
                { label: "Industries", href: "/industries" },
                { label: "About", href: "/about" },
                { label: "Diagnostic", href: "/diagnostic" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="block rounded-md px-3 py-2.5 text-sm text-ink-2 transition-colors hover:bg-surface hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href={CTA_HREF}
              onClick={closeMobile}
              className="mt-3 block w-full rounded-md bg-accent-solid px-4 py-3 text-center text-sm font-semibold text-on-accent transition-colors hover:bg-accent-ink"
            >
              {CTA_LABEL}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
