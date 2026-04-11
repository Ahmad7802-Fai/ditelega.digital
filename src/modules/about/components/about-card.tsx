type Props = {
  title: string;
  desc?: string;
  items?: string[];
};

export default function AboutCard({ title, desc, items }: Props) {
  return (
    <div
      className="
        group relative overflow-hidden
        p-8 rounded-2xl

        bg-white/80 backdrop-blur-xl
        border border-gray-200

        shadow-[0_10px_40px_rgba(0,0,0,0.05)]

        hover:-translate-y-2
        hover:shadow-[0_30px_100px_rgba(0,0,0,0.12)]

        transition-all duration-500
      "
    >
      {/* 🔥 GLOW BACKGROUND */}
      <div className="
        absolute -top-10 -right-10 w-40 h-40
        bg-green-200/40 blur-3xl rounded-full
        opacity-0 group-hover:opacity-100
        transition
      " />

      <div className="relative z-10">

        {/* 🔥 TITLE */}
        <h3 className="
          text-green-600 font-semibold text-lg
          group-hover:text-green-700
          transition
        ">
          {title}
        </h3>

        {/* 🔥 DESC */}
        {desc && (
          <p className="
            text-gray-600 mt-4 leading-relaxed
          ">
            {desc}
          </p>
        )}

        {/* 🔥 LIST */}
        {items && (
          <ul className="
            mt-5 space-y-3
            text-gray-600 text-sm
          ">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                
                {/* DOT ICON */}
                <span className="
                  mt-[6px]
                  w-2 h-2 rounded-full
                  bg-green-500 shrink-0
                " />

                <span className="leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* 🔥 ACCENT LINE */}
        <div className="
          mt-6 h-[2px] w-10 bg-green-600
          opacity-60
          group-hover:w-16
          transition-all duration-300
        " />

      </div>
    </div>
  );
}