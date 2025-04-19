import { UserModels } from "../../../../lib/models/user";
import { connectDB } from "../../../../lib/mongodb";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    await connectDB();
    const { username, password } = await req.json();

    const user = await UserModels.findOne({ username }).select("+password");
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return NextResponse.json({ success: true, message: "Login successful", token });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Login error" }, { status: 400 });
  }
}
