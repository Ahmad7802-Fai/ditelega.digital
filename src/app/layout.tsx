import "./globals.css";
import { Navbar, Footer, FloatingCTA } from "@/components";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

/* ========================= */
/* 🔥 METADATA (SEO) */
/* ========================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://ditelaga.digital"),

  title: {
    default: "Ditelaga Creative Digital",
    template: "%s | Ditelaga Creative Digital",
  },

  description:
    "Ditelaga Creative Digital adalah agency digital untuk website, SEO, social media, dan branding bisnis modern.",

  keywords: [
    "jasa website",
    "website development",
    "digital marketing",
    "SEO Indonesia",
    "social media management",
    "google ads",
    "facebook ads",
    "branding agency",
  ],

  authors: [{ name: "Ditelaga Creative Digital" }],
  creator: "Ditelaga Creative Digital",

  /* 🔥 TAMBAHAN PENTING */
  alternates: {
    canonical: "https://ditelaga.digital",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  manifest: "/site.webmanifest",

  /* 🔥 OPEN GRAPH */
  openGraph: {
    title: "Ditelaga Creative Digital",
    description:
      "Website, SEO, Ads, dan Social Media Management untuk meningkatkan bisnis Anda.",
    url: "https://ditelaga.digital",
    siteName: "Ditelaga Creative Digital",
    images: [
      {
        url: "https://ditelaga.digital/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ditelaga Creative Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  other: {
    "fb:app_id": "1234567890", // optional
  },

  /* 🔥 TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Ditelaga Creative Digital",
    description:
      "Solusi website dan digital marketing modern untuk bisnis Anda.",
    images: ["https://ditelaga.digital/og-image.jpg"],
  },

  /* 🔥 ROBOTS */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ========================= */
/* 🔥 VIEWPORT */
/* ========================= */

export const viewport: Viewport = {
  themeColor: "#16a34a",
};

/* ========================= */
/* 🔥 LAYOUT */
/* ========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 antialiased overflow-x-hidden">

        {/* ========================= */}
        {/* 🔥 SCHEMA JSON-LD */}
        {/* ========================= */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ditelaga Creative Digital",
              url: "https://ditelaga.digital",
              logo: "https://ditelaga.digital/logo.png",
              sameAs: [
                "https://instagram.com/ditelaga",
                "https://facebook.com/ditelaga"
              ],
            }),
          }}
        />

        {/* 🔥 NAVBAR */}
        <Navbar />

        {/* 🔥 MAIN */}
        <main className="overflow-x-hidden">
          {children}
        </main>

        {/* 🔥 FLOATING CTA (INI YANG KURANG) */}
        <FloatingCTA />

        {/* 🔥 FOOTER */}
        <Footer />

      </body>
    </html>
  );
}