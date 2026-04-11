import { Section, Container } from "@/components";

export default function CTA() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Digital 👋
Saya tertarik membuat website company profile.
Boleh konsultasi lebih lanjut?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section
      className="
        relative py-32 text-center
        bg-gradient-to-r from-[#0f172a] via-[#0b1f1a] to-[#071a14]
        text-white overflow-hidden
      "
    >
      {/* 🔥 GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-0
        w-[800px] h-[800px]
        bg-green-500/20 blur-[160px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* HEADING */}
        <h2 className="
          text-3xl md:text-5xl font-semibold tracking-tight
        ">
          Siap Naik Level Bisnis Anda?
        </h2>

        {/* SUBTEXT */}
        <p className="
          mt-5 text-white/70
          max-w-xl mx-auto leading-relaxed
        ">
          Konsultasi gratis sekarang dan dapatkan strategi digital
          terbaik untuk bisnis Anda.
        </p>

        {/* CTA BUTTON */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-10 px-8 py-4 rounded-xl

            bg-green-600 text-white font-semibold

            shadow-[0_20px_80px_rgba(34,197,94,0.4)]

            hover:bg-green-500
            hover:shadow-[0_30px_100px_rgba(34,197,94,0.6)]
            hover:-translate-y-[2px]

            transition-all duration-300
          "
        >
          💬 Konsultasi via WhatsApp
        </a>

        {/* TRUST */}
        <p className="mt-6 text-xs text-white/50">
          Respon cepat • Gratis konsultasi • Tanpa komitmen
        </p>

      </Container>

      {/* 🔥 FADE KE FOOTER */}
      <div className="
        absolute bottom-0 left-0 w-full h-24
        bg-gradient-to-b from-transparent to-[#071a14]
      " />
    </Section>
  );
}