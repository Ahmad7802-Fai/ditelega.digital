type Props = {
  title: string;
  desc: string;
  index: number;
};

export default function ProcessCard({ title, desc, index }: Props) {
  return (
    <div className="relative text-center group">

      {/* 🔥 STEP NUMBER (FLOATING) */}
      <div className="
        mx-auto mb-6

        w-12 h-12 rounded-full
        bg-white border border-gray-200

        flex items-center justify-center

        text-green-600 font-semibold

        shadow-[0_10px_30px_rgba(0,0,0,0.08)]

        group-hover:scale-110
        transition
      ">
        {index + 1}
      </div>

      {/* 🔥 CARD */}
      <div className="
        relative p-6 rounded-2xl

        bg-white/70 backdrop-blur-xl
        border border-white/40

        shadow-[0_20px_60px_rgba(0,0,0,0.08)]

        hover:-translate-y-3
        hover:shadow-[0_40px_120px_rgba(0,0,0,0.15)]

        transition-all duration-500
      ">

        {/* 🔥 GLOW */}
        <div className="
          absolute -top-6 -right-6 w-24 h-24
          bg-green-300/20 blur-2xl rounded-full
          opacity-0 group-hover:opacity-100
          transition
        " />

        {/* TITLE */}
        <h3 className="
          font-semibold text-gray-900
        ">
          {title}
        </h3>

        {/* DESC */}
        <p className="
          text-sm text-gray-600 mt-3 leading-relaxed
        ">
          {desc}
        </p>

      </div>

    </div>
  );
}