import { NextResponse } from "next/server";
import { getDB } from "../../lib/db";


export async function GET() {
  try {
    const db = await getDB();

    const properties = await db
      .collection("listings")
      .find({})
      .toArray();

    return NextResponse.json(properties);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching properties" },
      { status: 500 }
    );
  }
}

// POST → إضافة عقار جديد
export async function POST(req) {
  try {
    const db = await getDB();

    const body = await req.json();

    const result = await db
      .collection("properties")
      .insertOne(body);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating property" },
      { status: 500 }
    );
  }
}