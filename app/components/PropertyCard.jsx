"use client";
export default function PropertyCard({ img, title, price }) {
  return (
    <div className="border rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
      <img src={img} alt={title} className="rounded mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{price}</p>
    </div>
  );
}