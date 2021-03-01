import express from"express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import jwtValidate from "express-jwt";
import userRoutes from "./routes/users";
import rolesRoutes from "./routes/roles";
import authRoutes from "./routes/auth";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", rolesRoutes);
app.use("/api/v1", authRoutes);

export default app;