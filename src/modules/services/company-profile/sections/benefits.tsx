import { Section, Container } from "@/components";
import { benefits } from "../data";
import BenefitCard from "../components/benefit-card";

export default function Benefits() {
  return (
    <Section
      className="
        relative py-32
        bg-gradient-to-b from-white via-green-50/30 to-white
        overflow-hidden
      "
    >
      {/* 🔥 SOFT GLOW */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-10
          w-[800px] h-[800px]
          bg-green-300/20 blur-[180px]
          rounded-full
        "
      />

      <Container className="relative z-10">

        {/* 🔥 HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            className="
              text-3xl md:text-4xl font-semibold tracking-tight
            "
          >
            Kenapa Harus Website Company Profile?
          </h2>

          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Website bukan hanya tampilan, tapi alat untuk meningkatkan
            kepercayaan dan konversi bisnis Anda secara digital.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {benefits.map((item, i) => (
            <BenefitCard key={i} {...item} />
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