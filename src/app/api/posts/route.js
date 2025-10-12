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

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error!", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = new postModel(body);
  console.log(newPost)

  try {
    await DbConnect();
    await newPost.save();
    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
      console.error("POST /api/posts error:", error.message);
    return new NextResponse("Database error!", { status: 500 });
  }
};




