import { Request, Response } from "express";
import Student from "../models/student.model";

// create students
export const createStudents = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const students = await Student.create(req.body);
    res.json({ message: "create student success", data: students });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

// Get all students
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.json({ message: "get all students success", data: students });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

/// Get student by ID
export const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const students = await Student.findById(id);
    if (!students) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({ message: "get by id success", data: students });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

/// Delete student
export const deleteStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const students = await Student.findByIdAndDelete(id);
    res.json({ message: "delete student success", data: students });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

/// Put student
export const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const students = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json({ message: "update student success", data: students });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
