import type { Metadata } from "next";
import { ServiceItem } from "@/lib/services";

/* ========================= */
/* 🔥 BASE CONFIG */
/* ========================= */

const BASE_URL = "https://ditelaga.digital";
const SITE_NAME = "Ditelaga Creative Digital";

/* ========================= */
/* 🔥 METADATA GENERATOR */
/* ========================= */

export function generateServiceMetadata(
  service: ServiceItem
): Metadata {
  const url = `${BASE_URL}/service/${service.slug}`;

  return {
    title: service.title,
    description: service.subtitle,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: service.title,
      description: service.subtitle,
      url,
      siteName: SITE_NAME,
      locale: "id_ID",
      type: "website",

      images: [
        {
          url: `${BASE_URL}/service/${service.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.subtitle,
      images: [`${BASE_URL}${service.ogImage}`],
    },
  };
}

/* ========================= */
/* 🔥 SERVICE SCHEMA */
/* ========================= */

export function generateServiceSchema(service: ServiceItem) {
  const url = `${BASE_URL}/service/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",

    name: service.title,
    description: service.subtitle,
    serviceType: service.shortTitle,
    url,

    image: `${BASE_URL}${service.ogImage}`, // 🔥 tambahan penting

    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },

    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },

    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "Contact us",
      availability: "https://schema.org/InStock",
      url,
    },
  };
}

/* ========================= */
/* 🔥 FAQ SCHEMA */
/* ========================= */

export function generateFAQSchema(service: ServiceItem) {
  if (!service.faq || service.faq.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/* ========================= */
/* 🔥 BREADCRUMB SCHEMA (BOOST SEO) */
/* ========================= */

export function generateBreadcrumbSchema(service: ServiceItem) {
  const url = `${BASE_URL}/service/${service.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${BASE_URL}/service`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.shortTitle,
        item: url,
      },
    ],
  };
}