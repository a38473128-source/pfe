"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Slidebar";

import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const [user, setUser] = useState(null);

  const hideNavbar =
    pathname === "/signin" ||
    pathname === "/signup" ||
    pathname === "/admin" ||
    pathname === "/admin/dashboard";

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex bg-white text-black font-sans">
        
        
        <Sidebar user={user} onLogout={handleLogout} />

        
        <div className="flex-1 flex flex-col">
          {!hideNavbar && <Navbar />}

          <main className="flex-1 p-4">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}