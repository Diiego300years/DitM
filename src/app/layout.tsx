import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "DitM — Software, AI i automatyzacje dla firm",
    template: "%s | DitM",
  },
  description: site.description,
  applicationName: "DitM",
  openGraph: {
    type: "website",
    url: "/",
    locale: "pl_PL",
    siteName: "DitM",
    title: "DitM — Dobry kod. Praktyczne AI.",
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DitM — Software, AI i automatyzacje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DitM — Dobry kod. Praktyczne AI.",
    description: site.description,
    images: ["/opengraph-image"],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};
export const viewport: Viewport = { themeColor: "#0F172A" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body id="top">
        <a className="skip-link" href="#main">
          Przejdź do treści
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
