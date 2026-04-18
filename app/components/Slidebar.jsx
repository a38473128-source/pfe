"use client";

import { useState } from "react";
import ProtectedLink from "./ProtectedLinks";
import {
  Menu,
  Home,
  Search,
  MapPin,
  Heart,
  Users,
  Phone,
  User,
  Settings,
  LogOut,
  ChevronDown,
  X,
} from "lucide-react";

export default function Slidebar({ user, onLogout }) {
  const [open, setOpen] = useState(false);

  const [sections, setSections] = useState({
    home: false,
    properties: false,
    locations: false,
    favorites: false,
    agents: false,
    contact: false,
  });

  const toggleSection = (key) => {
    setSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleLogoutClick = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (!confirmLogout) return;

    onLogout();
    window.location.href = "/signin";
  };

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-[99999] bg-[#041833] text-white p-3 rounded-md shadow-lg"
      >
        <Menu size={22} />
      </button>

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#041833] text-white p-5 z-40 transform transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">Real Estate</h2>
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="space-y-4">
          {/* HOME */}
          <div className="border-b border-white/10 pb-3">
            <button
              onClick={() => toggleSection("home")}
              className="flex justify-between items-center w-full py-2 px-2 hover:bg-white/10 rounded-md"
            >
              <span className="flex items-center gap-2">
                <Home size={18} /> Home
              </span>
              <ChevronDown size={16} />
            </button>

            {sections.home && (
              <div className="ml-6 mt-3 space-y-3 text-sm border-l border-white/20 pl-4">
                {/* 🔥 FIXED */}
                <ProtectedLink user={user} href="/admin/dashboard" className="block">
                  Dashboard
                </ProtectedLink>

                <ProtectedLink user={user} href="/properties" className="block">
                  Latest Properties
                </ProtectedLink>

                <ProtectedLink user={user} href="/properties" className="block">
                  Featured Listings
                </ProtectedLink>
              </div>
            )}
          </div>

          {/* PROPERTIES */}
          <div className="border-b border-white/10 pb-3">
            <button
              onClick={() => toggleSection("properties")}
              className="flex justify-between items-center w-full py-2 px-2 hover:bg-white/10 rounded-md"
            >
              <span className="flex items-center gap-2">
                <Search size={18} /> Properties
              </span>
              <ChevronDown size={16} />
            </button>

            {sections.properties && (
              <div className="ml-6 mt-3 space-y-3 text-sm border-l border-white/20 pl-4">
                <ProtectedLink user={user} href="/properties" className="block">
                  All Properties
                </ProtectedLink>

                <ProtectedLink user={user} href="/properties" className="block">
                  Buy
                </ProtectedLink>

                <ProtectedLink user={user} href="/properties" className="block">
                  Rent
                </ProtectedLink>

                <ProtectedLink user={user} href="/properties" className="block">
                  Luxury Homes
                </ProtectedLink>

                <ProtectedLink user={user} href="/properties" className="block">
                  Commercial
                </ProtectedLink>
              </div>
            )}
          </div>

          {/* LOCATIONS */}
          <div className="border-b border-white/10 pb-3">
            <button
              onClick={() => toggleSection("locations")}
              className="flex justify-between items-center w-full py-2 px-2 hover:bg-white/10 rounded-md"
            >
              <span className="flex items-center gap-2">
                <MapPin size={18} /> Locations
              </span>
              <ChevronDown size={16} />
            </button>

            {sections.locations && (
              <div className="ml-6 mt-3 space-y-3 text-sm border-l border-white/20 pl-4">
                <ProtectedLink user={user} href="/locations" className="block">
                  By City
                </ProtectedLink>

                <ProtectedLink user={user} href="/locations" className="block">
                  Popular Areas
                </ProtectedLink>

                <ProtectedLink user={user} href="/locations" className="block">
                  Map View
                </ProtectedLink>
              </div>
            )}
          </div>

          {/* FAVORITES */}
          <div className="border-b border-white/10 pb-3">
            <button
              onClick={() => toggleSection("favorites")}
              className="flex justify-between items-center w-full py-2 px-2 hover:bg-white/10 rounded-md"
            >
              <span className="flex items-center gap-2">
                <Heart size={18} /> Favorites
              </span>
              <ChevronDown size={16} />
            </button>

            {sections.favorites && (
              <div className="ml-6 mt-3 space-y-3 text-sm border-l border-white/20 pl-4">
                <ProtectedLink user={user} href="/favorites" className="block">
                  Saved Properties
                </ProtectedLink>

                <ProtectedLink user={user} href="/favorites" className="block">
                  Recently Viewed
                </ProtectedLink>
              </div>
            )}
          </div>

          {/* AGENTS */}
          <div className="border-b border-white/10 pb-3">
            <button
              onClick={() => toggleSection("agents")}
              className="flex justify-between items-center w-full py-2 px-2 hover:bg-white/10 rounded-md"
            >
              <span className="flex items-center gap-2">
                <Users size={18} /> Agents
              </span>
              <ChevronDown size={16} />
            </button>

            {sections.agents && (
              <div className="ml-6 mt-3 space-y-3 text-sm border-l border-white/20 pl-4">
                <ProtectedLink user={user} href="/agents" className="block">
                  All Agents
                </ProtectedLink>

                <ProtectedLink user={user} href="/agents" className="block">
                  Top Rated
                </ProtectedLink>
              </div>
            )}
          </div>

          {/* CONTACT */}
          <div className="border-b border-white/10 pb-3">
            <button
              onClick={() => toggleSection("contact")}
              className="flex justify-between items-center w-full py-2 px-2 hover:bg-white/10 rounded-md"
            >
              <span className="flex items-center gap-2">
                <Phone size={18} /> Contact
              </span>
              <ChevronDown size={16} />
            </button>

            {sections.contact && (
              <div className="ml-6 mt-3 space-y-3 text-sm border-l border-white/20 pl-4">
                <ProtectedLink user={user} href="/contact" className="block">
                  Contact Us
                </ProtectedLink>

                <ProtectedLink user={user} href="/faq" className="block">
                  FAQ
                </ProtectedLink>
              </div>
            )}
          </div>

          {/* AUTH */}
          <div className="pt-6 space-y-3">
            {user ? (
              <>
                {/* 🔥 FIXED */}
                <ProtectedLink
                  user={user}
                  href="/admin/dashboard"
                  className="flex items-center gap-2"
                >
                  <User size={18} /> Dashboard
                </ProtectedLink>

                <ProtectedLink
                  user={user}
                  href="/settings"
                  className="flex items-center gap-2"
                >
                  <Settings size={18} /> Settings
                </ProtectedLink>

                <button
                  onClick={handleLogoutClick}
                  className="flex items-center gap-2 text-red-400"
                >
                  <LogOut size={18} /> Logout
                </button>
              </>
            ) : (
              <>
                <ProtectedLink user={user} href="/signin" className="block">
                  Login
                </ProtectedLink>

                <ProtectedLink user={user} href="/signup" className="block">
                  Sign Up
                </ProtectedLink>
              </>
            )}
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30"
        />
      )}
    </>
  );
}