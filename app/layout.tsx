import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ACEDTC | Business Growth, Sales Systems & Consulting Implementation",
  description:
    "ACEDTC is a consulting and implementation partner helping businesses improve lead generation, sales processes, CRM systems, marketing attribution, and measurable ROI.",
  keywords:
    "business growth consulting, sales process optimization, CRM implementation, marketing attribution, revenue consulting",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
