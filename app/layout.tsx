// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import { salonConfig } from "@/config/salon.config";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title:       salonConfig.seo.title,
  description: salonConfig.seo.description,
  openGraph: {
    title:       salonConfig.seo.title,
    description: salonConfig.seo.description,
    url:         salonConfig.seo.siteUrl,
    siteName:    salonConfig.name,
    images:      [{ url: salonConfig.seo.ogImage }],
    type:        "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
