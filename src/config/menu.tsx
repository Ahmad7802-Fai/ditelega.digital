import { IconKey } from "@/lib/icon-map";

export type MenuItem = {
  title: string;
  icon: IconKey;
  href: string;
};

export type MenuGroup = {
  label: string;
  items: MenuItem[];
};

export const menu: MenuGroup[] = [
  {
    label: "Website Development",
    items: [
      {
        title: "Company Profile",
        icon: "layout",
        href: "/service/company-profile",
      },
      {
        title: "Landing Page",
        icon: "layout",
        href: "/service/landing-page",
      },
      {
        title: "E-Commerce",
        icon: "layout",
        href: "/service/ecommerce",
      },
      {
        title: "Management System",
        icon: "layout",
        href: "/service/management-system",
      },
    ],
  },
  {
    label: "Marketing",
    items: [
      {
        title: "SEO Bergaransi",
        icon: "chart",
        href: "/service/seo",
      },
      {
        title: "Google Ads",
        icon: "megaphone",
        href: "/service/google-ads",
      },
      {
        title: "FB & IG Ads",
        icon: "megaphone",
        href: "/service/facebook-ads",
      },
    ],
  },
  {
    label: "Creative",
    items: [
      {
        title: "Branding",
        icon: "palette",
        href: "/service/branding",
      },
      {
        title: "Video Ads",
        icon: "pen",
        href: "/service/video-ads",
      },
      {
        title: "Social Media Management",
        icon: "globe",
        href: "/service/social-media-management",
      },
    ],
  },
];