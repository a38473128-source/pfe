"use client";
import { useState } from "react";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }),
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
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input placeholder="First Name" className="border p-2" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input placeholder="Last Name" className="border p-2" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" className="border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" className="border p-2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        {error && <p className="text-red-500">{error}</p>}

        <button className="bg-blue-600 text-white py-2">
          Sign Up
        </button>
      </form>
    </div>
  );
}