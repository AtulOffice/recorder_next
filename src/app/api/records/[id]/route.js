import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/mongodb"; 
import { Recordsform } from "../../../../lib/models/record"; 

export async function DELETE(req, context) {
  await connectDB();
  try {
    const { id } = await context.params;

    const deletedRecord = await Recordsform.findByIdAndDelete(id);

    if (!deletedRecord) {
      return NextResponse.json(
        { success: false, message: "Record not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Record deleted successfully",
        data: deletedRecord,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        success: false,
        message: "Error while deleting the record",
      },
      { status: 400 }
    );
  }
}
