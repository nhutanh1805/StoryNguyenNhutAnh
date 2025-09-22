import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await clientPromise;
    const db = client.db("storyDB");
    const stories = db.collection("stories");

    const story = await stories.findOne({ _id: new ObjectId(params.id) });

    if (!story) {
      return NextResponse.json({ error: "Không tìm thấy truyện" }, { status: 404 });
    }

    return NextResponse.json(story);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
