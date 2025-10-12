import DbConnect from "@/lib/dbconnect"
import { NextResponse } from "next/server"
import postModel from "@/models/post"


export const GET=async(request,{params})=>{
    const {id}=await params
    try {
        await DbConnect()

        const post=await postModel.findById(id)
        return new NextResponse(JSON.stringify(post),{status:200})
        
    } catch (error) {
        return new NextResponse("DataBase error!",{status:500})
    }
    //fetch
    
}


export const DELETE = async (request, { params }) => {
  const { id } = await params;
  try {
    await DbConnect();
    await postModel.findByIdAndDelete(id);
    return new NextResponse("Post deleted", { status: 200 });
  } catch (error) {
    console.error("DELETE /api/posts/:id error:", error.message);
    return new NextResponse(`Database error: ${error.message}`, { status: 500 });
  }
};