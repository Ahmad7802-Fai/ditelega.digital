// src/modules/clients/index.tsx
import { Section, Container, Heading } from "@/components";
import ClientGrid from "./components/client-grid";

export default function ClientsSection() {
  return (
    <Section
      className="
        relative overflow-hidden
        pt-32 pb-28
        bg-gradient-to-b from-white via-green-50/40 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW (DEPTH) */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-10
        w-[700px] h-[700px]
        bg-green-300/20 blur-[160px]
        rounded-full
      " />

      {/* 🔥 EXTRA LIGHT LAYER (BIAR TIDAK FLAT) */}
      <div className="
        absolute inset-0
        bg-gradient-to-t from-white via-transparent to-white
        pointer-events-none
      " />

      <Container className="relative z-10">

        {/* 🔥 HEADING */}
        <Heading
          title="Semua"
          highlight="Client Kami"
          subtitle="Showcase project premium yang telah kami kerjakan."
          align="center"
        />

        {/* 🔥 TRUST LINE */}
        <p className="
          mt-4 text-center text-sm text-gray-400
        ">
          Dipercaya oleh berbagai bisnis dari berbagai industri
        </p>

        {/* 🔥 GRID */}
        <ClientGrid />

      </Container>
    </Section>
  );
}