type Props = {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
  index?: number;
};

export default function PricingCard({
  name,
  price,
  features,
  highlight,
  index = 0,
}: Props) {
  const isCenter = highlight || index === 1;

  return (
    <div
      className={`
        group relative p-10 rounded-3xl text-center

        ${
          isCenter
            ? "bg-white border border-green-500 scale-[1.06] z-20 shadow-[0_40px_140px_rgba(34,197,94,0.25)]"
            : "bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
        }

        hover:-translate-y-3
        hover:shadow-[0_60px_160px_rgba(0,0,0,0.18)]

        transition-all duration-500
      `}
    >
      {/* 🔥 GLOW (CENTER) */}
      {isCenter && (
        <div className="
          absolute -top-20 left-1/2 -translate-x-1/2
          w-[320px] h-[320px]
          bg-green-400/20 blur-[140px]
          rounded-full
        " />
      )}

      {/* 🔥 BADGE */}
      {isCenter && (
        <span className="
          absolute -top-4 left-1/2 -translate-x-1/2
          text-xs bg-green-600 text-white px-4 py-1.5 rounded-full
          shadow-lg
        ">
          🔥 Paling Laris
        </span>
      )}

      <div className="relative z-10">

        {/* TITLE */}
        <h3 className="
          font-semibold text-lg text-gray-900
          group-hover:text-green-600
          transition
        ">
          {name}
        </h3>

        {/* PRICE */}
        <p className="
          text-3xl md:text-4xl font-bold mt-4
          text-green-600
        ">
          {price}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          / paket
        </p>

        {/* FEATURES */}
        <ul className="mt-6 space-y-3 text-sm text-gray-600 text-left">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green-600">✔</span>
              {f}
            </li>
          ))}
        </ul>

        {/* DIVIDER */}
        <div className="
          mt-6 h-[1px] w-full bg-gradient-to-r
          from-transparent via-gray-200 to-transparent
        " />

        {/* CTA */}
        <a
          href="https://wa.me/6281779229522"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            block mt-8 w-full py-3 rounded-xl font-medium

            ${
              isCenter
                ? "bg-green-600 text-white shadow-[0_20px_60px_rgba(34,197,94,0.4)] hover:bg-green-500"
                : "bg-gray-900 text-white hover:bg-black"
            }

            hover:-translate-y-[1px]
            transition-all duration-300
          `}
        >
          💬 Pesan Sekarang
        </a>

      </div>
    </div>
  );
}