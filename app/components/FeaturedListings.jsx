"use client";
import PropertyCard from "./PropertyCard";

export default function FeaturedListings() {
  const properties = [
    { img: "https://images.unsplash.com/photo-1560185127-6b54cf3dbaf2?auto=format&fit=crop&w=400&q=80", title: "Luxury Villa", price: "$1,200,000" },
    { img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=400&q=80", title: "Modern Apartment", price: "$450,000" },
    { img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80", title: "Cozy Cottage", price: "$320,000" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10" id="listings">
      {properties.map((p, i) => (
        <PropertyCard key={i} img={p.img} title={p.title} price={p.price} />
      ))}
    </section>
  );
}