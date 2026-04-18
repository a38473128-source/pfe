"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      window.location.href = "/signin";
      return;
    }

    const user = JSON.parse(storedUser);

    if (!user) {
      window.location.href = "/signin";
    }

    setProperties([
      { id: 1, title: "Luxury Villa", price: "$1,200,000" },
      { id: 2, title: "Modern Apartment", price: "$450,000" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white px-10 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Dashboard</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Price</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((p) => (
            <tr key={p.id}>
              <td className="border px-4 py-2">{p.id}</td>
              <td className="border px-4 py-2">{p.title}</td>
              <td className="border px-4 py-2">{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}