type Props = {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

export default function PricingCard({
  name,
  price,
  features,
  highlight,
}: Props) {
  const phone = "6281779229522";

  const message = `Halo Ditelaga Digital 👋
Saya tertarik dengan paket ${name} (${price}).
Boleh konsultasi lebih lanjut?`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={`
        relative group p-10 rounded-3xl text-center flex flex-col justify-between

        ${
          highlight
            ? "border-2 border-green-600 bg-white scale-105"
            : "border border-gray-200 bg-white/80 backdrop-blur"
        }

        shadow-[0_20px_80px_rgba(0,0,0,0.06)]

        hover:-translate-y-3
        hover:shadow-[0_40px_120px_rgba(0,0,0,0.12)]

        transition-all duration-500
      `}
    >
      {/* 🔥 GLOW */}
      {highlight && (
        <div className="
          absolute -top-16 -right-16 w-52 h-52
          bg-green-400/30 blur-3xl rounded-full
        " />
      )}

      {/* BADGE */}
      {highlight && (
        <span className="
          absolute -top-4 left-1/2 -translate-x-1/2
          text-xs bg-green-600 text-white px-4 py-1 rounded-full
          shadow
        ">
          🔥 Paling Populer
        </span>
      )}

      {/* CONTENT */}
      <div>

        {/* TITLE */}
        <h3 className="font-semibold text-lg text-gray-900">
          {name}
        </h3>

        {/* PRICE */}
        <p className="text-green-600 text-4xl font-bold mt-4">
          {price}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          one-time payment
        </p>

        {/* FEATURES */}
        <ul className="mt-8 space-y-3 text-sm text-gray-600">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-green-500">✔</span>
              {f}
            </li>
          ))}
        </ul>

      </div>

      {/* CTA */}
      <div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            mt-10 block w-full py-3 rounded-xl font-medium

            ${
              highlight
                ? "bg-green-600 text-white shadow-[0_10px_40px_rgba(34,197,94,0.4)]"
                : "bg-gray-900 text-white"
            }

            hover:-translate-y-[2px]
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]

            transition-all duration-300
          `}
        >
          🚀 Pesan Sekarang
        </a>

        {/* TRUST */}
        <p className="text-xs text-gray-400 mt-4">
          Tanpa biaya tersembunyi
        </p>
      </div>
    </div>
  );
}