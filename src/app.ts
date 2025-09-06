import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import studentsRoutes from "./routes/student.routes";
import authsRoutes from "./routes/auth.routes";

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Test route
app.use("/api", studentsRoutes);
app.use("/auth", authsRoutes);

export default app;
