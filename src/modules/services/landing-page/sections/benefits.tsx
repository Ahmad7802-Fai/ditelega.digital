import { Section, Container } from "@/components";
import { benefits } from "../data";
import BenefitCard from "../components/benefit-card";

export default function Benefits() {
  return (
    <Section className="relative py-32 overflow-hidden">
      
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute top-0 left-1/2 -translate-x-1/2
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
            Kenapa Harus Landing Page?
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center
          tracking-tight
        ">
          Landing Page yang Tepat ={" "}
          <span className="text-green-600">Lebih Banyak Closing</span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-xl mx-auto leading-relaxed
        ">
          Bukan sekadar tampilan, landing page yang kami buat
          difokuskan untuk meningkatkan konversi dan penjualan bisnis Anda.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {benefits.map((item, i) => (
            <BenefitCard key={i} {...item} index={i} />
          ))}
        </div>

      </Container>
    </Section>
  );
}