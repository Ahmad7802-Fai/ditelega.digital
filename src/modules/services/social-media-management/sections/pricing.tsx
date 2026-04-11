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

        {/* 🔥 HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="
            text-3xl md:text-4xl font-semibold tracking-tight
          ">
            Pilih Paket yang Sesuai untuk{" "}
            <span className="text-green-600">
              Growth Bisnis Anda
            </span>
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Mulai dari kebutuhan basic hingga scale besar, semua paket kami
            dirancang untuk menghasilkan growth yang konsisten dan terukur.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="
          grid md:grid-cols-3 gap-8 lg:gap-10
          mt-20 items-stretch
        ">
          {pricing.map((item, i) => (
            <PricingCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}