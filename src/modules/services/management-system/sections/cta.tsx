import { Section, Container } from "@/components";

export default function CTA() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Digital 👋
Saya ingin konsultasi dan demo sistem untuk bisnis saya.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section className="
      relative py-32 text-center overflow-hidden
      bg-gradient-to-r from-[#0f172a] via-[#0b1f1a] to-[#071a14]
      text-white
    ">

      {/* 🔥 GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[600px] h-[600px]
        bg-green-500/20 blur-[120px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Ingin sistem sesuai bisnis Anda?
        </h2>

        {/* SUBTEXT */}
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Konsultasikan kebutuhan Anda sekarang dan dapatkan solusi terbaik
          yang scalable & siap berkembang.
        </p>

        {/* CTA BUTTON */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-10 px-10 py-4 rounded-xl

            bg-white text-green-600 font-medium

            shadow-[0_10px_40px_rgba(255,255,255,0.2)]

            hover:-translate-y-[2px]
            hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)]

            transition-all duration-300
          "
        >
          Jadwalkan Demo
        </a>

        {/* TRUST */}
        <p className="text-xs text-white/40 mt-4">
          Respon cepat • Konsultasi gratis • Tanpa komitmen
        </p>

      </Container>
    </Section>
  );
}