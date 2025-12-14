export default function Card({ title, children }) {
  return (
    <div className="p-6 rounded-xl shadow bg-white hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}
