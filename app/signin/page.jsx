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
    window.location.href = "/"; // Redirect to Home page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">RealEstate Sign In</h1>
      <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
        <input placeholder="Email" type="email" className="border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" className="border p-2 rounded" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign In</button>
      </form>
    </div>
  );
}