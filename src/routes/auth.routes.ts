import { Router } from "express";
import { logIn, register } from "../controllers/auth.contronller";

const router = Router();

router.post("/login", logIn);
router.post("/register", register);

export default router;
