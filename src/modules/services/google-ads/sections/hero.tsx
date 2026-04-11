"use client";

import Link from "next/link";
import { Section, Container } from "@/components";

export default function Hero() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Digital 👋
Saya tertarik dengan layanan Google Ads.
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
      {/* 🔥 BIG GLOW */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-0
          w-[1000px] h-[1000px]
          bg-green-300/20 blur-[220px]
          rounded-full
        "
      />

      <Container className="relative z-10 text-center">

        {/* 🔥 BADGE */}
        <div className="mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
          ">
            🚀 Performance Marketing Agency
          </span>
        </div>

        {/* 🔥 TITLE */}
        <h1
          className="
            text-4xl md:text-6xl font-semibold
            tracking-tight leading-tight
          "
        >
          Jasa <span className="text-green-600">Google Ads</span>{" "}
          yang Fokus{" "}
          <span className="text-gray-900">
            Hasil & Profit
          </span>
        </h1>

        {/* 🔥 SUBTEXT */}
        <p
          className="
            text-gray-600 mt-6 max-w-2xl mx-auto
            text-lg leading-relaxed
          "
        >
          Dapatkan pelanggan yang siap membeli dengan strategi Google Ads
          berbasis data.{" "}
          <span className="text-gray-900 font-medium">
            Target akurat, biaya efisien, dan optimasi harian.
          </span>
        </p>

        {/* 🔥 CTA */}
        <div
          className="
            mt-10 flex flex-col sm:flex-row
            justify-center gap-4
          "
        >
          {/* PRIMARY */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4 rounded-xl
              bg-green-600 text-white font-medium

              shadow-[0_15px_50px_rgba(34,197,94,0.4)]

              hover:bg-green-700
              hover:shadow-[0_25px_70px_rgba(34,197,94,0.5)]
              hover:-translate-y-[2px]

              transition-all duration-300
            "
          >
            Konsultasi Gratis
          </a>

          {/* SECONDARY */}
          <Link
            href="/portfolio"
            className="
              px-8 py-4 rounded-xl

              border border-gray-300
              bg-white/70 backdrop-blur

              hover:border-green-500
              hover:text-green-600
              hover:-translate-y-[2px]

              transition-all duration-300
            "
          >
            Lihat Hasil Kampanye
          </Link>
        </div>

        {/* 🔥 TRUST */}
        <div
          className="
            mt-12 flex flex-wrap justify-center gap-6
            text-sm text-gray-500
          "
        >
          <span>✔️ Setup profesional</span>
          <span>✔️ Optimasi harian</span>
          <span>✔️ ROI fokus profit</span>
        </div>

      </Container>

      {/* 🔥 BOTTOM FADE */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-24
          bg-gradient-to-b from-transparent to-white
        "
      />
    </Section>
  );
}