import { Section, Container } from "@/components";
import { whyUs } from "../data";

export default function WhyUs() {
  const [main, ...others] = whyUs;

  return (
    <Section
      className="
        relative py-32
        bg-gradient-to-b from-gray-50 via-white to-white
        overflow-hidden
      "
    >
      {/* 🔥 BIG GLOW */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-20
          w-[800px] h-[800px]
          bg-green-300/20 blur-[180px]
          rounded-full
        "
      />

      <Container className="relative z-10">

        {/* 🔥 HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-gray-500 mt-4 text-sm">
            Alasan kenapa bisnis memilih kami sebagai partner digital
          </p>
        </div>

        {/* 🔥 LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-10 mt-20 items-stretch">

          {/* 🔥 MAIN CARD (HIGHLIGHT) */}
          <div
            className="
              group relative overflow-hidden
              lg:col-span-1

              p-10 rounded-3xl
              bg-white border border-green-200

              shadow-[0_20px_80px_rgba(34,197,94,0.15)]

              hover:-translate-y-3
              hover:shadow-[0_40px_120px_rgba(34,197,94,0.25)]

              transition-all duration-500
            "
          >
            {/* glow */}
            <div className="
              absolute inset-0
              bg-gradient-to-br from-green-200/40 via-transparent to-transparent
              blur-2xl
            " />

            <div className="relative z-10">
              <div className="text-3xl mb-6">
                {main.icon}
              </div>

              <h3 className="
                text-green-600 text-xl font-semibold
              ">
                {main.title}
              </h3>

              <p className="
                text-gray-600 mt-4 leading-relaxed
              ">
                {main.desc}
              </p>
            </div>
          </div>

          {/* 🔥 RIGHT SIDE (STACKED) */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">

            {others.map((item, i) => (
              <div
                key={i}
                className="
                  group relative overflow-hidden
                  p-8 rounded-2xl

                  bg-white border border-gray-200

                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]

                  hover:-translate-y-2
                  hover:shadow-[0_25px_80px_rgba(0,0,0,0.12)]

                  transition-all duration-500
                "
              >
                {/* subtle glow */}
                <div className="
                  absolute -top-10 -right-10 w-32 h-32
                  bg-green-200/30 blur-3xl rounded-full
                  opacity-0 group-hover:opacity-100
                  transition
                " />

                <div className="relative z-10">
                  <div className="
                    text-2xl mb-4
                    group-hover:scale-110
                    transition
                  ">
                    {item.icon}
                  </div>

                  <h3 className="
                    text-green-600 font-semibold text-lg
                    group-hover:text-green-700
                  ">
                    {item.title}
                  </h3>

                  <p className="
                    text-gray-600 mt-3 text-sm leading-relaxed
                  ">
                    {item.desc}
                  </p>

                  <div className="
                    mt-6 h-[2px] w-10 bg-green-600
                    opacity-60 group-hover:w-16
                    transition-all duration-300
                  " />
                </div>
              </div>
            ))}

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