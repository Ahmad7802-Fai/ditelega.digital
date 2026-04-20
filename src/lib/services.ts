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
/* 🔥 TYPE */
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

  /* 🔥 SEO BOOST */
  faq?: FAQItem[];
};

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

    faq: [
      {
        question: "Berapa lama hasil SEO terlihat?",
        answer:
          "Biasanya 3–6 bulan tergantung tingkat kompetisi dan kondisi website.",
      },
      {
        question: "Apakah SEO aman untuk jangka panjang?",
        answer:
          "Ya, SEO adalah strategi organik yang aman dan berkelanjutan jika dilakukan dengan benar.",
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

    faq: [
      {
        question: "Berapa budget minimal Google Ads?",
        answer:
          "Budget fleksibel, namun ideal mulai dari 3–5 juta per bulan untuk hasil optimal.",
      },
      {
        question: "Apakah Google Ads langsung dapat hasil?",
        answer:
          "Ya, Google Ads bisa langsung menghasilkan traffic dan leads dalam waktu cepat.",
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

    faq: [
      {
        question: "Apa beda landing page dan website biasa?",
        answer:
          "Landing page fokus pada conversion (jualan), sedangkan website lebih ke informasi.",
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
  },
];