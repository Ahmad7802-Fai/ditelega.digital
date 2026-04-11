import { Section, Container } from "@/components";
import Link from "next/link";

export default function Hero() {
  const phone = "6281779229522";

  const url = `https://wa.me/${phone}`;

  return (
    <Section className="relative py-36 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-[900px] h-[900px]
        bg-green-400/10 blur-[140px]
        rounded-full
      " />

      <div className="
        absolute bottom-0 left-1/2 -translate-x-1/2
        w-[700px] h-[700px]
        bg-emerald-300/10 blur-[120px]
        rounded-full
      " />

      <Container className="relative z-10 text-center">

        {/* 🔥 BADGE */}
        <div className="mb-6">
          <span className="
            inline-block px-4 py-1.5 rounded-full
            bg-green-100 text-green-700 text-xs font-medium
            shadow-sm
          ">
            Solusi Sistem Internal
          </span>
        </div>

        {/* 🔥 TITLE */}
        <h1 className="
          text-4xl md:text-6xl font-semibold tracking-tight
          leading-[1.2]
        ">
          Sistem Manajemen Bisnis{" "}
          <span className="text-green-600">
            (Management System)
          </span>
        </h1>

        {/* 🔥 SUBTEXT */}
        <p className="
          text-gray-600 mt-6 max-w-2xl mx-auto
          leading-relaxed text-[15px] md:text-base
        ">
          Solusi sistem internal seperti POS, HRIS, CRM yang disesuaikan
          dengan alur bisnis Anda. Lebih efisien, terstruktur, dan scalable.
        </p>

        {/* 🔥 CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* PRIMARY */}
          <a
            href={url}
            target="_blank"
            className="
              px-8 py-4 rounded-xl

              bg-green-600 text-white font-medium

              shadow-[0_10px_40px_rgba(34,197,94,0.4)]

              hover:bg-green-700
              hover:shadow-[0_20px_60px_rgba(34,197,94,0.5)]
              hover:-translate-y-[2px]

              transition-all duration-300
            "
          >
            Konsultasi & Demo
          </a>

          {/* SECONDARY */}
          <Link
            href="/portfolio"
            className="
              px-8 py-4 rounded-xl

              border border-gray-200
              bg-white/70 backdrop-blur

              text-gray-700 font-medium

              hover:bg-white
              hover:shadow-md
              hover:-translate-y-[2px]

              transition-all duration-300
            "
          >
            Lihat Studi Kasus
          </Link>

        </div>

        {/* 🔥 TRUST LINE */}
        <p className="text-xs text-gray-400 mt-6">
          Digunakan oleh bisnis retail, distribusi & corporate
        </p>

      </Container>
    </Section>
  );
}