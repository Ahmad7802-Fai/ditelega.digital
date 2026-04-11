import { Section, Container } from "@/components";
import { benefits } from "../data";
import BenefitCard from "../components/benefit-card";

export default function Benefits() {
  return (
    <Section className="relative py-32 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[700px] h-[700px]
        bg-green-200/20 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="text-center mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            Kenapa Facebook Ads
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl text-center font-semibold tracking-tight
        ">
          Kenapa FB & IG Ads{" "}
          <span className="text-green-600">
            Masih Powerful?
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-xl mx-auto leading-relaxed
        ">
          Platform Meta memungkinkan Anda menjangkau audiens secara presisi
          dengan biaya efisien dan hasil yang scalable.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {benefits.map((item, i) => (
            <BenefitCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}