// import mongoose from "mongoose";
// import { MONGODB_URI } from '../config/index';

// const connectDB = async () => {
//   const db = await mongoose.connect(MONGODB_URI as string);
//   console.log("Database Connected");
//   return db;
// };

// export default connectDB;

import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const connectDB = async () => {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(
    // 'mongodb://localhost:27017/testjob'
    getUri
  );
  console.log("Database Connected");
  return db;
};

export default connectDB;