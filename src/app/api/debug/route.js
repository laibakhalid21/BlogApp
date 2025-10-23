import DbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import postModel from "@/models/post";

export async function GET() {
  try {
    await DbConnect();
    
    const posts = await postModel.find();
    
    return NextResponse.json({
      message: "Debug info",
      totalPosts: posts.length,
      posts: posts,
      samplePost: posts[0] || "No posts found"
    });
  } catch (error) {
    return NextResponse.json({
      error: "Database error",
      details: error.message
    }, { status: 500 });
  }
}
