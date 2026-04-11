import { Section, Container } from "@/components";

export default function Comparison() {
  return (
    <Section
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-b from-gray-50 to-white
      "
    >
      {/* 🔥 GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[800px] h-[800px]
        bg-green-400/10 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="text-center mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            ⚔️ Perbandingan
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center
          tracking-tight
        ">
          Marketplace vs{" "}
          <span className="text-green-600">
            Website Sendiri
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-2xl mx-auto
        ">
          Jangan hanya bergantung pada marketplace. Bangun aset digital Anda sendiri
          untuk kontrol penuh dan keuntungan maksimal.
        </p>

        {/* GRID */}
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
              <li>❌ Branding terbatas</li>
              <li>❌ Data pelanggan bukan milik Anda</li>
              <li>❌ Kompetisi harga tinggi</li>
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
              Website Sendiri
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>✔ Tanpa komisi (100% profit)</li>
              <li>✔ Branding full kontrol</li>
              <li>✔ Data pelanggan milik Anda</li>
              <li>✔ Bisa scale dengan ads</li>
            </ul>

            {/* highlight */}
            <div className="
              mt-6 text-sm font-medium text-green-600
            ">
              🚀 Investasi jangka panjang untuk bisnis Anda
            </div>
          </div>

        </div>

      </Container>
    </Section>
  );
}