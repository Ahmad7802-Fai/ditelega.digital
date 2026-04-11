"use client";

import { Section, Container, Button } from "@/components";

export default function Hero() {
  return (
    <Section
      className="
        relative overflow-hidden
        pt-36 pb-28
        bg-gradient-to-b from-white via-green-50/30 to-white
      "
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-10
        w-[800px] h-[800px]
        bg-green-400/20 blur-[180px]
        rounded-full
      " />

      {/* 🔥 SECOND GLOW (DEPTH) */}
      <div className="
        absolute right-[-100px] top-20
        w-[400px] h-[400px]
        bg-green-300/20 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10 text-center">

        {/* 🔥 LABEL / MICRO COPY */}
        <div className="
          inline-flex items-center gap-2
          px-4 py-2 rounded-full
          bg-green-100 text-green-700 text-sm
          font-medium
          mb-6
        ">
          🚀 Digital Agency Indonesia
        </div>

        {/* 🔥 HEADLINE */}
        <h1 className="
          text-[38px] md:text-[60px]
          font-semibold leading-tight
          tracking-[-0.02em]
        ">
          Bangun Bisnis Digital Anda{" "}
          <span className="text-green-600">
            Lebih Cepat & Profesional
          </span>
        </h1>

        {/* 🔥 SUBTITLE */}
        <p className="
          mt-6 max-w-2xl mx-auto
          text-gray-600 text-lg leading-relaxed
        ">
          Ditelaga Creative Digital membantu bisnis berkembang melalui website
          premium, strategi marketing berbasis data, dan solusi digital yang
          scalable.
        </p>

        {/* 🔥 CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Button
            className="
              px-8 py-4 text-[16px]
              shadow-[0_10px_40px_rgba(34,197,94,0.4)]
            "
          >
            🚀 Konsultasi Gratis
          </Button>

          <Button
            variant="secondary"
            className="px-8 py-4 text-[16px]"
          >
            Lihat Portfolio
          </Button>

        </div>

        {/* 🔥 TRUST INDICATOR */}
        <div className="
          mt-10 flex flex-wrap justify-center gap-6
          text-sm text-gray-500
        ">
          <span>✔ 100+ Project</span>
          <span>✔ 50+ Client</span>
          <span>✔ Support Profesional</span>
        </div>

      </Container>

      {/* 🔥 BOTTOM FADE (BIAR TRANSISI HALUS KE SECTION BAWAH) */}
      <div className="
        absolute bottom-0 left-0 w-full h-24
        bg-gradient-to-b from-transparent to-white
      " />
    </Section>
  );
}