"use client";

import { Mail, User, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-16"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Contact Us
        </h2>
        <p className="text-gray-500 mt-2">
          We usually reply within 24 hours
        </p>
      </div>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10">
        <form className="grid gap-5">

          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Your name"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}