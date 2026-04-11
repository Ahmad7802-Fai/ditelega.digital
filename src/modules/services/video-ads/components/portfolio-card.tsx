import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  image: string;
};

export default function PortfolioCard({ title, desc, image }: Props) {
  return (
    <div
      className="
        group relative rounded-3xl overflow-hidden

        bg-white/60 backdrop-blur-xl
        border border-white/40

        shadow-[0_20px_80px_rgba(0,0,0,0.1)]

        hover:-translate-y-4
        hover:shadow-[0_40px_120px_rgba(0,0,0,0.2)]

        transition-all duration-500
      "
    >

      {/* 🔥 IMAGE */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            group-hover:scale-110
            transition duration-700
          "
        />

        {/* 🔥 DARK OVERLAY */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-black/50 via-black/10 to-transparent
        " />

        {/* 🔥 PLAY BUTTON */}
        <div className="
          absolute inset-0 flex items-center justify-center
          opacity-0 group-hover:opacity-100
          transition
        ">
          <div className="
            w-14 h-14 rounded-full
            bg-white/90 text-green-600

            flex items-center justify-center

            shadow-lg
            scale-90 group-hover:scale-100
            transition
          ">
            ▶
          </div>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="p-6 text-center">

        <h3 className="
          font-semibold text-lg
          group-hover:text-green-600
          transition
        ">
          {title}
        </h3>

        <p className="
          text-sm text-gray-600 mt-2 leading-relaxed
        ">
          {desc}
        </p>

      </div>

      {/* 🔥 BOTTOM ACCENT */}
      <div className="
        absolute bottom-0 left-0 h-[3px] w-0
        bg-green-600

        group-hover:w-full
        transition-all duration-500
      " />

    </div>
  );
}