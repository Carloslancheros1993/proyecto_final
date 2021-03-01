import express from "express";
import {signup} from "../controllers/auth";

const router = express.Router();

router.post("/login");
router.post("/signup", signup);
router.post("/reset-password");
router.post("/update-password");

export default router;