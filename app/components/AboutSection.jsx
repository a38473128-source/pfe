"use client";

import { Home, ShieldCheck, Users, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Us
        </h2>
        <p className="text-gray-500 mt-2">
          Building trust in real estate since day one
        </p>
      </div>

      {/* Main text */}
      <div className="text-gray-700 leading-relaxed space-y-5 text-center md:text-left">

        <p>
          We are a dedicated real estate platform focused on helping people find
          their perfect home, apartment, or investment property with ease and confidence.
        </p>

        <p>
          Our mission is to simplify the property search experience by providing
          accurate listings, verified information, and a smooth user experience
          from browsing to purchase.
        </p>

        <p>
          Whether you are a first-time buyer, an investor, or looking to rent,
          we connect you with the best opportunities in the market while ensuring
          transparency and trust at every step.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-4 gap-6 mt-12">

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <Home className="mx-auto text-blue-600 w-8 h-8 mb-3" />
          <h3 className="font-semibold">Smart Listings</h3>
          <p className="text-sm text-gray-500 mt-1">
            Curated properties tailored to your needs
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <ShieldCheck className="mx-auto text-blue-600 w-8 h-8 mb-3" />
          <h3 className="font-semibold">Verified Properties</h3>
          <p className="text-sm text-gray-500 mt-1">
            Every listing is checked for accuracy
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <Users className="mx-auto text-blue-600 w-8 h-8 mb-3" />
          <h3 className="font-semibold">Expert Agents</h3>
          <p className="text-sm text-gray-500 mt-1">
            Professional support whenever you need
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <Globe className="mx-auto text-blue-600 w-8 h-8 mb-3" />
          <h3 className="font-semibold">Wide Coverage</h3>
          <p className="text-sm text-gray-500 mt-1">
            Properties across multiple cities
          </p>
        </div>

      </div>
    </section>
  );
}