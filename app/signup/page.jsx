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
    window.location.href = "/"; // Redirect to Home page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">RealEstate Sign Up</h1>
      <form className="flex flex-col gap-4 w-80" onSubmit={handleSubmit}>
        <input placeholder="First Name" className="border p-2 rounded" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input placeholder="Last Name" className="border p-2 rounded" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input placeholder="Email" type="email" className="border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" className="border p-2 rounded" value={password} onChange={e => setPassword(e.target.value)} />
        <input placeholder="Confirm Password" type="password" className="border p-2 rounded" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign Up</button>
      </form>
    </div>
  );
}