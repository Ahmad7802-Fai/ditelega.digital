type Props = {
  icon: string;
  title: string;
  desc: string;
};

export default function TypeCard({ icon, title, desc }: Props) {
  return (
    <div className="
      group relative p-6 text-center rounded-2xl

      bg-white/70 backdrop-blur-xl
      border border-white/40

      shadow-[0_20px_60px_rgba(0,0,0,0.08)]

      hover:-translate-y-4
      hover:shadow-[0_40px_120px_rgba(0,0,0,0.15)]

      transition-all duration-500
    ">

      {/* 🔥 HOVER GLOW */}
      <div className="
        absolute -top-8 -right-8 w-28 h-28
        bg-green-300/20 blur-2xl rounded-full
        opacity-0 group-hover:opacity-100
        transition
      " />

      {/* ICON */}
      <div className="
        w-14 h-14 mx-auto rounded-xl
        bg-green-100 text-green-600

        flex items-center justify-center
        text-2xl

        group-hover:scale-110
        transition
      ">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="
        font-semibold text-gray-900 mt-5
      ">
        {title}
      </h3>

      {/* DESC */}
      <p className="
        text-sm text-gray-600 mt-2 leading-relaxed
      ">
        {desc}
      </p>

      {/* 🔥 HOVER LINE */}
      <div className="
        absolute bottom-0 left-0 w-0 h-[2px]
        bg-green-500

        group-hover:w-full
        transition-all duration-500
      " />

    </div>
  );
}