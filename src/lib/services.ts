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
  related: [],
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

    serviceType: title,

    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
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
    title: "Jasa SEO Naik Halaman 1 Google | Traffic & Leads Konsisten",
    subtitle: "Traffic Organik Naik • Leads Masuk Konsisten",
    component: SeoModule,
    icon: "/icons/seo.svg",
    ogImage: "/og/seo.jpg",
    color: "#16a34a",

    ...createSEO(
      "Jasa SEO Naik Halaman 1 Google",
      "Website Anda sepi traffic? Kami bantu naik ke halaman 1 Google dengan strategi SEO yang terbukti meningkatkan leads dan penjualan bisnis.",
      [
        "jasa SEO",
        "jasa SEO website",
        "jasa SEO Google",
        "jasa SEO Indonesia",
        "SEO halaman 1 Google",
        "jasa SEO profesional",
        "optimasi SEO website"
      ]
    ),

    related: [
      "landing-page",
      "google-ads",
      "company-profile"
    ],

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
      {
        question: "Apakah SEO bisa meningkatkan penjualan?",
        answer:
          "Ya, SEO membantu mendatangkan traffic yang relevan sehingga peluang konversi meningkat.",
      },
      {
        question: "Apakah SEO cocok untuk semua bisnis?",
        answer:
          "SEO cocok untuk hampir semua bisnis yang ingin mendapatkan traffic organik dari Google.",
      },
    ],
  },

  {
    slug: "google-ads",
    shortTitle: "Google Ads",
    title: "Jasa Google Ads Anti Boncos | Leads Berkualitas & ROAS Tinggi",
    subtitle: "Leads Berkualitas • Budget Lebih Efisien",
    component: GoogleAdsModule,
    icon: "/icons/google-ads.svg",
    ogImage: "/og/google-ads.jpg",
    color: "#2563eb",

    ...createSEO(
      "Jasa Google Ads Anti Boncos",
      "Iklan Google boros tapi tidak menghasilkan? Kami bantu optimasi Google Ads dengan strategi yang tepat untuk meningkatkan leads berkualitas dan ROAS bisnis Anda.",
      [
        "jasa Google Ads",
        "jasa iklan Google",
        "jasa PPC Google",
        "Google Ads Indonesia",
        "jasa Google Ads profesional",
        "optimasi Google Ads",
        "iklan Google Ads terbaik"
      ]
    ),

    related: [
      "landing-page",
      "seo",
      "video-ads"
    ],

    faq: [
      {
        question: "Berapa budget minimal Google Ads?",
        answer:
          "Budget fleksibel, namun ideal mulai dari 3–5 juta per bulan untuk hasil yang optimal.",
      },
      {
        question: "Apakah Google Ads langsung menghasilkan?",
        answer:
          "Ya, Google Ads dapat langsung menghasilkan traffic dan leads dalam waktu cepat jika strategi iklan tepat.",
      },
      {
        question: "Kenapa iklan Google saya boncos?",
        answer:
          "Biasanya karena targeting kurang tepat, keyword tidak relevan, atau landing page tidak optimal.",
      },
      {
        question: "Apakah Google Ads cocok untuk semua bisnis?",
        answer:
          "Google Ads cocok untuk bisnis yang ingin mendapatkan hasil cepat, terutama untuk produk atau jasa yang sudah memiliki demand.",
      },
    ],
  },

  {
    slug: "facebook-ads",
    shortTitle: "Facebook Ads",
    title: "Jasa Facebook & Instagram Ads | Target Tepat & Closing Lebih Tinggi",
    subtitle: "Target Tepat • Closing Lebih Tinggi",
    component: FacebookAdsModule,
    icon: "/icons/facebook-ads.svg",
    ogImage: "/og/facebook-ads.jpg",
    color: "#1d4ed8",

    ...createSEO(
      "Jasa Facebook Ads & Instagram Ads",
      "Iklan Facebook sudah jalan tapi tidak menghasilkan? Kami bantu optimasi Facebook & Instagram Ads dengan targeting yang tepat untuk meningkatkan leads dan penjualan bisnis Anda.",
      [
        "jasa Facebook Ads",
        "jasa Instagram Ads",
        "iklan Facebook",
        "iklan Instagram",
        "jasa social media ads",
        "Facebook Ads Indonesia",
        "jasa iklan sosial media"
      ]
    ),

    related: [
      "landing-page",
      "video-ads",
      "social-media-management"
    ],

    faq: [
      {
        question: "Berapa budget minimal Facebook Ads?",
        answer:
          "Budget fleksibel, namun ideal mulai dari 2–5 juta per bulan untuk mendapatkan hasil optimal.",
      },
      {
        question: "Apakah Facebook Ads cocok untuk semua bisnis?",
        answer:
          "Facebook Ads cocok untuk bisnis yang ingin menjangkau target market secara spesifik berdasarkan minat, lokasi, dan perilaku.",
      },
      {
        question: "Kenapa iklan Facebook tidak menghasilkan?",
        answer:
          "Biasanya karena targeting tidak tepat, creative kurang menarik, atau funnel penjualan belum optimal.",
      },
      {
        question: "Apa beda Facebook Ads dan Google Ads?",
        answer:
          "Google Ads menangkap demand yang sudah ada, sedangkan Facebook Ads menciptakan demand melalui targeting yang spesifik.",
      },
    ],
  },

  {
    slug: "landing-page",
    shortTitle: "Landing Page",
    title: "Jasa Landing Page High Conversion | Closing Lebih Tinggi dari Ads",
    subtitle: "Optimasi Closing • Cocok untuk Ads",
    component: LandingPageModule,
    icon: "/icons/landing-page.svg",
    ogImage: "/og/landing-page.jpg",
    color: "#22c55e",

    ...createSEO(
      "Jasa Landing Page High Conversion",
      "Traffic sudah banyak tapi tidak closing? Kami buat landing page yang dirancang khusus untuk meningkatkan conversion, menghasilkan leads, dan memaksimalkan hasil dari iklan Anda.",
      [
        "jasa landing page",
        "jasa landing page conversion",
        "landing page high conversion",
        "jasa website sales",
        "landing page untuk iklan",
        "jasa pembuatan landing page",
        "landing page bisnis"
      ]
    ),

    related: [
      "google-ads",
      "facebook-ads",
      "seo"
    ],

    faq: [
      {
        question: "Apa beda landing page dan website biasa?",
        answer:
          "Landing page fokus pada satu tujuan yaitu conversion (jualan atau leads), sedangkan website lebih ke informasi.",
      },
      {
        question: "Kenapa landing page penting untuk iklan?",
        answer:
          "Landing page membantu meningkatkan conversion dari traffic iklan sehingga budget lebih efisien dan hasil lebih maksimal.",
      },
      {
        question: "Apakah landing page bisa meningkatkan penjualan?",
        answer:
          "Ya, landing page yang dioptimasi dengan baik dapat meningkatkan conversion rate secara signifikan.",
      },
      {
        question: "Berapa lama pembuatan landing page?",
        answer:
          "Waktu pembuatan tergantung kompleksitas, biasanya 5–14 hari kerja.",
      },
    ],
  },

  {
    slug: "company-profile",
    shortTitle: "Company Profile",
    title: "Jasa Website Company Profile Profesional | Bangun Trust & Kredibilitas",
    subtitle: "Brand Lebih Kredibel • Meningkatkan Trust",
    component: CompanyProfileModule,
    icon: "/icons/company.svg",
    ogImage: "/og/company-profile.jpg",
    color: "#0f766e",

    ...createSEO(
      "Jasa Website Company Profile Profesional",
      "Bisnis Anda belum terlihat profesional di mata calon pelanggan? Kami membantu membuat website company profile yang meningkatkan kepercayaan, memperkuat branding, dan membantu mendapatkan lebih banyak klien.",
      [
        "jasa website company profile",
        "website company profile profesional",
        "jasa pembuatan website perusahaan",
        "website bisnis profesional",
        "company profile online",
        "website perusahaan terpercaya",
        "jasa website bisnis"
      ]
    ),

    related: [
      "seo",
      "branding",
      "landing-page"
    ],

    faq: [
      {
        question: "Apa fungsi website company profile?",
        answer:
          "Website company profile berfungsi untuk meningkatkan kredibilitas bisnis dan memberikan informasi lengkap kepada calon pelanggan.",
      },
      {
        question: "Apakah website company profile bisa mendatangkan klien?",
        answer:
          "Ya, dengan optimasi SEO dan desain yang tepat, website dapat menjadi sumber leads baru untuk bisnis.",
      },
      {
        question: "Berapa lama pembuatan website company profile?",
        answer:
          "Biasanya memakan waktu 7–21 hari tergantung kebutuhan dan kompleksitas.",
      },
      {
        question: "Apa saja isi website company profile?",
        answer:
          "Umumnya berisi profil perusahaan, layanan, portofolio, dan kontak untuk memudahkan calon klien menghubungi Anda.",
      },
    ],
  },

  {
    slug: "ecommerce",
    shortTitle: "E-Commerce",
    title: "Jasa Website E-Commerce | Toko Online Siap Jualan & Scale",
    subtitle: "Order Otomatis • Omset Naik",
    component: EcommerceModule,
    icon: "/icons/ecommerce.svg",
    ogImage: "/og/ecommerce.jpg",
    color: "#f59e0b",

    ...createSEO(
      "Jasa Website E-Commerce Toko Online",
      "Masih jualan di marketplace dan kena potongan? Kami bantu buat website e-commerce sendiri agar Anda punya kontrol penuh, tanpa komisi, dan bisa scale bisnis lebih besar.",
      [
        "jasa website ecommerce",
        "jasa toko online",
        "website toko online",
        "jasa pembuatan toko online",
        "ecommerce Indonesia",
        "website jualan online",
        "toko online profesional"
      ]
    ),

    related: [
      "landing-page",
      "seo",
      "management-system"
    ],

    faq: [
      {
        question: "Apa keuntungan punya website e-commerce sendiri?",
        answer:
          "Anda memiliki kontrol penuh, tanpa komisi, dan bisa membangun brand sendiri tanpa bergantung pada marketplace.",
      },
      {
        question: "Apakah website e-commerce bisa meningkatkan penjualan?",
        answer:
          "Ya, dengan strategi yang tepat, website e-commerce dapat meningkatkan conversion dan profit karena tanpa potongan marketplace.",
      },
      {
        question: "Apa bedanya jualan di marketplace dan website sendiri?",
        answer:
          "Marketplace memiliki banyak kompetitor dan potongan biaya, sedangkan website sendiri memberikan kontrol penuh dan margin lebih besar.",
      },
      {
        question: "Apakah bisa terintegrasi dengan sistem lain?",
        answer:
          "Ya, website e-commerce dapat diintegrasikan dengan payment gateway, sistem inventory, dan tools marketing.",
      },
    ],
  },

  {
    slug: "branding",
    shortTitle: "Branding",
    title: "Jasa Branding & Identity Design | Bangun Brand Kuat & Profesional",
    subtitle: "Brand Lebih Kuat • Lebih Diingat",
    component: BrandingModule,
    icon: "/icons/branding.svg",
    ogImage: "/og/branding.jpg",
    color: "#a855f7",

    ...createSEO(
      "Jasa Branding & Identity Design Profesional",
      "Brand Anda belum terlihat profesional? Kami membantu membangun branding dan identity design yang kuat agar bisnis Anda lebih dipercaya, mudah diingat, dan tampil berbeda dari kompetitor.",
      [
        "jasa branding",
        "brand identity design",
        "jasa desain brand",
        "branding bisnis",
        "brand profesional",
        "jasa desain logo dan branding",
        "identity design Indonesia"
      ]
    ),

    related: [
      "company-profile",
      "social-media-management",
      "landing-page"
    ],

    faq: [
      {
        question: "Apa itu branding dan kenapa penting?",
        answer:
          "Branding adalah identitas bisnis yang membedakan Anda dari kompetitor dan membantu membangun kepercayaan pelanggan.",
      },
      {
        question: "Apa saja yang termasuk dalam branding?",
        answer:
          "Branding meliputi logo, warna, typography, tone komunikasi, dan identitas visual yang konsisten.",
      },
      {
        question: "Apakah branding bisa meningkatkan penjualan?",
        answer:
          "Ya, branding yang kuat membuat bisnis lebih dipercaya sehingga meningkatkan conversion dan loyalitas pelanggan.",
      },
      {
        question: "Apa bedanya branding dan marketing?",
        answer:
          "Branding membangun identitas dan persepsi, sedangkan marketing berfokus pada penjualan dan promosi.",
      },
    ],
  },

  {
    slug: "management-system",
    shortTitle: "System",
    title: "Sistem Management Bisnis Custom | Otomatisasi & Scale Operasional",
    subtitle: "Otomatisasi Bisnis • Lebih Efisien",
    component: ManagementSystemModule,
    icon: "/icons/system.svg",
    ogImage: "/og/system.jpg",
    color: "#06b6d4",

    ...createSEO(
      "Sistem Management Bisnis Custom & ERP",
      "Operasional bisnis masih manual dan tidak efisien? Kami bantu membangun sistem management bisnis custom untuk otomatisasi proses, meningkatkan produktivitas, dan mempermudah scale bisnis Anda.",
      [
        "sistem management bisnis",
        "software bisnis custom",
        "aplikasi manajemen bisnis",
        "ERP Indonesia",
        "sistem ERP custom",
        "software perusahaan",
        "otomatisasi bisnis"
      ]
    ),

    related: [
      "ecommerce",
      "seo",
      "company-profile"
    ],

    faq: [
      {
        question: "Apa itu sistem management bisnis?",
        answer:
          "Sistem management bisnis adalah software yang membantu mengelola operasional seperti data, transaksi, dan proses bisnis secara otomatis.",
      },
      {
        question: "Apa manfaat sistem custom dibanding software jadi?",
        answer:
          "Sistem custom dapat disesuaikan dengan kebutuhan bisnis sehingga lebih fleksibel dan efisien dibanding software umum.",
      },
      {
        question: "Apakah sistem bisa terintegrasi dengan bisnis saya?",
        answer:
          "Ya, sistem dapat diintegrasikan dengan berbagai kebutuhan seperti CRM, inventory, hingga laporan keuangan.",
      },
      {
        question: "Berapa biaya pembuatan sistem management bisnis?",
        answer:
          "Biaya tergantung kompleksitas fitur dan kebutuhan bisnis, biasanya disesuaikan dengan skala operasional.",
      },
    ],
  },

  {
    slug: "social-media-management",
    shortTitle: "Social Media",
    title: "Jasa Social Media Management | Engagement Naik & Branding Kuat",
    subtitle: "Engagement Naik • Branding Kuat",
    component: SocialMediaModule,
    icon: "/icons/social-media.svg",
    ogImage: "/og/social.jpg",
    color: "#ec4899",

    ...createSEO(
      "Jasa Social Media Management Instagram & TikTok",
      "Social media sudah aktif tapi tidak berkembang? Kami bantu mengelola Instagram dan TikTok dengan strategi konten yang tepat untuk meningkatkan engagement, branding, dan menarik calon pelanggan.",
      [
        "jasa social media management",
        "jasa kelola instagram",
        "jasa admin instagram",
        "instagram marketing",
        "jasa konten sosial media",
        "social media marketing Indonesia",
        "jasa kelola tiktok"
      ]
    ),

    related: [
      "branding",
      "video-ads",
      "landing-page"
    ],

    faq: [
      {
        question: "Apa itu social media management?",
        answer:
          "Social media management adalah layanan pengelolaan akun media sosial mulai dari konten, posting, hingga strategi untuk meningkatkan engagement.",
      },
      {
        question: "Apakah social media bisa mendatangkan pelanggan?",
        answer:
          "Ya, dengan strategi konten yang tepat, social media dapat menarik calon pelanggan dan meningkatkan brand awareness.",
      },
      {
        question: "Platform apa saja yang dikelola?",
        answer:
          "Kami mengelola berbagai platform seperti Instagram, TikTok, dan platform lainnya sesuai kebutuhan bisnis.",
      },
      {
        question: "Kenapa engagement penting?",
        answer:
          "Engagement menunjukkan interaksi audiens dengan brand, yang berpengaruh pada kepercayaan dan potensi konversi.",
      },
    ],
  },

  {
    slug: "video-ads",
    shortTitle: "Video Ads",
    title: "Jasa Video Ads Marketing | Konten Viral & Conversion Tinggi",
    subtitle: "Konten Viral • Conversion Tinggi",
    component: VideoAdsModule,
    icon: "/icons/video.svg",
    ogImage: "/og/video.jpg",
    color: "#ef4444",

    ...createSEO(
      "Jasa Video Ads TikTok & Instagram",
      "Konten sudah dibuat tapi tidak menghasilkan? Kami bantu membuat video ads yang menarik, viral, dan dirancang khusus untuk meningkatkan conversion dari iklan Anda.",
      [
        "jasa video ads",
        "jasa video marketing",
        "video iklan produk",
        "video ads tiktok",
        "video ads instagram",
        "jasa konten video marketing",
        "iklan video bisnis"
      ]
    ),

    related: [
      "facebook-ads",
      "social-media-management",
      "landing-page"
    ],

    faq: [
      {
        question: "Apa itu video ads?",
        answer:
          "Video ads adalah konten video yang digunakan untuk promosi produk atau jasa dengan tujuan meningkatkan engagement dan penjualan.",
      },
      {
        question: "Kenapa video ads penting untuk bisnis?",
        answer:
          "Video lebih menarik perhatian dibanding konten biasa sehingga meningkatkan peluang klik dan conversion.",
      },
      {
        question: "Apakah video ads bisa viral?",
        answer:
          "Ya, dengan konsep dan strategi yang tepat, video ads memiliki potensi untuk viral dan menjangkau lebih banyak audiens.",
      },
      {
        question: "Platform apa saja untuk video ads?",
        answer:
          "Video ads bisa digunakan di berbagai platform seperti TikTok, Instagram, Facebook, dan YouTube.",
      },
    ],
  },
];