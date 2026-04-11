type Props = {
  icon: string;
  title: string;
  desc: string;
};

export default function BenefitCard({ icon, title, desc }: Props) {
  return (
    <div className="
      group relative p-8 rounded-3xl

      bg-white/70 backdrop-blur-xl
      border border-white/40

      shadow-[0_20px_80px_rgba(0,0,0,0.08)]

      hover:-translate-y-3
      hover:shadow-[0_40px_120px_rgba(0,0,0,0.15)]

      transition-all duration-500
    ">

      {/* 🔥 HOVER GLOW */}
      <div className="
        absolute -top-10 -right-10 w-32 h-32
        bg-green-300/20 blur-2xl rounded-full
        opacity-0 group-hover:opacity-100
        transition
      " />

      {/* 🔥 ICON */}
      <div className="
        w-14 h-14 rounded-xl
        bg-green-100 text-green-600
        flex items-center justify-center
        text-2xl

        group-hover:scale-110
        transition
      ">
        {icon}
      </div>

      {/* 🔥 TITLE */}
      <h3 className="
        font-semibold text-lg text-gray-900 mt-6
      ">
        {title}
      </h3>

      {/* 🔥 DESC */}
      <p className="
        text-gray-600 mt-3 text-sm leading-relaxed
      ">
        {desc}
      </p>

    </div>
  );
}