import { UserModels } from "../../../../lib/models/user";
import { connectDB } from "../../../../lib/mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const { username, password, role } = await req.json();

    const exists = await UserModels.findOne({ username });
    if (exists) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModels.create({
      username,
      password: hashedPassword,
      role,
    });

    return NextResponse.json(
      { success: true, message: "User created", user },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "User creation failed" },
      { status: 400 }
    );
  }
}

export async function GET(req) {
  try {
    return NextResponse.json(
      { message: "hello world" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "something is wrong" },
      { status: 400 }
    );
  }
}
