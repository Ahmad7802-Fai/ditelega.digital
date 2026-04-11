"use client";

import { Section, Container } from "@/components";

export default function Hero() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Creative 👋
Saya tertarik dengan layanan Video Ads.
Boleh konsultasi lebih lanjut?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section
      className="
        relative overflow-hidden
        py-36
        bg-gradient-to-b from-white via-green-50/40 to-white
      "
    >
      {/* 🔥 BIG SOFT GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[1000px] h-[1000px]
        bg-green-300/20 blur-[220px]
        rounded-full
      " />

      {/* 🔥 EXTRA DEPTH */}
      <div className="
        absolute right-0 top-1/2
        w-[500px] h-[500px]
        bg-green-200/20 blur-[140px]
        rounded-full
      " />

      <Container className="relative z-10 text-center">

        {/* BADGE */}
        <div className="
          inline-flex items-center gap-2
          px-4 py-2 mb-6
          rounded-full
          bg-green-100 text-green-700 text-xs font-medium
        ">
          🎬 High-Converting Video Ads
        </div>

        {/* HEADLINE */}
        <h1
          className="
            text-4xl md:text-5xl lg:text-6xl
            font-semibold leading-tight tracking-tight
            max-w-4xl mx-auto
          "
        >
          Video Ads yang{" "}
          <span className="text-green-600">
            Menarik Perhatian
          </span>{" "}
          & Mengubah View Jadi{" "}
          <span className="text-green-600">
            Penjualan
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
          className="
            text-gray-600 mt-6
            max-w-2xl mx-auto
            text-lg leading-relaxed
          "
        >
          Kami membantu bisnis Anda membuat video ads cinematic, persuasive, dan berbasis data —
          sehingga bukan hanya terlihat bagus, tapi benar-benar menghasilkan conversion.
        </p>

        {/* CTA */}
        <div className="
          mt-10 flex flex-col sm:flex-row gap-4 justify-center
        ">

          <a
            href={url}
            target="_blank"
            className="
              px-8 py-4 rounded-xl

              bg-green-600 text-white font-medium

              shadow-[0_15px_50px_rgba(34,197,94,0.4)]

              hover:bg-green-700
              hover:shadow-[0_25px_70px_rgba(34,197,94,0.5)]
              hover:-translate-y-[1px]

              transition-all duration-300
            "
          >
            Konsultasi Video Ads
          </a>

          <a
            href="/portfolio"
            className="
              px-8 py-4 rounded-xl

              border border-gray-300 bg-white/70 backdrop-blur

              hover:border-green-500
              hover:text-green-600

              transition
            "
          >
            Lihat Portfolio
          </a>

        </div>

        {/* TRUST */}
        <div className="
          mt-10 text-sm text-gray-500
        ">
          ✔️ 100+ video ads dibuat &nbsp;&nbsp;
          ✔️ High converting script &nbsp;&nbsp;
          ✔️ Fokus ROI & scale bisnis
        </div>

      </Container>

      {/* 🔥 BOTTOM FADE */}
      <div className="
        absolute bottom-0 left-0 w-full h-24
        bg-gradient-to-b from-transparent to-white
      " />
    </Section>
  );
}