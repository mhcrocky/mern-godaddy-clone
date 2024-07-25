import mongoose from "mongoose";
import { Types } from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  done: {
    type: Boolean,
  },
  userId: {
    type: Types.ObjectId
  }
});

export default mongoose.model("Todo", TodoSchema);
