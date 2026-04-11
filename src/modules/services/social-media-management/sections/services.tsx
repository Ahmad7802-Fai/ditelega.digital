import { Section, Container } from "@/components";
import { services } from "../data";
import ServiceCard from "../components/service-card";

export default function Services() {
  return (
    <Section className="relative py-32 overflow-hidden">

      {/* 🔥 SOFT BACKGROUND GLOW */}
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
            text-3xl md:text-4xl font-semibold
            tracking-tight
          ">
            Apa yang Kami Kerjakan untuk{" "}
            <span className="text-green-600">
              Scale Bisnis Anda
            </span>
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Dari strategi hingga eksekusi konten, kami membantu Anda
            membangun social media yang konsisten, menarik, dan menghasilkan.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="
          grid md:grid-cols-3 gap-8 lg:gap-10
          mt-16
        ">
          {services.map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}