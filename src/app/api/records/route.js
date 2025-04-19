import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb"; 
import { Recordsform } from "../../../lib/models/record"; 

export async function POST(req) {
  await connectDB();
  try {
    const { name, date, task } = await req.json();
    const data = await Recordsform.create({ name, date, task });

    return NextResponse.json(
      {
        success: true,
        message: "Data saved successfully",
        data,
      },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        success: false,
        message: "Error while saving data",
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  await connectDB();
  try {
    const data = await Recordsform.find();

    return NextResponse.json(
      {
        success: true,
        message: "Data fetched successfully",
        data,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        success: false,
        message: "Error while fetching data",
      },
      { status: 400 }
    );
  }
}
