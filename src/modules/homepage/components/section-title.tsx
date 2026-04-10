type Props = {
  title: string;
  highlight?: string;
  subtitle?: string;
};

export default function SectionTitle({ title, highlight, subtitle }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        {title} <span className="text-green-600">{highlight}</span>
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-3">{subtitle}</p>
      )}
    </div>
  );
}