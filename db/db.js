import mongoose from "mongoose";
import { DB_URL } from "../config";

const connectDB =async() =>{
  try {
    await mongoose.connect(DB_URL)
  console.log("database connected");
  } catch (error) {
    console.log(error);
  }

}

export default connectDB