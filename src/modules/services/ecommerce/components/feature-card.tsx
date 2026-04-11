type Props = {
  icon: string;
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: Props) {
  return (
    <div
      className="
        group relative p-8 rounded-3xl

        bg-white/70 backdrop-blur-xl
        border border-white/40

        shadow-[0_20px_80px_rgba(0,0,0,0.06)]

        hover:-translate-y-3
        hover:shadow-[0_40px_120px_rgba(0,0,0,0.12)]

        transition-all duration-500
      "
    >
      {/* 🔥 GLOW */}
      <div
        className="
          absolute -top-10 -right-10 w-32 h-32
          bg-green-400/20 blur-3xl rounded-full
          opacity-0 group-hover:opacity-100
          transition duration-500
        "
      />

      {/* ICON WRAPPER */}
      <div
        className="
          relative mb-6 w-14 h-14 rounded-2xl

          bg-gradient-to-br from-green-100 to-green-50
          flex items-center justify-center

          text-2xl

          group-hover:scale-110
          transition
        "
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3
        className="
          font-semibold text-lg text-gray-900

          group-hover:text-green-600
          transition
        "
      >
        {title}
      </h3>

      {/* DESC */}
      <p
        className="
          text-gray-600 mt-3 text-sm leading-relaxed
        "
      >
        {desc}
      </p>

      {/* LINE */}
      <div
        className="
          mt-6 h-[2px] w-10 bg-green-600/70
          group-hover:w-20
          transition-all duration-300
        "
      />
    </div>
  );
}