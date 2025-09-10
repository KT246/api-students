import { Schema, model, Document } from "mongoose";

export interface IStudent extends Document {
  studentId: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  gender?: "male" | "female" | "other";
  dob?: Date;
  age: number;
  major: string;
  createdAt: Date;
  updatedAt: Date;
}

const studentSchema = new Schema<IStudent>(
  {
    studentId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "other",
    },
    dob: { type: Date },
    age: { type: Number, required: true, min: 16, max: 100 },
    major: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<IStudent>("Student", studentSchema);
