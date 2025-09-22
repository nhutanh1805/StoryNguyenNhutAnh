import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // dữ liệu từ form
    const { title, description, image, content } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "Thiếu dữ liệu" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("storyDB"); // tên database bạn muốn
    const stories = db.collection("stories");

    const result = await stories.insertOne({
      title,
      description,
      image,
      content,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
