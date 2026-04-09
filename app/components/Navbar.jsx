"use client";
import { useState, useEffect } from "react";

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
    <nav className={`fixed top-0 w-full z-50 bg-white ${shadow ? "shadow-md" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">RealEstate</div>

        <ul className="hidden md:flex gap-8">
          <li><a href="#home">Home</a></li>
          <li><a href="#listings">Listings</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>

          {user ? (
            <li>
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </li>
          ) : (
            <>
              <li><a href="/signin">Sign In</a></li>
              <li><a href="/signup">Sign Up</a></li>
            </>
          )}
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          ☰
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-white">
          <li><a href="#home">Home</a></li>
          <li><a href="#listings">Listings</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>

          {user ? (
            <li>
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </li>
          ) : (
            <>
              <li><a href="/signin">Sign In</a></li>
              <li><a href="/signup">Sign Up</a></li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}