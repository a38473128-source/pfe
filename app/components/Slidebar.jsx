"use client";

import Link from "next/link";
import { Home, Search, Heart, User, LogOut, Menu } from "lucide-react";
import { Button } from "../../shadcn-ui/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../shadcn-ui/ui/sheet";

export default function Slidebar({ user, onLogout }) {
  return (
    <>
      <div className="md:hidden p-4 fixed top-0 left-0 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="bg-[#041833] text-white w-64">
            <MenuContent user={user} onLogout={onLogout} />
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex flex-col w-64 h-screen bg-[#041833] text-white p-5 fixed left-0 top-0">
        <h2 className="text-xl font-bold mb-10">Real Estate</h2>
        <MenuContent user={user} onLogout={onLogout} />
      </div>
    </>
  );
}

function MenuContent({ user, onLogout }) {
  return (
    <ul className="space-y-5">
      <li>
        <Link href="/" className="flex items-center gap-3 hover:text-gray-300">
          <Home size={20} /> Home
        </Link>
      </li>

      <li>
        <Link href="/properties" className="flex items-center gap-3 hover:text-gray-300">
          <Search size={20} /> Properties
        </Link>
      </li>

      {user && (
        <>
          <li>
            <Link href="/favorites" className="flex items-center gap-3 hover:text-gray-300">
              <Heart size={20} /> Favorites
            </Link>
          </li>

          <li>
            <Link href="/admin/dashboard" className="flex items-center gap-3 hover:text-gray-300">
              <User size={20} /> Dashboard
            </Link>
          </li>

          <li>
            <button onClick={onLogout} className="flex items-center gap-3 text-red-400">
              <LogOut size={20} /> Logout
            </button>
          </li>
        </>
      )}

      {!user && (
        <>
          <li>
            <Link href="/signin" className="hover:text-gray-300">
              Login
            </Link>
          </li>
          <li>
            <Link href="/signup" className="hover:text-gray-300">
              Sign Up
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}