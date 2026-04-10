"use client";
import { useState, useEffect } from "react";
import { Menu, X, Home, Search, User } from "lucide-react";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(storedUser);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <Home className="w-6 h-6" />
          <span>RealEstate</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
          </li>
          <li>
            <a href="#listings" className="hover:text-blue-600 transition">Listings</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
          </li>

          <li>
            <div className="flex items-center gap-3">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              ) : (
                <>
                  <a
                    href="/signin"
                    className="px-4 py-2 rounded-xl border border-blue-500 text-blue-600 hover:bg-blue-50 transition"
                  >
                    Log In
                  </a>
                  <a
                    href="/signup"
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    Register
                  </a>
                </>
              )}
            </div>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <a href="#home" className="block">Home</a>
          <a href="#listings" className="block">Listings</a>
          <a href="#contact" className="block">Contact</a>
          <a href="#about" className="block">About</a>

          <div className="pt-4 border-t">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 rounded-xl bg-red-500 text-white"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <a
                  href="/signin"
                  className="px-4 py-2 rounded-xl border text-center"
                >
                  Log In
                </a>
                <a
                  href="/signup"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-center"
                >
                  Register Up
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}