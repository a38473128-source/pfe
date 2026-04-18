// 
"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-3xl font-bold text-blue-600">RealEstate</h2>
          <p className="text-gray-500 text-sm mt-3">
            Modern real estate platform in Morocco.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-gray-500">
          <h3 className="font-semibold text-gray-800 mb-2">Company</h3>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Blog</a>
          <a href="#" className="hover:text-blue-600">Careers</a>
        </div>

        <div className="flex flex-col gap-2 text-gray-500">
          <h3 className="font-semibold text-gray-800 mb-2">Explore</h3>
          <a href="#" className="hover:text-blue-600">Listings</a>
          <a href="#" className="hover:text-blue-600">Agents</a>
          <a href="#" className="hover:text-blue-600">Cities</a>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
          <p className="text-gray-500 text-sm">Marrakech, Morocco</p>
          <p className="text-gray-500 text-sm">support@realestate.com</p>
          <input
            type="email"
            placeholder="Email"
            className="mt-3 w-full px-3 py-2 border rounded-xl"
          />
          <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
            Join
          </button>
        </div>

      </div>

      {/* Map Section */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h3 className="font-semibold text-gray-800 mb-3">Find Us</h3>
          <div className="w-full rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13587.2837598573!2d-8.013794849999995!3d31.6387527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9b1f304fc1%3A0xc6e2e7f70606fb57!2sH%C3%B4pital%20Ibn%20Tofail!5e0!3m2!1sfr!2sma!4v1776430620919!5m2!1sfr!2sma"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-3">
          <p>© 2026 RealEstate</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Support</span>
          </div>
        </div>
      </div>

    </footer>
  );
}