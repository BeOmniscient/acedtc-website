import type { Metadata } from "next";
import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ACEDTC | See Exactly What Drives Your Revenue",
  description:
    "ACEDTC turns scattered marketing, CRM, and sales data into one clear picture of what actually drives revenue. Strategy, systems, and attribution built and measured by an operator with 30+ years in the field.",
  keywords:
    "marketing attribution, revenue reporting, business growth consulting, sales process optimization, CRM implementation, analytics dashboards",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFCFE" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0F1A" },
  ],
};

const themeScript = `
(function(){
  try {
    var saved = localStorage.getItem("acedtc-theme");
    var sys = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", saved || sys);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${plexMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
