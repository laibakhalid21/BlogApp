import DbConnect from "@/lib/dbconnect"
import { NextResponse } from "next/server"
import postModel from "@/models/post"


export const GET = async (request, { params }) => {
    const { id } = await params;
    try {
        await DbConnect();

        const post = await postModel.findById(id);
        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }
        
        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.error("GET /api/posts/:id error:", error);
        return NextResponse.json(
            { error: "Database error", details: error.message }, 
            { status: 500 }
        );
    }
};


export const DELETE = async (request, { params }) => {
  const { id } = await params;
  try {
    await DbConnect();
    await postModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post deleted" }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/posts/:id error:", error.message);
    return NextResponse.json(
      { error: "Database error", details: error.message }, 
      { status: 500 }
    );
  }
};