import { Section, Container } from "@/components";
import { types } from "../data";
import TypeCard from "../components/type-card";

export default function Types() {
  return (
    <Section className="relative py-32 bg-gray-50 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[800px] h-[800px]
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
            Ads Format
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl text-center font-semibold tracking-tight
        ">
          Jenis Iklan yang{" "}
          <span className="text-green-600">
            Kami Kelola
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-xl mx-auto leading-relaxed
        ">
          Kami mengelola berbagai format iklan Meta untuk meningkatkan
          awareness, engagement, hingga penjualan bisnis Anda.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10 mt-20">
          {types.map((item, i) => (
            <TypeCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}