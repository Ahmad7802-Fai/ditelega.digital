import { Section, Container } from "@/components";
import { pricing } from "../data";
import PricingCard from "../components/pricing-card";

export default function Pricing() {
  return (
    <Section className="relative py-32 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[900px] h-[900px]
        bg-green-200/20 blur-[160px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="text-center mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            Pricing Plan
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl text-center font-semibold tracking-tight
        ">
          Paket SEO <span className="text-green-600">Bergaransi</span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-xl mx-auto
        ">
          Pilih paket sesuai kebutuhan bisnis Anda.
          Semua paket menggunakan strategi SEO modern & aman.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {pricing.map((item, i) => (
            <PricingCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}