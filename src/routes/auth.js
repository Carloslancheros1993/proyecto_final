import express from "express";
import {signup, login, resetPassword} from "../controllers/auth";

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/reset-password", resetPassword);
router.post("/update-password");

export default router;