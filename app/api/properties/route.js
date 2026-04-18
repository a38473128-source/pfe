import { NextResponse } from "next/server";
import { getDB } from "../../lib/db";

export async function GET() {
  try {
    const db = await getDB();

    const listings = await db
      .collection("listings")
      .find({})
      .toArray();

    return NextResponse.json(listings || []);

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { message: "Error fetching properties" },
      { status: 500 }
    );
  }
}