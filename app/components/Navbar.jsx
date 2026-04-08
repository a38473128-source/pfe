"use client";
import { useState, useEffect } from "react";

export default function Navbar({ user }) {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white transition-shadow duration-300 ${shadow ? "shadow-md" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">RealEstate</div>
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#listings" className="hover:text-blue-600 transition-colors">Listings</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>

          {!user && (
            <>
              <li><a href="/signin" className="hover:text-blue-600 transition-colors">Sign In</a></li>
              <li><a href="/signup" className="hover:text-blue-600 transition-colors">Sign Up</a></li>
            </>
          )}
        </ul>
        <button className="md:hidden p-2 rounded-md" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen 
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <ul className="md:hidden bg-white w-full shadow-md flex flex-col items-center py-4 gap-4 font-medium">
          <li><a href="#home">Home</a></li>
          <li><a href="#listings">Listings</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          {!user && (
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