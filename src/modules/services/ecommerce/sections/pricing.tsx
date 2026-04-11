import { Section, Container } from "@/components";
import { pricing } from "../data";
import PricingCard from "../components/pricing-card";

export default function Pricing() {
  return (
    <Section
      className="
        relative py-32 overflow-hidden
        bg-gradient-to-b from-white via-gray-50 to-white
      "
    >
      {/* 🔥 GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[900px] h-[900px]
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
            💸 Pricing
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center
          tracking-tight
        ">
          Paket Website{" "}
          <span className="text-green-600">
            E-Commerce
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-2xl mx-auto
        ">
          Pilih paket sesuai kebutuhan bisnis Anda. Semua paket sudah
          termasuk desain premium dan performa optimal.
        </p>

        {/* GRID */}
        <div className="
          grid md:grid-cols-3 gap-10 mt-20 items-stretch
        ">
          {pricing.map((item, i) => (
            <PricingCard key={i} {...item} />
          ))}
        </div>

        {/* TRUST */}
        <p className="
          text-center text-xs text-gray-400 mt-12
        ">
          ✔ Tanpa biaya tersembunyi • ✔ Support profesional • ✔ Bisa upgrade kapan saja
        </p>

      </Container>
    </Section>
  );
}