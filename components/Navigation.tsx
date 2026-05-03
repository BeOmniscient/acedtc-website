"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const services = [
  { name: "Business Growth Strategy", href: "/services/business-growth" },
  { name: "Sales Process Optimization", href: "/services/sales-process" },
  { name: "CRM & Automation", href: "/services/crm-automation" },
  { name: "Digital Marketing & Media", href: "/services/digital-marketing" },
  { name: "Data, Analytics & Attribution", href: "/services/analytics" },
  { name: "AI-Assisted Communication", href: "/services/ai-communication" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            onClick={closeMobile}
          >
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[#0A1628]" : "text-white"
              }`}
            >
              ACEDTC
            </span>
            <span
              className={`hidden sm:block text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-[#2563EB]" : "text-[#93c5fd]"
              }`}
            >
              Consulting
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-[#0A1628] hover:text-[#2563EB]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  <div className="px-4 pt-1 pb-2 border-b border-gray-100 mb-1">
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider hover:underline"
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
                      className="block px-4 py-2.5 text-sm text-[#0A1628] hover:bg-[#F8F7F4] hover:text-[#2563EB] transition-colors"
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
              { label: "Resources", href: "/diagnostic" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-[#0A1628] hover:text-[#2563EB]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-2 inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors duration-200 shadow-sm"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-[#0A1628]" : "text-white"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A1628] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest px-3 py-2">
              Services
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={closeMobile}
                className="block px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {s.name}
              </Link>
            ))}
            <div className="border-t border-white/10 mt-2 pt-2">
              {[
                { label: "Industries", href: "/industries" },
                { label: "About", href: "/about" },
                { label: "Resources", href: "/diagnostic" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="block px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-3">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="block w-full text-center px-4 py-3 rounded-md text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
