import { Section, Container } from "@/components";
import { process } from "../data";
import ProcessCard from "../components/process-card";

export default function Process() {
  return (
    <Section className="relative py-32 overflow-hidden bg-gray-50">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[800px] h-[800px]
        bg-green-200/20 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* 🔥 BADGE */}
        <div className="text-center mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            Workflow SEO
          </span>
        </div>

        {/* 🔥 TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold text-center tracking-tight
        ">
          Proses SEO <span className="text-green-600">Premium Kami</span>
        </h2>

        {/* 🔥 SUBTEXT */}
        <p className="
          text-gray-600 text-center mt-4
          max-w-xl mx-auto leading-relaxed
        ">
          Proses terstruktur untuk memastikan ranking naik secara konsisten
          dan aman sesuai guideline Google.
        </p>

        {/* 🔥 STEP LINE */}
        <div className="relative mt-20">

          {/* LINE */}
          <div className="
            hidden md:block absolute top-6 left-0 w-full h-[2px]
            bg-gradient-to-r from-transparent via-green-200 to-transparent
          " />

          {/* GRID */}
          <div className="grid md:grid-cols-4 gap-10">
            {process.map((item, i) => (
              <ProcessCard key={i} {...item} index={i} />
            ))}
          </div>

        </div>

      </Container>
    </Section>
  );
}