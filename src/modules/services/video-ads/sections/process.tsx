import { Section, Container } from "@/components";
import { process } from "../data";
import ProcessCard from "../components/process-card";

export default function Process() {
  return (
    <Section className="relative py-32 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[900px] h-[900px]
        bg-green-300/20 blur-[180px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="text-center">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium mb-6
          ">
            Workflow Kami
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center tracking-tight
        ">
          Proses yang{" "}
          <span className="text-green-600">
            Terstruktur & Teruji
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-5
          max-w-2xl mx-auto leading-relaxed
        ">
          Setiap video ads dibuat dengan proses yang jelas untuk memastikan hasil maksimal — dari ide hingga siap digunakan untuk campaign.
        </p>

        {/* GRID */}
        <div className="relative grid md:grid-cols-4 gap-10 mt-20">

          {/* 🔥 CONNECTOR LINE */}
          <div className="
            hidden md:block absolute top-10 left-0 w-full h-[2px]
            bg-gradient-to-r from-transparent via-green-200 to-transparent
          " />

          {process.map((item, i) => (
            <ProcessCard key={i} {...item} index={i} />
          ))}

        </div>

      </Container>
    </Section>
  );
}