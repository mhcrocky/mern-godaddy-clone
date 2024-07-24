import mongoose from "mongoose";
import { MONGODB_URI } from '../config/index';

const connectDB = async () => {
  const db = await mongoose.connect(MONGODB_URI as string);
  console.log("Database Connected");
  return db;
};

export default connectDB;
