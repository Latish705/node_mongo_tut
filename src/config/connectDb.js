import mongoose from "mongoose";

export const connnectDb = async () => {
  try {
    console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "Database connected successfully host : ",
      conn.connection.host
    );
    return;
  } catch (error) {
    console.log("Database couldn't connect", error);
  }
};
