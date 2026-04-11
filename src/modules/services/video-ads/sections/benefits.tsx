import { Section, Container } from "@/components";
import { benefits } from "../data";
import BenefitCard from "../components/benefit-card";

export default function Benefits() {
  return (
    <Section className="relative py-32 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[800px] h-[800px]
        bg-green-300/20 blur-[160px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="text-center">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium mb-6
          ">
            Kenapa Harus Video Ads?
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl
          text-center font-semibold tracking-tight
        ">
          Video adalah Konten{" "}
          <span className="text-green-600">
            Paling Powerful
          </span>{" "}
          untuk Marketing Saat Ini
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center
          mt-5 max-w-2xl mx-auto
          leading-relaxed
        ">
          Dengan video ads yang tepat, Anda bisa menarik perhatian lebih cepat,
          membangun kepercayaan, dan meningkatkan conversion secara signifikan.
        </p>

        {/* CARDS */}
        <div className="
          grid md:grid-cols-3 gap-10 mt-16
        ">
          {benefits.map((item, i) => (
            <BenefitCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}