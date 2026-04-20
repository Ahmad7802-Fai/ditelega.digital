import { Section, Container } from "@/components";

export default function Comparison() {
  return (
    <Section
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-b from-gray-50 to-white
      "
    >
      {/* 🔥 SOFT GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[800px] h-[800px]
        bg-green-400/10 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* 🔥 BADGE */}
        <div className="text-center mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            ⚔️ Perbandingan Platform
          </span>
        </div>

        {/* 🔥 TITLE (SEO UPGRADE) */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center
          tracking-tight
        ">
          Marketplace vs{" "}
          <span className="text-green-600">
            Website Sendiri untuk Bisnis Online
          </span>
        </h2>

        {/* 🔥 SUBTEXT (SEO + EDUKASI) */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-2xl mx-auto leading-relaxed
        ">
          Banyak bisnis masih bergantung pada marketplace, padahal memiliki website sendiri
          memberikan kontrol penuh terhadap branding, data pelanggan, dan strategi marketing digital.
          Dengan website e-commerce profesional, Anda bisa meningkatkan profit dan membangun aset bisnis jangka panjang.
        </p>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {/* ❌ MARKETPLACE */}
          <div className="
            group relative p-8 rounded-3xl

            bg-white/70 backdrop-blur-xl
            border border-white/40

            shadow-[0_20px_80px_rgba(0,0,0,0.06)]

            hover:-translate-y-2
            transition-all
          ">
            {/* glow */}
            <div className="
              absolute -top-10 -left-10 w-32 h-32
              bg-red-300/20 blur-3xl rounded-full
              opacity-0 group-hover:opacity-100
              transition
            " />

            <h3 className="text-lg font-semibold text-gray-900">
              Marketplace
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>❌ Komisi 10–20% tiap transaksi</li>
              <li>❌ Branding terbatas dan tidak eksklusif</li>
              <li>❌ Data pelanggan bukan milik Anda</li>
              <li>❌ Kompetisi harga sangat tinggi</li>
              <li>❌ Sulit membangun loyalitas brand</li>
            </ul>
          </div>

          {/* ✅ WEBSITE */}
          <div className="
            group relative p-8 rounded-3xl

            bg-white/80 backdrop-blur-xl
            border border-green-200

            shadow-[0_30px_100px_rgba(34,197,94,0.15)]

            hover:-translate-y-2
            transition-all
          ">
            {/* glow */}
            <div className="
              absolute -top-10 -right-10 w-32 h-32
              bg-green-400/20 blur-3xl rounded-full
              opacity-0 group-hover:opacity-100
              transition
            " />

            <h3 className="text-lg font-semibold text-green-600">
              Website Sendiri (E-Commerce)
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>✔ Tanpa komisi (100% profit milik Anda)</li>
              <li>✔ Branding full kontrol dan lebih profesional</li>
              <li>✔ Data pelanggan bisa dimanfaatkan untuk marketing</li>
              <li>✔ Bisa scale dengan Google Ads & Meta Ads</li>
              <li>✔ Membangun aset digital jangka panjang</li>
            </ul>

            {/* 🔥 HIGHLIGHT */}
            <div className="
              mt-6 text-sm font-medium text-green-600
            ">
              🚀 Investasi terbaik untuk pertumbuhan bisnis online Anda
            </div>
          </div>

        </div>

        {/* 🔥 SEO PARAGRAPH (POWER) */}
        <div className="
          max-w-3xl mx-auto mt-20 text-center
          text-gray-500 text-sm leading-relaxed
        ">
          Memiliki website e-commerce sendiri bukan hanya soal tampilan, tetapi strategi jangka panjang
          untuk membangun bisnis digital yang lebih stabil dan scalable. Dengan optimasi SEO,
          integrasi iklan digital, dan strategi konversi yang tepat, website mampu menghasilkan
          leads dan penjualan yang lebih konsisten dibanding hanya mengandalkan marketplace.
        </div>

        {/* 🔥 MICRO CTA */}
        <div className="mt-12 text-center">
          <a
            href="#cta"
            className="
              inline-block px-6 py-3 rounded-full
              bg-green-600 text-white font-semibold
              hover:bg-green-700 transition
            "
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>

      </Container>
    </Section>
  );
}