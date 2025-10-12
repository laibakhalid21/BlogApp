import UserModel from "@/models/user";
import DbConnect from "@/lib/dbconnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    await DbConnect();

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new NextResponse("User has been created successfully", {
      status: 201,
    });
  } catch (err) {
    console.error("Registration Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
