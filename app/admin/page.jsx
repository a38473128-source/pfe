"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا تقدر تزيد التحقق من الـ admin account من DB
    if(email === "admin@example.com" && password === "admin123") {
      alert("Welcome Admin!");
      router.push("/admin/dashboard"); // بعد ما يسجل يدخل للـ dashboard
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="mb-8 cursor-pointer" onClick={() => router.push("/")}>
        <h1 className="text-4xl font-bold text-blue-600">RealEstate</h1>
      </div>
      <form className="bg-white shadow-lg rounded-lg p-12 w-full max-w-md flex flex-col gap-6" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-4">Admin Sign In</h2>
        <input
          type="email"
          placeholder="Enter Admin Email"
          className="border-2 border-gray-300 rounded px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="border-2 border-gray-300 rounded px-4 py-3 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="bg-gray-500 text-white rounded py-3 font-semibold text-lg hover:bg-green-600 transition-colors">
          Sign In
        </button>
      </form>
    </div>
  );
}