import BrandingModule from "@/modules/services/branding";
import CompanyProfileModule from "@/modules/services/company-profile";
import EcommerceModule from "@/modules/services/ecommerce";
import FacebookAdsModule from "@/modules/services/facebook-ads";
import GoogleAdsModule from "@/modules/services/google-ads";
import LandingPageModule from "@/modules/services/landing-page";
import ManagementSystemModule from "@/modules/services/management-system";
import SeoModule from "@/modules/services/seo";
import SocialMediaModule from "@/modules/services/social-media-management";
import VideoAdsModule from "@/modules/services/video-ads";

/* ========================= */
/* 🔥 TYPES */
/* ========================= */

export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;

  shortTitle: string;
  title: string;
  subtitle: string;

  component: React.ComponentType;

  icon?: string;
  ogImage: string;
  color?: string;

  /* 🔥 SEO */
  description: string;
  keywords: string[];
  related: string[];
  schema: any;

  faq?: FAQItem[];
};

/* ========================= */
/* 🔥 DEFAULT SEO GENERATOR */
/* ========================= */

const BASE_URL = "https://ditelaga.digital";

const createSEO = (
  title: string,
  description: string,
  keywords: string[]
) => ({
  description,
  keywords,
  related: ["seo", "landing-page", "company-profile"],
  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    provider: {
      "@type": "Organization",
      name: "Ditelaga Creative Digital",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  },
});

/* ========================= */
/* 🔥 DATA */
/* ========================= */

export const services: ServiceItem[] = [
  {
    slug: "seo",
    shortTitle: "SEO",
    title: "Jasa SEO Ranking Halaman 1",
    subtitle: "Traffic Organik Naik • Leads Masuk Konsisten",
    component: SeoModule,
    icon: "/icons/seo.svg",
    ogImage: "/og/seo.jpg",
    color: "#16a34a",

    ...createSEO(
      "Jasa SEO Profesional",
      "Jasa SEO untuk meningkatkan ranking website di Google, mendatangkan traffic organik, dan meningkatkan leads bisnis.",
      ["jasa SEO", "SEO website", "SEO Google", "SEO Indonesia"]
    ),

    faq: [
      {
        question: "Berapa lama hasil SEO terlihat?",
        answer:
          "Biasanya 3–6 bulan tergantung kompetisi dan kondisi website.",
      },
      {
        question: "Apakah SEO aman?",
        answer:
          "Ya, SEO adalah strategi jangka panjang yang aman jika dilakukan dengan benar.",
      },
    ],
  },

  {
    slug: "google-ads",
    shortTitle: "Google Ads",
    title: "Jasa Google Ads Anti Boncos",
    subtitle: "Leads Berkualitas • Budget Lebih Efisien",
    component: GoogleAdsModule,
    icon: "/icons/google-ads.svg",
    ogImage: "/og/google-ads.jpg",
    color: "#2563eb",

    ...createSEO(
      "Jasa Google Ads",
      "Jasa Google Ads untuk meningkatkan traffic, leads, dan penjualan secara cepat dan terukur.",
      ["Google Ads", "iklan Google", "PPC", "iklan digital"]
    ),

    faq: [
      {
        question: "Berapa budget minimal?",
        answer: "Ideal mulai dari 3–5 juta per bulan.",
      },
    ],
  },

  {
    slug: "facebook-ads",
    shortTitle: "Facebook Ads",
    title: "Jasa Facebook & Instagram Ads",
    subtitle: "Target Tepat • Closing Lebih Tinggi",
    component: FacebookAdsModule,
    icon: "/icons/facebook-ads.svg",
    ogImage: "/og/facebook-ads.jpg",
    color: "#1d4ed8",

    ...createSEO(
      "Jasa Facebook Ads",
      "Jasa Facebook dan Instagram Ads untuk meningkatkan leads dan penjualan dengan targeting yang tepat.",
      ["Facebook Ads", "Instagram Ads", "iklan sosial media"]
    ),
  },

  {
    slug: "landing-page",
    shortTitle: "Landing Page",
    title: "Landing Page High Conversion",
    subtitle: "Optimasi Closing • Cocok untuk Ads",
    component: LandingPageModule,
    icon: "/icons/landing-page.svg",
    ogImage: "/og/landing-page.jpg",
    color: "#22c55e",

    ...createSEO(
      "Jasa Landing Page",
      "Jasa pembuatan landing page yang fokus pada conversion untuk meningkatkan penjualan dan leads.",
      ["landing page", "halaman penjualan", "website conversion"]
    ),

    faq: [
      {
        question: "Apa beda landing page dan website?",
        answer:
          "Landing page fokus pada conversion, website lebih ke informasi.",
      },
    ],
  },

  {
    slug: "company-profile",
    shortTitle: "Company Profile",
    title: "Website Company Profile Profesional",
    subtitle: "Brand Lebih Kredibel • Meningkatkan Trust",
    component: CompanyProfileModule,
    icon: "/icons/company.svg",
    ogImage: "/og/company-profile.jpg",
    color: "#0f766e",

    ...createSEO(
      "Jasa Website Company Profile",
      "Jasa pembuatan website company profile profesional untuk meningkatkan kredibilitas bisnis.",
      ["company profile", "website perusahaan", "website bisnis"]
    ),
  },

  {
    slug: "ecommerce",
    shortTitle: "E-Commerce",
    title: "Website E-Commerce Siap Jualan",
    subtitle: "Order Otomatis • Omset Naik",
    component: EcommerceModule,
    icon: "/icons/ecommerce.svg",
    ogImage: "/og/ecommerce.jpg",
    color: "#f59e0b",

    ...createSEO(
      "Jasa Website E-Commerce",
      "Jasa pembuatan website e-commerce untuk meningkatkan penjualan dan otomatisasi bisnis online.",
      ["website toko online", "ecommerce", "jualan online"]
    ),
  },

  {
    slug: "branding",
    shortTitle: "Branding",
    title: "Jasa Branding & Identity Design",
    subtitle: "Brand Lebih Kuat • Lebih Diingat",
    component: BrandingModule,
    icon: "/icons/branding.svg",
    ogImage: "/og/branding.jpg",
    color: "#a855f7",

    ...createSEO(
      "Jasa Branding",
      "Jasa branding dan identity design untuk memperkuat brand dan meningkatkan daya saing bisnis.",
      ["branding", "brand identity", "desain brand"]
    ),
  },

  {
    slug: "management-system",
    shortTitle: "System",
    title: "Sistem Management Bisnis Custom",
    subtitle: "Otomatisasi Bisnis • Lebih Efisien",
    component: ManagementSystemModule,
    icon: "/icons/system.svg",
    ogImage: "/og/system.jpg",
    color: "#06b6d4",

    ...createSEO(
      "Sistem Management Bisnis",
      "Jasa pembuatan sistem management bisnis custom untuk otomatisasi operasional dan efisiensi bisnis.",
      ["sistem bisnis", "software bisnis", "ERP Indonesia"]
    ),
  },

  {
    slug: "social-media-management",
    shortTitle: "Social Media",
    title: "Jasa Social Media Management",
    subtitle: "Engagement Naik • Branding Kuat",
    component: SocialMediaModule,
    icon: "/icons/social-media.svg",
    ogImage: "/og/social.jpg",
    color: "#ec4899",

    ...createSEO(
      "Jasa Social Media Management",
      "Jasa pengelolaan social media untuk meningkatkan engagement dan branding bisnis.",
      ["social media", "instagram marketing", "konten digital"]
    ),
  },

  {
    slug: "video-ads",
    shortTitle: "Video Ads",
    title: "Jasa Video Ads Marketing",
    subtitle: "Konten Viral • Conversion Tinggi",
    component: VideoAdsModule,
    icon: "/icons/video.svg",
    ogImage: "/og/video.jpg",
    color: "#ef4444",

    ...createSEO(
      "Jasa Video Ads",
      "Jasa pembuatan video ads untuk meningkatkan conversion dan performa iklan digital.",
      ["video marketing", "video ads", "iklan video"]
    ),
  },
];