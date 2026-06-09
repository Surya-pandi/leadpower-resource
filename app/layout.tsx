import type { Metadata } from "next";
import "./globals.css";
import { AmbientCursor } from "@/components/ambient-cursor";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leadpowerresource.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LEADPOWER RESOURCE | Engineering Solutions for OEMs",
    template: "%s | LEADPOWER RESOURCE",
  },
  description:
    "Specialized Mechanical, Electrical, and Embedded Engineering expertise for OEM product development, validation, and manufacturing.",
  keywords: [
    "OEM engineering solutions",
    "mechanical engineering resources",
    "electrical engineering",
    "embedded systems engineering",
    "product engineering partner",
  ],
  openGraph: {
    type: "website",
    title: "LEADPOWER RESOURCE | Engineering Solutions for OEMs",
    description: "Engineering talent behind tomorrow's innovations.",
    images: ["/assets/engineering-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEADPOWER RESOURCE",
    description: "Engineering talent behind tomorrow's innovations.",
    images: ["/assets/engineering-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "LEADPOWER RESOURCE",
    url: siteUrl,
    description:
      "Specialized Mechanical, Electrical, and Embedded Engineering expertise for OEMs.",
    areaServed: "Global",
    knowsAbout: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Embedded Systems",
      "OEM Product Development",
    ],
  };

  return (
    <html lang="en">
      <body>
        <AmbientCursor />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
