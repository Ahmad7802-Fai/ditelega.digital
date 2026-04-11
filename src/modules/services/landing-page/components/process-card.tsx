type Props = {
  icon: string;
  title: string;
  desc: string;
  index: number;
};

export default function ProcessCard({
  icon,
  title,
  desc,
  index,
}: Props) {
  return (
    <div className="relative group text-center">

      {/* STEP */}
      <div className="
        relative z-10 mx-auto mb-6
        w-12 h-12 rounded-full
        bg-white border border-gray-200
        flex items-center justify-center
        text-sm font-semibold text-green-600
        shadow-md
        group-hover:scale-110
        transition
      ">
        {index + 1}
      </div>

      {/* CARD */}
      <div className="
        relative p-6 rounded-2xl
        bg-white/80 backdrop-blur-xl
        border border-white/40
        shadow-[0_20px_80px_rgba(0,0,0,0.06)]
        hover:-translate-y-3
        hover:shadow-[0_40px_120px_rgba(0,0,0,0.12)]
        transition-all duration-500
      ">

        {/* GLOW */}
        <div className="
          absolute -top-8 -right-8 w-24 h-24
          bg-green-300/30 blur-2xl rounded-full
          opacity-0 group-hover:opacity-100
          transition
        " />

        {/* ICON */}
        <div className="text-2xl mb-4 group-hover:scale-110 transition">
          {icon}
        </div>

        {/* TITLE */}
        <h3 className="
          font-semibold text-gray-900
          group-hover:text-green-600
          transition
        ">
          {title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {desc}
        </p>

      </div>
    </div>
  );
}