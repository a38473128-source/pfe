"use client";

import { Button } from "../../shadcn-ui/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {}
        <div className="space-y-6">

          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
            Trusted Real Estate Platform
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Find Your <span className="text-blue-600">Dream Home</span>
            <br /> in Morocco Easily
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Discover premium villas, apartments, and lands with verified
            listings. Buy, sell, or rent properties with confidence and
            zero stress using our modern real estate platform.
          </p>

          {/* STATS */}
          <div className="flex gap-8 pt-4">
            <div>
              <p className="text-2xl font-bold text-blue-600">2.5K+</p>
              <p className="text-sm text-gray-500">Properties</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">1.2K+</p>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">50+</p>
              <p className="text-sm text-gray-500">Agents</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-xl text-base">
              Explore Listings
            </Button>

            <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
              Contact Agent
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          <div className="absolute -top-6 -left-6 w-40 h-40 bg-blue-100 rounded-2xl blur-2xl"></div>

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
            alt="Real Estate"
            className="rounded-3xl shadow-2xl relative z-10"
          />

          {/* floating card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl px-4 py-3 z-20">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-lg font-bold text-blue-600">$120,000</p>
          </div>

        </div>

      </div>
    </section>
  );
}