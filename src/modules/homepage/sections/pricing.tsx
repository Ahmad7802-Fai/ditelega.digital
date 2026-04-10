import { Section, Container, Heading } from "@/components";
import PricingCard from "../components/pricing-card";
import { pricing } from "../data";

export default function Pricing() {
  return (
    <Section
      className="
        relative overflow-visible
        pt-32 pb-24
        bg-gradient-to-b from-white via-green-50/30 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-24
          w-[600px] h-[600px]
          bg-green-300/30 blur-[140px]
          rounded-full
          z-0
        "
      />

      <Container className="relative z-10">

        {/* 🔥 HEADING */}
        <Heading
          title="Paket Harga"
          highlight="Premium"
          subtitle="Pilih paket terbaik sesuai kebutuhan bisnis Anda"
          align="center"
        />

        {/* 🔥 GRID */}
        <div
          className="
            grid md:grid-cols-2 lg:grid-cols-3
            gap-10
            mt-28
            items-center
          "
        >
          {pricing.map((item, i) => (
            <PricingCard key={i} {...item} index={i} />
          ))}
        </div>

      </Container>
    </Section>
  );
}