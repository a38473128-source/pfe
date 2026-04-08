"use client";
export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10" id="home">
      <div className="flex-1">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">Find Your Dream Home</h1>
        <p className="text-gray-700 mb-6">
          Discover the best properties in your city. Buy, sell, or rent with ease and confidence.
        </p>
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Explore Listings
        </button>
      </div>
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Real Estate"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}