import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Email and password are required" }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("realestate");

  const user = await db.collection("users").findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return new Response(JSON.stringify({ error: "Invalid password" }), { status: 401 });
  }

  return new Response(JSON.stringify({ message: "Login success", userId: user._id }), { status: 200 });
}