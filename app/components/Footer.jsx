"use client";
export default function Footer() {
  return (
    <footer className="bg-white w-full border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-blue-600 font-bold text-xl mb-4 md:mb-0">RealEstate</div>
        <ul className="flex gap-6 text-gray-700 font-medium mb-4 md:mb-0">
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Home</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Listings</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
          <li className="hover:text-blue-600 transition-colors cursor-pointer">About</li>
        </ul>
        <div className="text-gray-500 text-sm">&copy; 2026 RealEstate. All rights reserved.</div>
      </div>
    </footer>
  );
}