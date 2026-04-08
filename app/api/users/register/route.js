import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const body = await req.json();
  const { firstName, lastName, email, password, confirmPassword } = body;

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
  }

  if (password !== confirmPassword) {
    return new Response(JSON.stringify({ error: "Passwords do not match" }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("realestate");

  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ error: "Email already in use" }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role: "user",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const result = await db.collection("users").insertOne(newUser);

  return new Response(JSON.stringify({ message: "User registered successfully", userId: result.insertedId }), { status: 201 });
}