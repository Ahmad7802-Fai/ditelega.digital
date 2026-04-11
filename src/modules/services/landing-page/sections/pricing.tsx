import { Section, Container } from "@/components";
import { pricing } from "../data";
import PricingCard from "../components/pricing-card";

export default function Pricing() {
  return (
    <Section
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-b from-white via-green-50/30 to-white
      "
    >
      {/* 🔥 BIG GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[900px] h-[900px]
        bg-green-400/20 blur-[200px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="text-center mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            Paket Harga
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center tracking-tight
        ">
          Paket Landing Page{" "}
          <span className="text-green-600">High Converting</span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-xl mx-auto leading-relaxed
        ">
          Pilih paket sesuai kebutuhan bisnis Anda. Semua paket sudah
          dirancang untuk meningkatkan konversi dan performa iklan.
        </p>

        {/* 🔥 TRUST MINI */}
        <div className="
          flex flex-wrap justify-center gap-6
          text-xs text-gray-500 mt-8
        ">
          <span>✔ Mobile Friendly</span>
          <span>✔ Siap Iklan</span>
          <span>✔ Fast Loading</span>
        </div>

        {/* GRID */}
        <div className="
          grid md:grid-cols-3 gap-10 mt-20
          items-stretch
        ">
          {pricing.map((item, i) => (
            <PricingCard key={i} {...item} index={i} />
          ))}
        </div>

      </Container>

      {/* 🔥 FADE */}
      <div className="
        absolute bottom-0 left-0 w-full h-24
        bg-gradient-to-b from-transparent to-white
      " />
    </Section>
  );
}