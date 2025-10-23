import DbConnect from "@/lib/dbconnect";
import { NextResponse } from "next/server";
import postModel from "@/models/post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await DbConnect();

    const posts = username
      ? await postModel.find({ username })
      : await postModel.find();

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("GET /api/posts error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts", details: error.message }, 
      { status: 500 }
    );
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    await DbConnect();
    
    const newPost = new postModel(body);
    await newPost.save();
    
    return NextResponse.json(
      { message: "Post has been created", post: newPost }, 
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/posts error:", error.message);
    return NextResponse.json(
      { error: "Failed to create post", details: error.message }, 
      { status: 500 }
    );
  }
};




