"use client";

import { Section, Container } from "@/components";

export default function CTA() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Digital 👋
Saya ingin konsultasi layanan SEO.
Boleh dibantu lebih lanjut?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section className="
      relative py-32 text-center overflow-hidden

      bg-gradient-to-r
      from-[#0f172a]
      via-[#0b1f1a]
      to-[#071a14]

      text-white
    ">

      {/* 🔥 GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[800px] h-[800px]
        bg-green-400/20 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* TITLE */}
        <h2 className="
          text-3xl md:text-4xl font-semibold
          tracking-tight
        ">
          Siap Naik ke Halaman 1 Google?
        </h2>

        {/* DESC */}
        <p className="
          mt-4 text-white/70
          max-w-xl mx-auto
        ">
          Konsultasikan kebutuhan SEO Anda sekarang dan dapatkan
          strategi yang tepat untuk bisnis Anda.
        </p>

        {/* CTA */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-10 px-8 py-4 rounded-xl

            bg-green-600 text-white font-medium

            shadow-[0_15px_50px_rgba(34,197,94,0.4)]

            hover:bg-green-500
            hover:shadow-[0_25px_70px_rgba(34,197,94,0.5)]
            hover:-translate-y-[2px]

            transition-all duration-300
          "
        >
          Konsultasi Gratis
        </a>

        {/* TRUST */}
        <p className="text-xs text-white/50 mt-6">
          Respon cepat • Gratis konsultasi • Tanpa komitmen Fee
        </p>

      </Container>

      {/* 🔥 BOTTOM FADE */}
      <div className="
        absolute bottom-0 left-0 w-full h-24
        bg-gradient-to-b from-transparent to-black/20
      " />

    </Section>
  );
}