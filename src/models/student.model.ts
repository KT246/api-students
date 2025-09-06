import { Schema, model, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  email: string;
  age: number;
  major: string;
  createdAt: Date;
}

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true, min: 16, max: 100 },
  major: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IStudent>("Student", studentSchema);
