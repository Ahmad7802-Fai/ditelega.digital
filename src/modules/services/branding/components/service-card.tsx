export default function ServiceCard({ icon, title, desc }: any) {
  return (
    <div className="group relative">

      {/* 🔥 GRADIENT BORDER EFFECT */}
      <div className="
        absolute inset-0 rounded-3xl
        bg-gradient-to-br from-green-200/40 via-transparent to-transparent
        opacity-0 group-hover:opacity-100
        transition duration-500
      " />

      {/* 🔥 CARD */}
      <div className="
        relative p-8 rounded-3xl

        bg-white/70 backdrop-blur-xl
        border border-white/40

        shadow-[0_20px_80px_rgba(0,0,0,0.08)]

        hover:-translate-y-5
        hover:shadow-[0_50px_140px_rgba(0,0,0,0.15)]

        transition-all duration-500
      ">

        {/* 🔥 ICON WRAPPER */}
        <div className="
          w-14 h-14 mb-6 rounded-2xl

          bg-green-100 text-green-600

          flex items-center justify-center
          text-2xl

          group-hover:scale-110
          group-hover:bg-green-600
          group-hover:text-white

          transition-all duration-300
        ">
          {icon}
        </div>

        {/* TITLE */}
        <h3 className="
          font-semibold text-lg text-gray-900

          group-hover:text-green-600
          transition
        ">
          {title}
        </h3>

        {/* DESC */}
        <p className="
          text-gray-600 text-sm mt-3 leading-relaxed
        ">
          {desc}
        </p>

        {/* 🔥 HOVER LINE */}
        <div className="
          mt-6 h-[2px] w-0 bg-green-600
          group-hover:w-full
          transition-all duration-500
        " />

      </div>

    </div>
  );
}