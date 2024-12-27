import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rusirujayanga:qDuxett8nA30BSs2@cluster0.faors.mongodb.net/E-commerce-platform-MERN-PUSL3120"
    );
    console.log("Connected_dbjs");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};
