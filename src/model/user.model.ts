import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: [true, "Email already exists"],
  },
  firsName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  address: { type: String },
  profile: { type: String },
  whitelist: { type: [String] }
});

export default mongoose.model("User", UserSchema);
