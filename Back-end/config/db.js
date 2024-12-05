import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rusirujayanga:On8iQVu8z00NZ2c7@cluster0.faors.mongodb.net/E-commerce-platform-MERN-PUSL3120"
    )
    .then(() => console.log("Connected"));
};
