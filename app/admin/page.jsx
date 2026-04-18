"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "admin123") {

      // 🔥 save admin
      localStorage.setItem("user", JSON.stringify({
        name: "Admin",
        email,
        role: "admin"
      }));

      router.push("/admin/dashboard");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-10 shadow-lg flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Admin Login</h2>

        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

        <button className="bg-blue-600 text-white py-2">Login</button>
      </form>
    </div>
  );
}