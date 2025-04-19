import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBSTR);
    console.log("MongoDB Connected...");
  } catch (e) {
    console.log(e);
  }
};
