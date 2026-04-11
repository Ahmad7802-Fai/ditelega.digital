import "./globals.css";
import { Navbar, Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // ✅ FIX WARNING (WAJIB)
  metadataBase: new URL("https://ditelaga.digital"),

  title: {
    default: "Ditelaga Digital",
    template: "%s | Ditelaga Digital",
  },

  description:
    "Ditelaga Digital adalah agency digital untuk website, SEO, dan branding bisnis modern.",

  keywords: [
    "website development",
    "jasa website",
    "digital marketing",
    "SEO Indonesia",
    "agency digital",
  ],

  authors: [{ name: "Ditelaga Digital" }],
  creator: "Ditelaga Digital",

  // 🔥 OPEN GRAPH
  openGraph: {
    title: "Ditelaga Digital - Creative Agency",
    description:
      "Website, SEO, dan digital marketing untuk bisnis Anda.",
    url: "/",
    siteName: "Ditelaga Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // 🔥 TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Ditelaga Digital",
    description:
      "Solusi website dan digital marketing modern untuk bisnis Anda.",
    images: ["/og-image.jpg"],
  },

  // 🔥 OPTIONAL (BIAR LEBIH LENGKAP)
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}