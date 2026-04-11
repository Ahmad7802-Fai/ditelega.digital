type Props = {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

export default function PricingCard({ name, price, features, highlight }: Props) {
  return (
    <div
      className={`
        group relative p-10 rounded-3xl text-center

        bg-white/70 backdrop-blur-xl

        ${
          highlight
            ? "border-2 border-green-600 scale-[1.05] shadow-[0_30px_120px_rgba(34,197,94,0.25)]"
            : "border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
        }

        hover:-translate-y-4
        hover:shadow-[0_40px_140px_rgba(0,0,0,0.15)]

        transition-all duration-500
      `}
    >

      {/* 🔥 BEST SELLER BADGE */}
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="
            px-4 py-1 text-xs font-medium
            bg-green-600 text-white rounded-full
            shadow-lg
          ">
            ⭐ Best Seller
          </span>
        </div>
      )}

      {/* 🔥 PLAN NAME */}
      <h3 className="text-sm text-gray-500">
        {name}
      </h3>

      {/* 🔥 PRICE */}
      <div className="mt-3">
        <p className="text-green-600 text-4xl font-bold tracking-tight">
          {price}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          / bulan
        </p>
      </div>

      {/* 🔥 DIVIDER */}
      <div className="w-full h-px bg-gray-200 my-6" />

      {/* 🔥 FEATURES */}
      <ul className="space-y-3 text-sm text-gray-600 text-left">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-600 mt-[2px]">✔</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* 🔥 CTA */}
      <a
        href="https://wa.me/6281779229522"
        target="_blank"
        className={`
          mt-8 inline-block w-full py-3 rounded-xl font-medium

          ${
            highlight
              ? "bg-green-600 text-white shadow-[0_15px_50px_rgba(34,197,94,0.4)] hover:bg-green-700"
              : "bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white"
          }

          transition-all duration-300
        `}
      >
        Pesan Sekarang
      </a>

      {/* 🔥 HOVER GLOW */}
      <div className="
        absolute inset-0 rounded-3xl
        bg-gradient-to-br from-green-500/0 to-green-500/10
        opacity-0 group-hover:opacity-100
        transition
      " />

    </div>
  );
}