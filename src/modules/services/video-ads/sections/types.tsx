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
            Format Video Ads
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center tracking-tight
        ">
          Pilih Jenis Video yang{" "}
          <span className="text-green-600">
            Sesuai Strategi Anda
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-5
          max-w-2xl mx-auto leading-relaxed
        ">
          Setiap format video memiliki tujuan berbeda — dari awareness,
          engagement, hingga conversion.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10 mt-16">
          {types.map((item, i) => (
            <TypeCard key={i} {...item} />
          ))}
        </div>

      </Container>
    </Section>
  );
}