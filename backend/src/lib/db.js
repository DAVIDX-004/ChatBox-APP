import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not set");
    }
    console.log("MONGODB CONNECTED:", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB:", error);
    process.exit(1); // 1 status code means fail, 0 means success
  }
};