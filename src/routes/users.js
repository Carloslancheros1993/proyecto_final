import express from "express";
import {getAll} from "../controllers/user";

const router = express.Router();

router.get("/users", getAll);
router.get("/users/:id");
router.post("/users");
router.put("/users");
router.delete("/users/:id");

export default router;