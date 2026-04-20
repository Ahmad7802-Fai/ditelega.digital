import { Section, Container } from "@/components";

export default function SEOContent() {
  return (
    <Section className="relative py-28 bg-gradient-to-b from-white to-green-50/40 overflow-hidden">
      
      {/* glow biar nyatu */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[700px] h-[700px]
        bg-green-400/10 blur-[140px] rounded-full
      " />

      <Container className="relative z-10">

        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Sistem Management Bisnis Custom untuk Efisiensi Operasional
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Kami menyediakan <strong>sistem management bisnis</strong> yang membantu
            perusahaan mengotomatisasi operasional, meningkatkan efisiensi kerja,
            dan mengurangi kesalahan manual dalam proses bisnis.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">

          {/* CARD 1 */}
          <div className="
            p-6 rounded-2xl bg-white/80 backdrop-blur
            border border-gray-200
          ">
            <h3 className="font-semibold text-gray-900">
              Sistem Terintegrasi dalam Satu Platform
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Kelola data, transaksi, dan operasional bisnis dalam satu dashboard
              terpusat yang mudah digunakan dan efisien.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="
            p-6 rounded-2xl bg-white/80 backdrop-blur
            border border-gray-200
          ">
            <h3 className="font-semibold text-gray-900">
              Meningkatkan Produktivitas Tim
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Otomatisasi proses bisnis membantu tim bekerja lebih cepat,
              mengurangi pekerjaan manual, dan meningkatkan efisiensi.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="
            p-6 rounded-2xl bg-white/80 backdrop-blur
            border border-gray-200
          ">
            <h3 className="font-semibold text-gray-900">
              Custom Sesuai Kebutuhan Bisnis
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Sistem dapat disesuaikan mulai dari CRM, inventory management,
              hingga laporan keuangan sesuai kebutuhan bisnis Anda.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="
            p-6 rounded-2xl bg-white/80 backdrop-blur
            border border-gray-200
          ">
            <h3 className="font-semibold text-gray-900">
              Skalabilitas untuk Pertumbuhan Bisnis
            </h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Sistem management bisnis membantu Anda scale operasional,
              mendukung pertumbuhan bisnis tanpa bottleneck.
            </p>
          </div>

        </div>
        <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm mb-3">
            Layanan digital lainnya:
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-green-600 font-medium">
            <a href="/service/company-profile" className="hover:underline">
            Website Company Profile
            </a>
            <a href="/service/landing-page" className="hover:underline">
            Landing Page Conversion
            </a>
            <a href="/service/seo" className="hover:underline">
            Jasa SEO
            </a>
            <a href="/service/google-ads" className="hover:underline">
            Google Ads
            </a>
        </div>
        </div>

      </Container>
    </Section>
  );
}