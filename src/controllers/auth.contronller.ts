import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.model";
import bcrypt from "bcrypt";

/// login
export const logIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Email not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const secret = process.env.JWT_SECRET || "mykeySecret";
    const token = jwt.sign({ id: admin._id, email: admin.email }, secret, {
      expiresIn: "1h",
    });
    return res.json({ message: "Login successful", token: token });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

/// register
export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({
      email,
    });
    if (existingAdmin) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ email, password: hashedPassword });
    res.json({ message: "Register success", data: admin });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};
