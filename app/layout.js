
"use client";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideNavbar = pathname === "/signin" 
                  || pathname === "/signup"
                  || pathname === "/admin"       // Admin Sign In
                  || pathname === "/admin/dashboard"; // Admin Dashboard

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen flex flex-col bg-white text-black font-sans">
        {!hideNavbar && <Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}