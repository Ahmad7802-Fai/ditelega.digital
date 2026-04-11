"use client";

import Image from "next/image";
import { Section, Container } from "@/components";

export default function Hero() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Creative Digital 👋
Saya tertarik dengan layanan Facebook & Instagram Ads.
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

      <Container className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          <h1
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-semibold leading-tight tracking-tight
            "
          >
            Jasa Iklan{" "}
            <span className="text-green-600">
              Facebook & Instagram Ads
            </span>
          </h1>

          <p
            className="
              text-gray-600 mt-6
              max-w-xl mx-auto lg:mx-0
              text-lg leading-relaxed
            "
          >
            Scale bisnis Anda dengan strategi iklan berbasis data,
            targeting presisi, dan optimasi harian untuk hasil maksimal.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href={url}
              target="_blank"
              className="
                px-7 py-3.5 rounded-xl

                bg-green-600 text-white font-medium

                shadow-[0_15px_50px_rgba(34,197,94,0.4)]

                hover:bg-green-700
                hover:shadow-[0_25px_70px_rgba(34,197,94,0.5)]
                hover:-translate-y-[1px]

                transition-all duration-300
              "
            >
              Konsultasi Gratis
            </a>

            <a
              href="/portfolio"
              className="
                px-7 py-3.5 rounded-xl

                border border-gray-300 bg-white/70 backdrop-blur

                hover:border-green-500
                hover:text-green-600

                transition
              "
            >
              Lihat Hasil Klien
            </a>

          </div>

          {/* TRUST */}
          <div className="mt-10 text-sm text-gray-500">
            ✔️ 100+ campaign dikelola &nbsp;&nbsp; ✔️ Optimasi harian &nbsp;&nbsp; ✔️ Fokus ROI
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden lg:block">

          {/* MAIN CARD */}
          <div
            className="
              relative h-[320px] rounded-3xl overflow-hidden

              border border-white/40
              bg-white/40 backdrop-blur-xl

              shadow-[0_40px_120px_rgba(0,0,0,0.2)]

              rotate-[-3deg]
            "
          >
            <Image
              src="/sosial/2.jpg"
              alt="ads preview"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* FLOATING CARD */}
          <div
            className="
              absolute -bottom-10 -left-10
              w-[220px] h-[140px]

              rounded-2xl overflow-hidden

              border border-white/40
              bg-white/60 backdrop-blur-xl

              shadow-[0_20px_80px_rgba(0,0,0,0.15)]

              rotate-3
            "
          >
            <Image
              src="/sosial/1.jpg"
              alt="ads result"
              fill
              className="object-cover"
            />
          </div>

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