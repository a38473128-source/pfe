"use client";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) return setError(data.error);

    // ✅ save user
    localStorage.setItem("user", JSON.stringify(data.userId));

    // redirect
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input type="email" placeholder="Email" className="border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2" value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className="text-red-500">{error}</p>}

        <button className="bg-blue-600 text-white py-2">
          Sign In
        </button>
      </form>
    </div>
  );
}