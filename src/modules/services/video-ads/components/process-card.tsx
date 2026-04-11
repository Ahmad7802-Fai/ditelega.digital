type Props = {
  title: string;
  desc: string;
  index: number;
};

export default function ProcessCard({ title, desc, index }: Props) {
  return (
    <div className="relative group text-center">

      {/* 🔢 STEP NUMBER (FLOATING) */}
      <div className="
        relative z-10 mx-auto mb-6

        w-14 h-14 rounded-full

        bg-white border border-gray-200

        flex items-center justify-center

        text-sm font-semibold text-green-600

        shadow-md

        group-hover:scale-110
        transition
      ">
        {index + 1}
      </div>

      {/* 🔥 CARD */}
      <div className="
        relative p-8 rounded-3xl overflow-hidden

        bg-white/70 backdrop-blur-xl
        border border-white/40

        shadow-[0_20px_80px_rgba(0,0,0,0.08)]

        hover:-translate-y-4
        hover:shadow-[0_40px_120px_rgba(0,0,0,0.15)]

        transition-all duration-500
      ">

        {/* 🔥 HOVER GLOW */}
        <div className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition duration-500

          bg-gradient-to-br from-green-100/40 to-transparent
        " />

        {/* TITLE */}
        <h3 className="
          relative z-10 font-semibold text-lg
          group-hover:text-green-600
          transition
        ">
          {title}
        </h3>

        {/* DESC */}
        <p className="
          relative z-10 text-gray-600 text-sm mt-3 leading-relaxed
        ">
          {desc}
        </p>

        {/* 🔥 BOTTOM ACCENT */}
        <div className="
          absolute bottom-0 left-0 h-[3px] w-0
          bg-green-600

          group-hover:w-full
          transition-all duration-500
        " />

      </div>

    </div>
  );
}