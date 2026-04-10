"use client";

import { useEffect, useState } from "react";
import { Button } from "@/shadcn-ui/ui/button";
import { Card, CardContent } from "@/shadcn-ui/ui/card";

export default function ListingSection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/properties");
      const data = await res.json();
      setImages(data);
    };

    fetchData();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="listings">
      {/* HEADER */}
      <div className="mb-12">
        <p className="text-gray-500 text-lg font-medium">Properties</p>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mt-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 leading-tight">
            Recently Added <br /> Properties
          </h1>

          <p className="text-gray-500 max-w-md text-sm md:text-base">
            Discover premium real estate listings with accurate details,
            verified properties, and the best homes in Morocco.
          </p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl">
            VIEW ALL
          </Button>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.slice(0, 9).map((x, i) => (
          <Card
            key={i}
            className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl"
          >
            {/* IMAGE */}
            <div className="relative h-[340px]">
              <img
                src={x.chemin}
                alt={x.titel}
                className="w-full h-full object-cover"
              />

              {/* PRICE */}
              <div className="absolute bottom-3 left-3 bg-white text-blue-600 font-bold px-3 py-1 rounded-xl shadow">
                {x.price}
              </div>
            </div>

            {/* INFO */}
            <CardContent className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-blue-600">{x.titel}</h3>

              <div className="flex gap-4 text-sm text-gray-600">
                <span>🛏️ {x.bd}</span>
                <span>🛁 {x.ba}</span>
                <span>📐 {x.sf}</span>
              </div>

              <p className="text-sm text-gray-500">📍 {x.loc}</p>

              {/* hover action feel like navbar style */}
              <div className="pt-2">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium transition"
                >
                  View Details →
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
