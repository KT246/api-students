import { Router } from "express";
import {
  getAllStudents,
  getStudentById,
  deleteStudent,
  updateStudent,
  createStudents,
} from "../controllers/student.controller";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.use(authMiddleware);

router.get("/students", getAllStudents);
router.post("/students", createStudents);
router.get("/students/:id", getStudentById);
router.delete("/students/:id", deleteStudent);
router.put("/students/:id", updateStudent);

export default router;
