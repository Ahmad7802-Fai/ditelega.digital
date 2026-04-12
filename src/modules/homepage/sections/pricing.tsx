import { Section, Container, Heading } from "@/components";
import PricingCard from "../components/pricing-card";
import { pricing } from "../data";

export default function Pricing() {
  return (
    <Section
      className="
        relative overflow-visible
        pt-32 pb-28
        bg-gradient-to-b from-white via-green-50/40 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-24
          w-[700px] h-[700px]
          bg-green-300/30 blur-[160px]
          rounded-full
          z-0
        "
      />

      <Container className="relative z-10">

        <Heading
          title="Paket Harga"
          highlight="Premium"
          subtitle="Investasi terbaik untuk meningkatkan kredibilitas dan penjualan bisnis Anda"
          align="center"
        />

        <div
          className="
            grid md:grid-cols-2 lg:grid-cols-3
            gap-10
            mt-28
            items-stretch
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