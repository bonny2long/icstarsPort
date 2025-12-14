export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
}
