import { Section, Container } from "@/components";
import { services } from "../data";
import ServiceCard from "../components/service-card";

export default function Services() {
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
            Layanan Kami
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl text-center font-semibold tracking-tight
        ">
          Apa yang Kami Kerjakan untuk{" "}
          <span className="text-green-600">
            Membangun Brand Anda
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-xl mx-auto leading-relaxed
        ">
          Kami membantu bisnis Anda tampil lebih profesional,
          konsisten, dan memiliki identitas yang kuat di mata pelanggan.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {services.map((item, i) => (
            <ServiceCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}