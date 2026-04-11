import { Section, Container } from "@/components";
import { features } from "../data";
import FeatureCard from "../components/feature-card";

export default function Features() {
  return (
    <Section
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-b from-white via-gray-50 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[700px] h-[700px]
        bg-green-400/10 blur-[120px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="text-center mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            ⚙️ Fitur Lengkap
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center
          tracking-tight
        ">
          Semua yang Anda Butuhkan{" "}
          <span className="text-green-600">
            Untuk Toko Online Profesional
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-2xl mx-auto leading-relaxed
        ">
          Kami menyediakan fitur lengkap untuk membantu bisnis Anda
          berkembang lebih cepat, dari sistem pembayaran hingga
          manajemen produk yang powerful.
        </p>

        {/* GRID */}
        <div className="
          grid md:grid-cols-3 gap-10 mt-20
        ">
          {features.map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}