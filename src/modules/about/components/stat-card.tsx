type Props = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: Props) {
  return (
    <div className="
      group p-10 rounded-2xl

      bg-white/5 backdrop-blur-xl
      border border-white/10

      hover:bg-white/10
      hover:scale-105

      transition-all duration-500
    ">
      {/* VALUE */}
      <h3 className="
        text-5xl font-bold
        text-green-400
        tracking-tight
      ">
        {value}
      </h3>

      {/* LABEL */}
      <p className="
        mt-3 text-white/60 text-sm
        group-hover:text-white
        transition
      ">
        {label}
      </p>

      {/* LINE */}
      <div className="
        mt-6 mx-auto h-[2px] w-12 bg-green-500/50
        group-hover:w-20
        transition-all duration-300
      " />
    </div>
  );
}