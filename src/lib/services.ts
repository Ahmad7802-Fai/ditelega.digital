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

export const services = [
  {
    slug: "seo",
    title: "Jasa SEO Ranking Halaman 1",
    subtitle: "Traffic Organik Naik • Leads Masuk Konsisten",
    component: SeoModule,
  },
  {
    slug: "google-ads",
    title: "Jasa Google Ads Anti Boncos",
    subtitle: "Leads Berkualitas • Budget Lebih Efisien",
    component: GoogleAdsModule,
  },
  {
    slug: "facebook-ads",
    title: "Jasa Facebook & Instagram Ads",
    subtitle: "Target Tepat • Closing Lebih Tinggi",
    component: FacebookAdsModule,
  },
  {
    slug: "landing-page",
    title: "Landing Page High Conversion",
    subtitle: "Optimasi Closing • Cocok untuk Ads",
    component: LandingPageModule,
  },
  {
    slug: "company-profile",
    title: "Website Company Profile Profesional",
    subtitle: "Brand Lebih Kredibel • Meningkatkan Trust",
    component: CompanyProfileModule,
  },
  {
    slug: "ecommerce",
    title: "Website E-Commerce Siap Jualan",
    subtitle: "Order Otomatis • Omset Naik",
    component: EcommerceModule,
  },
  {
    slug: "branding",
    title: "Jasa Branding & Identity Design",
    subtitle: "Brand Lebih Kuat • Lebih Diingat",
    component: BrandingModule,
  },
  {
    slug: "management-system",
    title: "Sistem Management Bisnis Custom",
    subtitle: "Otomatisasi Bisnis • Lebih Efisien",
    component: ManagementSystemModule,
  },
  {
    slug: "social-media-management",
    title: "Jasa Social Media Management",
    subtitle: "Engagement Naik • Branding Kuat",
    component: SocialMediaModule,
  },
  {
    slug: "video-ads",
    title: "Jasa Video Ads Marketing",
    subtitle: "Konten Viral • Conversion Tinggi",
    component: VideoAdsModule,
  },
] as const;