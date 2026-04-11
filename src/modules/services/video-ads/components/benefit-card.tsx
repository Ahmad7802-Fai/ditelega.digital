type Props = {
  icon: string;
  title: string;
  desc: string;
};

export default function BenefitCard({ icon, title, desc }: Props) {
  return (
    <div
      className="
        group relative p-8 rounded-3xl overflow-hidden

        bg-white/70 backdrop-blur-xl
        border border-white/40

        shadow-[0_20px_80px_rgba(0,0,0,0.08)]

        hover:-translate-y-4
        hover:shadow-[0_40px_120px_rgba(0,0,0,0.15)]

        transition-all duration-500
      "
    >

      {/* 🔥 HOVER GLOW */}
      <div
        className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition duration-500

          bg-gradient-to-br from-green-100/40 to-transparent
        "
      />

      {/* 🔥 ICON WRAPPER */}
      <div
        className="
          relative z-10
          w-14 h-14 mb-6

          flex items-center justify-center

          rounded-2xl
          bg-green-100 text-green-600 text-2xl

          group-hover:scale-110
          transition duration-300
        "
      >
        {icon}
      </div>

      {/* 🔥 TITLE */}
      <h3
        className="
          relative z-10
          font-semibold text-lg

          group-hover:text-green-600
          transition
        "
      >
        {title}
      </h3>

      {/* 🔥 DESC */}
      <p
        className="
          relative z-10
          text-gray-600 text-sm mt-3 leading-relaxed

          group-hover:text-gray-700
          transition
        "
      >
        {desc}
      </p>

      {/* 🔥 BOTTOM ACCENT LINE */}
      <div
        className="
          absolute bottom-0 left-0 h-[3px] w-0
          bg-green-600

          group-hover:w-full
          transition-all duration-500
        "
      />

    </div>
  );
}