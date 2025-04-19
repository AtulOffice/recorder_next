import { UserModels } from "../../../../lib/models/user";
import { connectDB } from "../../../../lib/mongodb";
import { NextResponse } from 'next/server';

export async function GET(req, context) {
  try {
    await connectDB();
    const { id } = await context.params;
    const user = await UserModels.findById(id);

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "User fetched", user });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: "Error fetching user" },
      { status: 400 }
    );
  }
}
