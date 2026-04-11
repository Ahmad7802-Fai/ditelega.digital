import { Section, Container } from "@/components";
import { process } from "../data";
import ProcessCard from "../components/process-card";

export default function Process() {
  return (
    <Section className="relative py-32 bg-gray-50 overflow-hidden">

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
            Proses yang Terstruktur untuk{" "}
            <span className="text-green-600">
              Hasil Maksimal
            </span>
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Setiap langkah dirancang untuk memastikan strategi, konten,
            dan eksekusi berjalan optimal dan menghasilkan growth nyata.
          </p>
        </div>

        {/* 🔥 GRID */}
        <div className="
          relative grid md:grid-cols-4 gap-8 lg:gap-10
          mt-20
        ">
          {process.map((item, i) => (
            <ProcessCard key={i} {...item} index={i} />
          ))}
        </div>

      </Container>
    </Section>
  );
}