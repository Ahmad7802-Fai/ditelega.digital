import { Section, Container } from "@/components";
import { process } from "../data";
import ProcessCard from "../components/process-card"; // 🔥 WAJIB

export default function Process() {
  return (
    <Section className="relative py-32 bg-gray-50 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[700px] h-[700px]
        bg-green-400/10 blur-[120px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* BADGE */}
        <div className="text-center mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            Proses Kerja Kami
          </span>
        </div>

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center tracking-tight
        ">
          Alur Pembuatan Landing Page
        </h2>

        {/* SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-xl mx-auto leading-relaxed
        ">
          Kami menggunakan proses terstruktur untuk memastikan landing page Anda
          tidak hanya bagus, tapi juga menghasilkan konversi.
        </p>

        {/* GRID */}
        <div className="relative grid md:grid-cols-4 gap-8 mt-20">

          {/* 🔥 CONNECTOR LINE */}
          <div className="
            hidden md:block absolute top-1/2 left-0 w-full h-[2px]
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