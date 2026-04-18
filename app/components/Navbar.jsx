"use client";
import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser)); // 🔥 FIX

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Logout?");
    if (!confirmLogout) return;

    localStorage.removeItem("user");
    window.location.href = "/signin";
  };

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md ${shadow ? "shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          <Home className="w-6 h-6" />
          <span>RealEstate</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#listings">Listings</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>

          {user && (
            <li>
              <Link
                href={user.role === "admin" ? "/admin/dashboard" : "/admin/dashboard"}
                className="text-blue-600 font-semibold"
              >
                Dashboard
              </Link>
            </li>
          )}

          <li>
            <div className="flex items-center gap-3">
              {user ? (
                <>
                  <span className="font-semibold text-gray-800">
                    Hi, {user.name}
                  </span>

                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-xl bg-red-500 text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a href="/signin" className="px-4 py-2 border text-blue-600">
                    Log In
                  </a>
                  <a href="/signup" className="px-4 py-2 bg-blue-600 text-white">
                    Register
                  </a>
                </>
              )}
            </div>
          </li>
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}