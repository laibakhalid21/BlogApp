import mongoose from "mongoose";

const connection = {};

const DbConnect = async () => {
  if (connection.isConnected) {
    console.log("Already connected to Database");
    return;
  }
  
  // Check if MONGODB_URI is set
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI environment variable is not set");
    throw new Error("Database URI not configured");
  }
  
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error; // Don't exit process, let the calling function handle it
  }
};

export default DbConnect;