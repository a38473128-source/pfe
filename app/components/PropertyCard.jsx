"use client";

import Image from "next/image";

export default function InvestCard() {
  return (
    <section className="relative overflow-hidden mt-24 mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-blue-400 to-blue-200 text-white">

      {/* CONTENT */}
      <div className="relative z-10 px-10 py-20 flex flex-col gap-6 items-start">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We Provide You The Simple Ways <br />
          To Invest In Real Estate
        </h1>

        <p className="text-gray-300 max-w-2xl text-lg">
          Discover modern real estate opportunities with verified listings,
          smart investment tools, and trusted agents. Build your future with
          confidence and security.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl font-semibold shadow-lg">
          Contact Us
        </button>

      </div>

      {/* DECOR IMAGE (floating style) */}
      <div className="absolute right-[-10%] bottom-0 opacity-40 scale-125">
        <Image
          src="/BOYSPALM_-removebg-preview.png"
          alt="decor"
          width={700}
          height={700}
          className="object-contain"
        />
      </div>

      {/* glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent" />

    </section>
  );
}