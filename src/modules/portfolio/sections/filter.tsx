"use client";

type Props = {
  active: string;
  setActive: (val: string) => void;
};

const filters = ["All", "Website", "Mobile App", "SEO", "Branding"];

export default function PortfolioFilter({ active, setActive }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-10">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`
            px-4 py-2 rounded-full text-sm transition
            ${
              active === item
                ? "bg-green-600 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}