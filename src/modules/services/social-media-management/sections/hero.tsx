"use client";

import { Section, Container } from "@/components";

export default function Hero() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Creative 👋
Saya tertarik dengan layanan Social Media Management.
Boleh konsultasi lebih lanjut?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section
      className="
        relative overflow-hidden
        py-36 text-center
        bg-gradient-to-b from-white via-green-50/40 to-white
      "
    >

      {/* 🔥 BIG GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[1100px] h-[1100px]
        bg-green-300/20 blur-[220px]
        rounded-full
      " />

      {/* 🔥 SECOND GLOW */}
      <div className="
        absolute right-0 bottom-0
        w-[500px] h-[500px]
        bg-green-200/20 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* 🔥 BADGE */}
        <div className="mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-600/10 text-green-600 text-xs font-medium
          ">
            🚀 Growth Strategy • Content • Branding
          </span>
        </div>

        {/* 🔥 HEADLINE */}
        <h1 className="
          text-4xl md:text-5xl lg:text-6xl
          font-semibold tracking-tight leading-tight
          max-w-4xl mx-auto
        ">
          Scale Bisnis Anda dengan{" "}
          <span className="text-green-600">
            Social Media yang Terarah
          </span>
        </h1>

        {/* 🔥 SUBTEXT */}
        <p className="
          text-gray-600 mt-6
          max-w-2xl mx-auto text-lg leading-relaxed
        ">
          Kami bantu membangun brand yang kuat, meningkatkan engagement,
          dan mengubah followers menjadi pelanggan melalui strategi konten yang tepat.
        </p>

        {/* 🔥 CTA */}
        <div className="
          mt-10 flex flex-col sm:flex-row
          justify-center items-center gap-4
        ">

          <a
            href={url}
            target="_blank"
            className="
              px-8 py-4 rounded-xl font-medium

              bg-green-600 text-white

              shadow-[0_15px_50px_rgba(34,197,94,0.4)]

              hover:bg-green-700
              hover:shadow-[0_25px_70px_rgba(34,197,94,0.5)]
              hover:-translate-y-[2px]

              transition-all duration-300
            "
          >
            Konsultasi Gratis
          </a>

          <a
            href="/portfolio"
            className="
              px-8 py-4 rounded-xl

              border border-gray-300
              bg-white/70 backdrop-blur

              hover:border-green-500
              hover:text-green-600

              transition
            "
          >
            Lihat Portfolio
          </a>

        </div>

        {/* 🔥 TRUST */}
        <div className="
          mt-10 text-sm text-gray-500
          flex flex-wrap justify-center gap-4
        ">
          <span>✔️ 100+ brand ditangani</span>
          <span>✔️ Strategi berbasis data</span>
          <span>✔️ Fokus growth & conversion</span>
        </div>

      </Container>

      {/* 🔥 FADE BOTTOM */}
      <div className="
        absolute bottom-0 left-0 w-full h-24
        bg-gradient-to-b from-transparent to-white
      " />

    </Section>
  );
}