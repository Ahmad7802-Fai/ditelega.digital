import { Section, Container } from "@/components";
import { vision, mission } from "../data";

export default function VisionMission() {
  return (
    <Section className="
      relative overflow-hidden
      py-32
      bg-gradient-to-b from-white via-green-50/20 to-white
    ">

      {/* 🔥 BIG GLOW */}
      <div className="
        absolute left-1/2 -translate-x-1/2 top-20
        w-[800px] h-[800px]
        bg-green-300/20 blur-[180px]
        rounded-full
      " />

      <Container className="relative z-10">

        {/* 🔥 HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="
            text-3xl md:text-4xl font-semibold
          ">
            Visi & Misi Kami
          </h2>

          <p className="text-gray-500 mt-4 text-sm">
            Fondasi utama dalam membangun solusi digital yang berdampak
          </p>
        </div>

        {/* 🔥 LAYOUT SPLIT */}
        <div className="
          grid lg:grid-cols-2 gap-16
          items-center mt-20
        ">

          {/* 🔥 VISI (HIGHLIGHT CARD BESAR) */}
          <div className="
            relative p-10 rounded-3xl

            bg-white border border-gray-200
            shadow-[0_20px_80px_rgba(0,0,0,0.08)]

            hover:-translate-y-2
            transition
          ">
            {/* glow inside */}
            <div className="
              absolute inset-0
              bg-gradient-to-br from-green-200/40 via-transparent to-transparent
              blur-2xl opacity-60
            " />

            <div className="relative z-10">
              <p className="text-green-600 text-sm font-medium mb-3">
                VISI
              </p>

              <h3 className="
                text-xl md:text-2xl font-semibold
                leading-relaxed text-gray-900
              ">
                {vision.desc}
              </h3>
            </div>
          </div>

          {/* 🔥 MISI (LIST STYLE PREMIUM) */}
          <div>
            <p className="text-green-600 text-sm font-medium mb-6">
              MISI
            </p>

            <div className="space-y-6">
              {mission.items.map((item, i) => (
                <div
                  key={i}
                  className="
                    group flex items-start gap-4

                    p-5 rounded-xl
                    bg-white border border-gray-200

                    hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                    hover:-translate-y-1

                    transition
                  "
                >
                  {/* ICON */}
                  <div className="
                    w-8 h-8 flex items-center justify-center
                    rounded-full
                    bg-green-100 text-green-600 text-sm font-bold
                    shrink-0
                  ">
                    {i + 1}
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
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