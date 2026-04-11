type Props = {
  icon: string;
  title: string;
  desc: string;
};

export default function ServiceCard({ icon, title, desc }: Props) {
  return (
    <div
      className="
        group relative p-8 rounded-3xl

        bg-white/70 backdrop-blur-xl
        border border-white/40

        shadow-[0_20px_80px_rgba(0,0,0,0.08)]

        hover:-translate-y-4
        hover:shadow-[0_40px_120px_rgba(0,0,0,0.15)]

        transition-all duration-500
      "
    >

      {/* 🔥 HOVER GLOW */}
      <div className="
        absolute inset-0 rounded-3xl
        bg-gradient-to-br from-green-500/0 to-green-500/10
        opacity-0 group-hover:opacity-100
        transition
      " />

      {/* 🔥 ICON WRAPPER */}
      <div className="
        relative z-10
        w-14 h-14 mb-5
        flex items-center justify-center

        rounded-2xl

        bg-green-100 text-green-600
        group-hover:bg-green-600
        group-hover:text-white

        transition-all duration-300
      ">
        <span className="text-2xl">{icon}</span>
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10">

        <h3 className="
          font-semibold text-lg
          group-hover:text-green-600
          transition
        ">
          {title}
        </h3>

        <p className="
          text-gray-600 text-sm mt-2 leading-relaxed
          group-hover:text-gray-700
        ">
          {desc}
        </p>

      </div>

      {/* 🔥 SUBTLE BORDER GLOW */}
      <div className="
        absolute inset-0 rounded-3xl
        ring-1 ring-transparent
        group-hover:ring-green-200
        transition
      " />

    </div>
  );
}