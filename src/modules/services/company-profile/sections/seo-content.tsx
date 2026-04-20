import { Container } from "@/components/ui";

export default function SEOContent() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-green-50/30 via-white to-white overflow-hidden">
      
      {/* 🔥 SOFT GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_60%)] pointer-events-none" />

      <Container>

        {/* 🔥 SEPARATOR (BIAR TRANSISI HALUS) */}
        <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent mb-16" />

        {/* 🔥 HEADER */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Jasa Pembuatan Website Company Profile Profesional
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Kami membantu bisnis Anda tampil lebih kredibel dengan website company profile profesional,
            meningkatkan kepercayaan pelanggan, dan menghasilkan lebih banyak leads secara online.
          </p>
        </div>

        {/* 🔥 GRID BENEFIT */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">

          {/* CARD 1 */}
          <div className="p-6 bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Kredibilitas Lebih Tinggi
            </h3>
            <p className="text-gray-600">
              Website company profile membantu bisnis Anda tampil profesional di mata calon pelanggan.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Jangkauan Lebih Luas
            </h3>
            <p className="text-gray-600">
              Bisnis Anda lebih mudah ditemukan di Google kapan saja oleh calon pelanggan.
            </p>
          </div>

          {/* 🔥 HIGHLIGHT CARD */}
          <div className="p-6 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-2xl shadow-lg hover:scale-[1.02] transition">
            <h3 className="text-lg font-semibold mb-2">
              Meningkatkan Konversi
            </h3>
            <p className="text-green-100">
              Struktur website yang tepat mampu mengubah pengunjung menjadi pelanggan.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="p-6 bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Lebih Unggul dari Kompetitor
            </h3>
            <p className="text-gray-600">
              Tampil lebih modern dan terpercaya dibanding kompetitor di industri Anda.
            </p>
          </div>

        </div>

        {/* 🔥 INTERNAL LINK */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-4">
            Layanan digital marketing lainnya:
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-green-600 font-semibold">
            <a href="/service/seo" className="hover:underline">
              Jasa SEO Bergaransi
            </a>
            <a href="/service/google-ads" className="hover:underline">
              Jasa Google Ads
            </a>
            <a href="/service/landing-page" className="hover:underline">
              Jasa Landing Page
            </a>
          </div>
        </div>

        {/* 🔥 MICRO CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Siap meningkatkan kredibilitas bisnis Anda?
          </p>

          <a
            href="#cta"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>

      </Container>
    </section>
  );
}