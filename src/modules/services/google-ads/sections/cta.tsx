import { Section, Container } from "@/components";

export default function CTA() {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Digital 👋
Saya tertarik dengan layanan Google Ads.
Boleh konsultasi lebih lanjut?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <Section
      className="
        relative py-36 text-center overflow-hidden

        bg-gradient-to-r
        from-[#0f172a]
        via-[#0b1f1a]
        to-[#071a14]

        text-white
      "
    >
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
          text-3xl md:text-5xl font-semibold tracking-tight
        ">
          Siap Dapatkan{" "}
          <span className="text-green-400">
            Pelanggan Baru?
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="
          mt-5 text-white/70
          max-w-xl mx-auto leading-relaxed
        ">
          Scale bisnis Anda lebih cepat dengan strategi Google Ads
          berbasis data dan optimasi harian.
        </p>

        {/* CTA */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-10 px-10 py-4 rounded-xl

            bg-green-500 text-white font-medium

            shadow-[0_15px_50px_rgba(34,197,94,0.4)]

            hover:bg-green-400
            hover:shadow-[0_25px_70px_rgba(34,197,94,0.5)]
            hover:-translate-y-[2px]

            transition-all duration-300
          "
        >
          Konsultasi Gratis
        </a>

        {/* TRUST */}
        <div className="
          mt-10 text-sm text-white/60 flex justify-center gap-6 flex-wrap
        ">
          <span>✔️ Gratis audit awal</span>
          <span>✔️ Tanpa kontrak ribet</span>
          <span>✔️ Fokus ROI</span>
        </div>

      </Container>

      {/* 🔥 BOTTOM FADE */}
      <div className="
        absolute bottom-0 left-0 w-full h-24
        bg-gradient-to-b from-transparent to-black/40
      " />
    </Section>
  );
}