import "./globals.css";
import { Navbar, Footer, FloatingCTA } from "@/components";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

/* ========================= */
/* 🔥 METADATA (GLOBAL DEFAULT) */
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

  /* 🔥 CANONICAL */
  alternates: {
    canonical: "https://ditelaga.digital",
  },

  /* 🔥 ICONS */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  manifest: "/site.webmanifest",

  /* 🔥 OPEN GRAPH (TANPA IMAGE — BIAR DYNAMIC) */
  openGraph: {
    title: "Ditelaga Creative Digital",
    description:
      "Website, SEO, Ads, dan Social Media Management untuk meningkatkan bisnis Anda.",
    url: "https://ditelaga.digital",
    siteName: "Ditelaga Creative Digital",
    locale: "id_ID",
    type: "website",
  },

  /* 🔥 FACEBOOK APP (OPTIONAL) */
  other: {
    "fb:app_id": "2741934262857401",
  },

  /* 🔥 TWITTER (TANPA IMAGE) */
  twitter: {
    card: "summary_large_image",
    title: "Ditelaga Creative Digital",
    description:
      "Solusi website dan digital marketing modern untuk bisnis Anda.",
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
              logo: "https://ditelaga.digital/og-image-public.jpg",
              sameAs: [
                "https://instagram.com/ditelaga.idn",
                "https://facebook.com/ditelaga.id",
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

        {/* 🔥 FLOATING CTA */}
        <FloatingCTA />

        {/* 🔥 FOOTER */}
        <Footer />

      </body>
    </html>
  );
}