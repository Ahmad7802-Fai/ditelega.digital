import { Section, Container } from "@/components";
import { pricing } from "../data";
import PricingCard from "../components/pricing-card";

export default function Pricing() {
  return (
    <Section
      className="
        relative py-32
        bg-gradient-to-b from-white via-green-50/30 to-white
        overflow-hidden
      "
    >
      {/* 🔥 BIG GLOW */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-0
          w-[900px] h-[900px]
          bg-green-300/20 blur-[200px]
          rounded-full
        "
      />

      <Container className="relative z-10">

        {/* 🔥 HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Paket Website Company Profile
          </h2>

          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Pilih paket sesuai kebutuhan bisnis Anda. Semua sudah termasuk
            desain modern dan support profesional.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {pricing.map((item, i) => (
            <PricingCard key={i} {...item} index={i} />
          ))}
        </div>

      </Container>
    </Section>
  );
}