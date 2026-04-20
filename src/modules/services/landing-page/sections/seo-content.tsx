import { Container, Section, Heading } from "@/components/ui";

export default function SEOContent() {
  return (
    <Section className="relative bg-gradient-to-b from-white to-green-50/30 overflow-hidden">

      {/* 🔥 SOFT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_60%)] pointer-events-none" />

      <Container>

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Jasa Pembuatan Landing Page...
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Landing page yang kami buat dirancang khusus untuk meningkatkan konversi,
            membantu bisnis Anda mendapatkan lebih banyak leads dan penjualan secara online.
          </p>

        </div>

        {/* 🔥 GRID (INI YANG HILANG TADI) */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">

          <div className="p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
            <h3 className="font-semibold mb-2 text-gray-900">
              Copywriting Persuasif
            </h3>
            <p className="text-gray-600 text-sm">
              Konten dirancang untuk menarik perhatian dan mendorong aksi.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl shadow-lg">
            <h3 className="font-semibold mb-2">
              Fokus Konversi
            </h3>
            <p className="text-green-100 text-sm">
              Struktur halaman dibuat untuk meningkatkan leads dan penjualan.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-green-100 shadow-sm">
            <h3 className="font-semibold mb-2 text-gray-900">
              Siap Iklan
            </h3>
            <p className="text-gray-600 text-sm">
              Landing page siap digunakan untuk Google Ads & Meta Ads.
            </p>
          </div>

        </div>

        {/* 🔥 CTA MINI */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Siap meningkatkan performa iklan Anda?
          </p>

          <a
            href="#cta"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>

      </Container>
    </Section>
  );
}