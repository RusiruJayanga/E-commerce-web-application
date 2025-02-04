import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect();
    console.log("Connected_dbjs");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};
